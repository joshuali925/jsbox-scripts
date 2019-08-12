const url =
    "https://api.weibo.cn/2/guest/page?gsid=_2AkMtqmJ0f8NhqwJRmPEdxGnjaIx-wwDEieKb9pOvJRMxHRl-wT9kqnAAtRV6Bm0NBHg_Q_-5Rx4sx0moY_1sSSEoN2zx&uid=1009882141998&wm=3333_2001&i=ddd48a6&b=0&from=1084393010&checktoken=745495b139d5d0943c12418acc7a08f8&c=iphone&networktype=wifi&v_p=60&skin=default&s=ffffffff&v_f=1&did=10dc157a640f1c1bd53cbacbad02326f&lang=zh_CN&sflag=1&ft=0&moduleID=pagecard&uicode=10000011&featurecode=10000085&feed_mypage_card_remould_enable=1&luicode=10000003&count=20&extparam=filter_type%3Drealtimehot%26mi_cid%3D100103%26pos%3D0_0%26c_type%3D30%26display_time%3D1526132043&containerid=106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Drealtimehot&fid=106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Drealtimehot&page=1";

function fetch() {
    $http.get({
        url: url,
        handler: function (resp) {
            let cards = resp.data.cards[0].card_group;
            let data = [];
            cards.forEach((card, i) => {
                let icon = card.icon;
                let num = i;
                if (i == 0) num = "🏆";
                else if (i == 1) num = "🥇";
                else if (i == 2) num = "🥈";
                else if (i == 3) num = "🥉";
                let title = num + "、" + card.desc;
                data.push({
                    // url: 'https://m.weibo.cn/search?containerid=100103type%3D1%26q%3D' + $text.URLDecode(card.desc),  // no redirect, but only works on Safari
                    url: 'https://s.weibo.com/weibo' + $text.URLEncode(card.desc) + '&Refer=index',
                    image: {
                        src: icon ? icon : null,
                    },
                    label: {
                        text: title,
                    },
                });
            });
            $("list").data = data;
            $("list").endRefreshing();
            $ui.clearToast();
        }
    })
}

exports.fetch = fetch;