function request(url) {
    $http.request({
        method: "GET",
        url: url,
        header: {

        },
        body: {

        },
        handler: function (resp) {
            var data = resp.data;
            $("label").text = data;
        }
    });
}

$ui.render({
    props: {
        title: "Hello, World!"
    },
    views: [{
        type: "text",
        props: {
            id: "label",
        },
        layout: $layout.fill
    }]
})

request('https://www.google.com')