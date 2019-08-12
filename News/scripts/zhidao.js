let url = 'https://zhidao.baidu.com/daily';
let data = [];

function fetch(curr_page = url) {
    $http.get({
        url: curr_page,
        handler: function (resp) {
            let html = resp.data;
            // get banner
            let pattern = /<a href="(\/daily\/view.*)" class="link".*\s<img class="banner-bg-img.*src="(.*)" width.*\s.*\s.*<span class="banner-title">(.*)<\/span>/g
            let match = pattern.exec(html);
            let article_url = url + match[1];
            let image = match[2];
            let title = match[3];
            push_data(data, article_url, image, title);

            pattern = /<a class="img-wp" href="\/daily(\/view.*)" target.*\s<img src="(.*)" alt="(.*)" title="/g
            match = pattern.exec(html);
            while (match) {
                let article_url = url + match[1];
                let image = match[2];
                let title = match[3];
                push_data(data, article_url, image, title);
                match = pattern.exec(html);
            }
            pattern = /<a href="\/daily(\/.*)" class.*前一期<\/a>/g
            match = pattern.exec(html);
            data.next_page = url + match[1];
            if (curr_page === url) // first time fetch twice
                fetch(data.next_page);
            $("list").data = data;
            $("list").endRefreshing();
            $ui.clearToast();
        }
    });
}

function fetch_more() {
    fetch(data.next_page);
}

function push_data(data, url, image, label) {
    // do not add duplicates
    // data.forEach((x) => { if (x.url === data.url) return; });  // async won't work
    for (x of data)
        if (x.url === url)
            return;
    data.push({
        url: url,
        image: {
            src: image,
        },
        label: {
            text: label,
        }
    });
}

exports.fetch = fetch;
exports.fetch_more = fetch_more;