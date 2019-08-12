function fetch() {
    $http.get({
        url: "https://news-at.zhihu.com/api/4/news/latest",
        handler: function (resp) {
            // merge stories and top stories without duplicates
            let stories = resp.data.stories.concat(resp.data.top_stories.filter((x) => {
                for (let story of resp.data.stories)
                    if (story.id == x.id)
                        return false;
                return true;
            }));
            let data = [];
            for (let story of stories) {
                data.push({
                    url: "http://news-at.zhihu.com/story/" + story.id,
                    image: {
                        src: story.images ? story.images[0] : story.image
                    },
                    label: {
                        text: story.title
                    }
                })
            }
            $("list").data = data;
            $("list").endRefreshing();
            $ui.clearToast();
        }
    })
}

exports.fetch = fetch;