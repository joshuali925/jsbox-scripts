// { tag_name: module_to_fetch }
let dict = {
    "微博": require('scripts/weibo'),
    "新闻": require('scripts/newsapi'),
    "澎湃": require('scripts/pengpai'),
    "知乎": require('scripts/zhihu'),
    "知道": require('scripts/zhidao'),
    // "腾讯": require('scripts/tencent'),
};
let tab_items = Object.keys(dict);
let current = dict[tab_items[0]];

function fetch() {
    $ui.toast("loading...", 10);
    current.fetch();
}

function fetch_more() {
    if (typeof current.fetch_more === 'function') {
        $ui.toast("loading...", 10);
        current.fetch_more();
    }
}

function openURL(url) {
    $ui.push({
        props: {
            title: url,
            // navBarHidden: true,
        },
        views: [{
            type: "web",
            props: {
                url: url
            },
            layout: $layout.fill
        }]
    })
}

$ui.render({
    props: {
        title: "News",
    },
    views: [{
            type: "list",
            props: {
                id: "list",
                rowHeight: 55.0,
                template: [{
                        type: "image",
                        props: {
                            id: "image"
                        },
                        layout: function (make, view) {
                            make.left.top.bottom.inset(5);
                            make.width.equalTo(view.height);
                        }
                    },
                    {
                        type: "label",
                        props: {
                            id: "label",
                            font: $font(17),
                            lines: 0
                        },
                        layout: function (make) {
                            make.left.equalTo($("image").right).offset(10)
                            make.centerY.equalTo(0)
                            make.right.inset(5)
                        }
                    }
                ],

            },
            layout: function (make, view) {
                make.left.right.top.inset(0)
                make.bottom.inset(50)
            },

            events: {
                didSelect: function (tableView, indexPath) {
                    openURL(tableView.object(indexPath).url);
                },
                pulled: function (sender) {
                    fetch();
                },
                didReachBottom: function (sender) {
                    $delay(0.3, function () {
                        sender.endFetchingMore();
                        fetch_more();
                    });
                }
            }
        },
        {
            type: "tab",
            props: {
                id: "tab",
                items: tab_items
            },
            layout: function (make, view) {
                make.top.equalTo($("list").bottom).inset(0);
                make.centerX.equalTo(view.super);
            },
            events: {
                ready: (sender) => {
                    fetch();
                },
                changed: function (sender) {
                    current = dict[sender.items[sender.index]];
                    fetch();
                }
            }
        }
    ]
});