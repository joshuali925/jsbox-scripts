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
    // 明天早上八点 去买早饭
    // target_date command
    let command = query;
    let tokens = query.split(' ');
    if (tokens.length > 1) {
        command = tokens[tokens.length - 1];
        query = tokens.slice(0, tokens.length - 1).join(' ');
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

    if (query.indexOf('上午') > 0) hour = 10;
    if (query.indexOf('中午') > 0) hour = 12;
    if (query.indexOf('下午') > 0) hour = 15;
    if (query.indexOf('晚') > 0) hour = 20;
    
    result = /(\d{1,2})\/(\d{1,2})\/(\d{2,4})/g.exec(query);
    if (result) {
        month = convert(result[1]);
        day = convert(result[2]);
        year = convert(result[3]);
    }
    
    result = /(\d{1,2}):(\d{1,2})/g.exec(query);
    if (result) {
        hour = convert(result[1]);
        minute = convert(result[2]);
    }

    result = /([0-9一二两三四五六七八九十]+)月/g.exec(query);
    if (result) month = convert(result[1]);

    result = /月([0-9一二两三四五六七八九十]+)[日号]?/g.exec(query);
    if (result) day = convert(result[1]);

    result = /(下*)(星期|周|礼拜)([1-7一二三四五六天日])/g.exec(query);
    if (result) {
        let day_of_week = now.getDay();
        if (day_of_week === 0) day_of_week += 7; // let week start at Monday
        let target = convert(result[3]);
        let offset = target - day_of_week;
        if (result[1]) offset += 7 * result[1].length;
        if (offset < 0) offset += 7;
        day += offset;
    }

    result = /([0-9一二两三四五六七八九十]+)天后/g.exec(query);
    if (result) day += convert(result[1]);

    result = /(大*)后天/g.exec(query);
    if (result) day += 2 + result[1].length;

    result = /([0-9一二两三四五六七八九十]+)点/g.exec(query);
    if (result) hour = convert(result[1]);

    result = /([0-9一二两三四五六七八九十]+)小时后/g.exec(query);
    if (result) {
        hour = now.getHours() + convert(result[1]);
        minute = now.getMinutes();
    }

    result = /点([0-9一二两三四五六七八九十]+)/g.exec(query);
    if (result) minute = convert(result[1]);

    result = /点(一|三)刻/g.exec(query);
    if (result) minute = convert(result[1]) * 15;


    result = /([0-9一二两三四五六七八九十]+)分钟?后/g.exec(query);
    if (result) minute = now.getMinutes() + convert(result[1]);

    if (hour < 10) hour += 12; // 10点前默认晚上

    if (query.indexOf('点半') >= 0) minute = 30;
    if (query.indexOf('明') >= 0) day++;
    if (query.search(/(下午|晚上?|PM)/gi) >= 0 && hour < 13) hour += 12;
    if (query.search(/(上午|早上?|AM)/gi) >= 0 && hour > 13) hour -= 12;

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
    
    if (tokens.length === 1) {
        let mask = Array.from({length: command.length}, (v, i) => true);
        for (let i = 0; i < alarm_texts.length; i++) {
            let start = alarm_texts[i][0];
            let end = alarm_texts[i][1];
            for (let j = start; j < end + 1; j++) {
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
    }

    return {
        target_date,
        date_str,
        command,
    };
}

const add_reminder = (date, command) => {
    $reminder.create({
        title: command,
        alarmDate: date,
        url: "",
        handler: function(resp) {
            $ui.toast("Reminder added!");
        }
    });
}



module.exports = {
    parse: parse,
    add_reminder: add_reminder,
};

