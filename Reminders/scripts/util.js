const nums = {
    '天': 7,
    '日': 7, // let week start at Monday
    '零': 0,
    '今': 0,
    '一': 1,
    '明': 1,
    '二': 2,
    '两': 2,
    '后': 2,
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
let units = {
    '十': 10,
    '百': 100,
    '千': 1000,
    '万': 10000,
}

const convert = (s) => {
    let n = 0;
    if (s[0] === '十')
        s = '一' + s;

    for (const c of s) {
        if (c in nums) {
            n = n * 10 + nums[c];
        }
    }
    if (s[s.length - 1] in units) {
        n *= units[s[s.length - 1]];
    }
    return n;
}

const get_days_in_month = (month, year) => {
    let month_days = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = month_days[month];
    if (month === 2 && year % 4 === 0) {
        if (year % 100 !== 0 || year % 400 === 0) {
            days++;
        }
    }
    return days;
}

const parse = (query) => {
    // 明早八点 去买早饭 => target_date command
    //  明早八点 去买早饭 => query[0] = ' ', no parsing done at all
    // 明早八点起床 去星期五买早饭 => alarm: 明早八点, todo: 起床 去星期五..., no parsing done after first ' '
    let command = query;
    let space_index = query.indexOf(' ');
    // no parsing done if starts with ' '
    if (space_index >= 0) {
        if (space_index === 0) {
            return {
                target_date: null,
                command: command.trim(),
            };
        }
        // otherwise only parse until first ' '
        query = query.slice(0, space_index);
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
        minute = 0; // defaults hour to 10:00 AM

    if (match(/早上?/, query)) hour = 8;
    if (match(/上午/, query)) hour = 10;
    if (match(/中午/, query)) hour = 12;
    if (match(/下午/, query)) hour = 15;
    if (match(/晚上?/, query)) hour = 20;

    // mm/dd/yyyy, mm-dd-yyyy, mm.dd.yyyy
    result = match(/(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{2,4})/, query);
    if (result) {
        month = convert(result[1]);
        day = convert(result[2]);
        year = convert(result[3]);
    }

    // hh:MM
    result = match(/(\d{1,2}):(\d{1,2})/, query);
    if (result) {
        hour = convert(result[1]);
        minute = convert(result[2]);
    }

    result = match(/今?([明0-9一二两三四五六七八九十]+)年/, query);
    if (result) {
        year = result[1] === '明' ? year + 1 : convert(result[1]);
        month = 1;
        day = 1;
    }

    result = match(/(下个?)?([0-9一二两三四五六七八九十]+)?月(初|中旬?|底)?([0-9一二两三四五六七八九十]+)?[日号]?/, query);
    if (result) {
        if (result[1]) month++;
        else if (result[2]) month = convert(result[2]);
        day = 1;
        if (result[3] && result[3][0] === '中') {
            day = Math.floor(get_days_in_month(month, year) / 2);
        } else if (result[3] === '底') {
            day = get_days_in_month(month, year);
        }
        day = result[4] ? convert(result[4]) : day;
    }

    result = match(/([0-9一二两三四五六七八九十]+)?[日号]/, query);
    if (result) day = convert(result[1]);

    result = match(/(下*)个?(星期|周|礼拜)([1-7一二三四五六天日])/, query);
    if (result) {
        let day_of_week = now.getDay();
        if (day_of_week === 0) day_of_week += 7; // let week start at Monday
        let target = convert(result[3]);
        let offset = target - day_of_week;
        if (result[1]) offset += 7 * result[1].length;
        if (offset < 0) offset += 7;
        day += offset;
    }

    result = match(/([0-9零一二两三四五六七八九十]+)点整?([一三]刻|半)?([0-9零一二两三四五六七八九十]+)?分?/, query);
    if (result) {
        hour = convert(result[1]);
        if (result[2]) {
            minute = result[2] === '半' ? 30 : convert(result[2]) * 15;
        } else {
            minute = result[3] ? convert(result[3]) : 0;
        }
    }

    result = match(/(今|明|大*后)[早晚日天]/, query);
    if (result) {
        day += convert(result[1]);
        if (result[1].length > 1)  // 大大大大后天
            day += result[1].length - 1;
    }

    if (hour < 10) hour += 12; // 10点前默认晚上
    if (match(/(下午|晚上?|PM)/i, query) && hour < 13) hour += 12;
    if (match(/(上午|早上?|AM)/i, query) && hour > 13) hour -= 12;

    result = match(/([0-9零一二两三四五六七八九十百千万]+)?个?(月)?([0-9零一二两三四五六七八九十百千万]+)?个?(月|天|日|星期|周|礼拜)后/, query);
    if (result) {
        let first_n = result[1] || result[3];
        let second_n = result[3] || result[1];
        let month_offset = result[2] || result[4] === '月' ? convert(first_n) : 0;
        let day_offset = result[4] !== '月' ? convert(second_n) : 0;
        if (['星期', '周', '礼拜'].includes(result[4]))
            day_offset *= 7;
        month += month_offset;
        day += day_offset;
    }

    result = match(/([0-9零一二两三四五六七八九十百千万]+)?个?(半)?(小时)?([0-9零一二两三四五六七八九十百]+)?个?(小时|分钟?)后/, query);
    if (result && (result[3] || result[5])) {
        let first_n = result[1] || result[4];
        let second_n = result[4] || result[1];
        let hour_offset = (result[3] || result[5] === '小时') && first_n ? convert(first_n) : 0;
        let minute_offset = result[5] !== '小时' && second_n ? convert(second_n) : 0;
        minute_offset = (result[3] || result[5] === '小时') && result[2] ? 30 : minute_offset;
        hour = now.getHours() + hour_offset;
        minute = now.getMinutes() + minute_offset;
    }

    // if nothing is parsed
    if (alarm_texts.length === 0) {
        return {
            target_date: null,
            command: query || 'None'
        };
    }

    while (minute >= 60) {
        minute -= 60;
        hour++;
    }
    while (hour >= 24) {
        hour -= 24;
        day++;
    }

    // will not parse if offset too large
    if (Math.min(day, month) > 100000) {
        return {
            target_date: null,
            command: query
        };
    }

    while (month > 12) {
        month -= 12;
        year++;
    }

    while (day > get_days_in_month(month, year)) {
        day -= get_days_in_month(month, year);
        month++;
        if (month > 12) {
            month -= 12;
            year++;
        }
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
    let day_str = `${month_name[month - 1]} ${day}, ${year}`;
    if (month - 1 === now.getMonth() && year === now.getFullYear()) {
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
    command = new_command.trim();

    return {
        target_date,
        date_str,
        command: command || 'None'
    };
}

const add_reminder = (date, command) => {
    if (command === 'None') {
        $ui.toast("Empty todo!");
    } else {
        $reminder.create({
            title: command,
            alarmDate: date,
            url: "",
            handler: function (resp) {
                $ui.toast("Reminder added!");
                $('input').text = '';
                $('alarm').text = 'Alarm: No alarm';
                $('todo').text = 'Todo: None';
            }
        });
    }
}

module.exports = {
    parse: parse,
    add_reminder: add_reminder,
};