const util = require('scripts/util');
const parse = util.parse;
const add_reminder = util.add_reminder;
let parsed;

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
                if (parsed.target_date) {
                    $('alarm').text = 'Alarm: ' + parsed.date_str;
                } else {
                    $('alarm').text = 'Alarm: No alarm';
                }
                $('todo').text = 'Todo: ' + parsed.command;
            },
            returned: (sender) => {
                if ($('input').text) {
                    add_reminder(parsed.target_date, parsed.command);
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
            text: 'Alarm: No alarm',
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
            id: 'todo',
            text: 'Todo: None',
        },
        layout: function (make, view) {
            make.top.equalTo($('alarm').bottom).inset(10);
            make.left.equalTo(10);
            make.right.equalTo(-10);
        }
    },
    ]
});