let url = 'https://www.thepaper.cn/';

function fetch() {
    $http.get({
        url: url,
        handler: function (resp) {
            let html = resp.data;
            let data = [];
            let pattern = /data-id="(\d+)".*<img src="\/\/(.*jpg)" alt="(.*)">/g
            let match = pattern.exec(html);
            while (match) {
                let article_url = url + '/newsDetail_forward_' + match[1];
                let image = 'http://' + match[2];
                let title = match[3];
                push_data(data, article_url, image, title);
                match = pattern.exec(html);
            }
            
            pattern = /\/span><a.*href="(\w+)">(.*)<\/a>/g
            match = pattern.exec(html);
            while (match) {
                let article_url = url + '/' + match[1];
                let title = match[2];
                push_data(data, article_url, null, title);
                match = pattern.exec(html);
            }
            
            $("list").data = data;
            $("list").endRefreshing();
            $ui.clearToast();
        }
    })
}

function push_data(data, url, image, label) {
    data.push({
        url: url,
        image: {
            src: image,
        },
        label: {
            text: label,
        }
    })
}

exports.fetch = fetch;