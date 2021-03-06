const parse = require('scripts/parser').parse;
const util = require('scripts/util');
const {
    add_reminder,
    refresh_list
} = util;
let parsed;

refresh_list()

$ui.render({
    props: {
        title: "Reminders"
    },
    views: [{
            type: "input",
            props: {},
            layout: function (make, view) {
                make.left.top.equalTo(10);
                make.right.equalTo(-10);
                make.height.equalTo(32);
            },
            events: {
                changed: (sender) => {
                    parsed = parse($("input").text);
                    $('alarm').text = 'Alarm: ';
                    $('alarm').text += parsed.target_date ? parsed.date_str : 'No alarm';
                    $('todo').text = 'Todo: ';
                    $('todo').text += parsed.command ? parsed.command : 'None';
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
        {
            type: "list",
            props: {
                id: 'reminders',
                data: []
            },
            layout: function (make, view) {
                make.top.equalTo($('todo').bottom).inset(10);
                make.left.equalTo(10);
                make.right.equalTo(-10);
                make.bottom.inset(50);
            }
        },
    ]
});