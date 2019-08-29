const add_reminder = (date, command) => {
    if (command === 'None') {
        $ui.toast("Empty todo!");
    } else {
        $reminder.create({
            title: command,
            alarmDate: date,
            url: "",
            handler: function (resp) {
                if (!resp.error) {
                    $ui.toast("Reminder added!");
                    $device.taptic(0);
                    $('input').text = '';
                    $('alarm').text = 'Alarm: No alarm';
                    $('todo').text = 'Todo: None';
                } else {
                    $ui.alert({
                        title: "Error",
                        message: resp,
                    });
                }
                refresh_list();
            }
        });
    }
};

const refresh_list = () => {
    $reminder.fetch({
        handler: function (resp) {
            let events = resp.events.filter(reminder => !reminder.completed && reminder.calendar.title === 'Reminders');
            // console.log(events)
            // console.log(events[0].calendar)
            // console.log(events[0].alarmDate.toLocaleString())
            $('reminders').data = events.map(reminder => (reminder.alarmDate && reminder.alarmDate.toLocaleString() + ': ') + reminder.title).reverse();
        }
    });
};

module.exports = {
    add_reminder,
    refresh_list: refresh_list,
};
