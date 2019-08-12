let url = 'https://newsapi.org/v2/top-headlines?language=en&apiKey=299bd1ce10c041dcb5fed513f6383fab';

function fetch() {
    $http.get({
        url: url,
        handler: function (resp) {
            let articles = resp.data.articles;
            let data = [];
            for (let article of articles) {
                if (!article.urlToImage) // advertisement
                    continue;
                data.push({
                    url: article.url,
                    image: {
                        src: article.urlToImage,
                    },
                    label: {
                        text: article.title,
                    }
                });
            }
            $("list").data = data;
            $("list").endRefreshing();
            $ui.clearToast();
        }
    })
}

exports.fetch = fetch;