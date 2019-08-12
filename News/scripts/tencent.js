function fetch() {
    $http.get({
        url: "https://xw.qq.com/",
        handler: function (resp) {
            let html = $xml.parse({
                string: resp.data,
                mode: 'html'
            }).rootElement;
            html.enumerate({
                xpath: 'a[href^="/cmsid/"]',
                handler: (element, i) => {
                    $console.info(element);
                }
            })
            // $console.info("out");
            $console.info("搁浅了");
        }
    })
}

exports.fetch = fetch;