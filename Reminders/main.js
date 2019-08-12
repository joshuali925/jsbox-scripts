const util = require('scripts/util');
const parse = util.parse;
const add_reminder = util.add_reminder;

$ui.render({
    props: {
        title: "Reminders"
    },
    views: [{
        type: "input",
        props: {
        },
        layout: function (make, view) {
            make.left.top.equalTo(10);
            make.right.equalTo(-10);
            make.height.equalTo(32);
        },
        events: {
            changed: (sender) => {
                parsed = parse($("input").text);
                $('alarm').text = 'Alarm: ' + parsed.date_str;
                $('label').text = 'Todo: ' + parsed.command;
            },
            returned: (sender) => {
                if ($('input').text) {
                    add_reminder(parsed.target_date, parsed.command);
                    $('input').text = '';
                } else {
                    sender.blur();
                }
            },
            ready: (sender) => sender.focus(),
        }
    },
    {
        type: "label",
        props: {
            id: 'alarm',
            text: 'Alarm:',
        },
        layout: function (make, view) {
            make.top.equalTo($('input').bottom).inset(10);
            make.left.equalTo(10);
            make.right.equalTo(-10);
        }
    },
    {
        type: "label",
        props: {
            text: 'Todo:',
        },
        layout: function (make, view) {
            make.top.equalTo($('alarm').bottom).inset(10);
            make.left.equalTo(10);
            make.right.equalTo(-10);
        }
    },
    ]
});