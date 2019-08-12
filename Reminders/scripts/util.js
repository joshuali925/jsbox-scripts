const nums = {
    '天': 7,
    '日': 7, // let week start at Monday
    '零': 0,
    '一': 1,
    '二': 2,
    '两': 2,
    '三': 3,
    '四': 4,
    '五': 5,
    '六': 6,
    '七': 7,
    '八': 8,
    '九': 9,
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
}

const convert = (s) => {
    let n = 0;
    let unit = 10;
    if (s === '十')
        return 10;

    for (const c of s) {
        if (c in nums) {
            n = n * unit + nums[c];
        } else if (c === '十' && s.length === 2) {
            n = n === 0 ? 1 : n * 10;
        }
    }
    return n;
}

const parse = (query) => {
    // 明早八点 去买早饭 => target_date command
    //  明早八点 去买早饭 => query[0] = ' ', no parsing done
    // 明早八点起床 去星期五买早饭 => alarm: 明早八点, todo: 起床 去..., no parsing done after first ' '
    let command = query;
    let tokens = query.split(' ');
    if (tokens.length > 1) {
        query = tokens[0];
        if (query.length === 0) {
            return {
                target_date: null,
                command: command
            };
        }
    }

    let alarm_texts = [];
    let match = (pattern, query) => {
        let result = pattern.exec(query);
        if (result) {
            alarm_texts.push([result.index, result.index + result[0].length]);
        }
        return result;
    }

    let now = new Date(),
        result;
    let year = now.getFullYear(),
        month = now.getMonth() + 1,
        day = now.getDate();
    let hour = 10,
        minute = 0; // defaults hour to 10 AM and minute to 0

    if (match(/上午/, query)) hour = 10;
    if (match(/中午/, query)) hour = 12;
    if (match(/下午/, query)) hour = 15;
    if (match(/晚上?/, query)) hour = 20;

    result = match(/(\d{1,2})\/(\d{1,2})\/(\d{2,4})/, query);
    if (result) {
        month = convert(result[1]);
        day = convert(result[2]);
        year = convert(result[3]);
    }

    result = match(/(\d{1,2}):(\d{1,2})/, query);
    if (result) {
        hour = convert(result[1]);
        minute = convert(result[2]);
    }

    result = match(/([0-9一二两三四五六七八九十]+)月/, query);
    if (result) month = convert(result[1]);

    result = match(/月([0-9一二两三四五六七八九十]+)[日号]?/, query);
    if (result) day = convert(result[1]);

    result = match(/(下*)(星期|周|礼拜)([1-7一二三四五六天日])/, query);
    if (result) {
        let day_of_week = now.getDay();
        if (day_of_week === 0) day_of_week += 7; // let week start at Monday
        let target = convert(result[3]);
        let offset = target - day_of_week;
        if (result[1]) offset += 7 * result[1].length;
        if (offset < 0) offset += 7;
        day += offset;
    }

    result = match(/(大*)后天/, query);
    if (result) day += 2 + result[1].length;

    result = match(/([0-9一二两三四五六七八九十]+)点/, query);
    if (result) hour = convert(result[1]);

    result = match(/点([0-9一二两三四五六七八九十]+)/, query);
    if (result) minute = convert(result[1]);

    result = match(/点(一|三)刻/, query);
    if (result) minute = convert(result[1]) * 15;

    if (hour < 10) hour += 12; // 10点前默认晚上
    if (match(/点半/, query)) minute = 30;
    if (match(/今天?/, query)) {};
    if (match(/明天?/, query)) day++;
    if (match(/(下午|晚上?|PM)/i, query) && hour < 13) hour += 12;
    if (match(/(上午|早上?|AM)/i, query) && hour > 13) hour -= 12;

    result = match(/([0-9一二两三四五六七八九十]+)天后/, query);
    if (result) day += convert(result[1]);

    result = match(/([0-9一二两三四五六七八九十]+)?个?(半)?(小时)?([0-9一二两三四五六七八九十]+)?(分钟?)?后/, query);
    if (result) {
        let hour_offset = result[1] ? convert(result[1]) : 0;
        let minute_offset = result[4] ? convert(result[4]) : 0;
        minute_offset = result[2] ? 30 : minute_offset;
        hour = now.getHours() + hour_offset;
        minute = now.getMinutes() + minute_offset;
        if (minute >= 60) {
            hour++;
            minute -= 60;
        }
        if (hour >= 24) {
            day++;
            hour -= 24;
        }
    }

    if (alarm_texts.length === 0) {
        return {
            target_date: null,
            command: query
        };
    }

    let target_date = new Date(year, month - 1, day, hour, minute, 0, 0);
    let hour_12 = hour,
        AP = 'AM';
    if (hour > 11) {
        AP = 'PM';
        if (hour > 12)
            hour_12 -= 12;
    }
    let month_name = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // let day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // let month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let day_name = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let minute_padded = minute > 10 ? minute : '0' + minute;
    let day_str = `${month_name[month - 1]} ${day}`;
    if (month - 1 === now.getMonth()) {
        if (day === now.getDate())
            day_str = 'Today';
        else if (day === now.getDate() + 1)
            day_str = 'Tomorrow';
    }
    let date_str = `${day_str}, ${day_name[target_date.getDay()]}, ${hour_12}:${minute_padded} ${AP}`;

    let mask = Array.from({
        length: command.length
    }, (v, i) => true);
    for (let i = 0; i < alarm_texts.length; i++) {
        let start = alarm_texts[i][0];
        let end = alarm_texts[i][1];
        for (let j = start; j < end; j++) {
            mask[j] = false;
        }
    }
    let new_command = '';
    for (let i = 0; i < command.length; i++) {
        if (mask[i]) {
            new_command += command[i];
        }
    }
    command = new_command;

    return {
        target_date,
        date_str,
        command,
    };
}

const add_reminder = (date, command) => {
    if (!command) {
        $ui.toast("Empty todo!");
    } else {
        $reminder.create({
            title: command,
            alarmDate: date,
            url: "",
            handler: function (resp) {
                $ui.toast("Reminder added!");
            }
        });
    }
}



module.exports = {
    parse: parse,
    add_reminder: add_reminder,
};