$ui.render({
    props: {
        title: "News"
    },
    views: [{
            type: "list",
            props: {
                id: "list",
                data: ["A", "B"],
            },
            layout: function (make, view) {
                make.left.right.top.inset(0)
                make.bottom.inset(50)
            },

            events: {
                
            }
        },
        {
            type: "tab",
            props: {
                id: "tab",
                items: ["item 1", "item 2", "item 3", "i"]
            },
            layout: function (make, view) {
                make.top.equalTo($("list").bottom).inset(0)
                make.centerX.equalTo(view.super)
            },
            events: {
                changed: function (sender) {
                    var index = sender.index
                    var items = sender.items
                    $ui.toast(index + ": " + items[index])
                }
            }
        }

    ]
});