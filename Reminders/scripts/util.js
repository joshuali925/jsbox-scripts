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
            }
        });
    }
};

module.exports = {
    add_reminder,
};
