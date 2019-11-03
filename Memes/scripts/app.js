const util = require("./util");
let success = $file.write({
    data: $clipboard.image.image.jpg(0.2),
    path: "temp.jpg"
})
if (!success) {
    $ui.alert({
        title: "Clipboard does not contain an image",
        message: "Copy an image and try again",
    });
    return;
}

let width = $clipboard.image.image.size.width;
let height = $clipboard.image.image.size.height;
width = 200;
height = 200;

$ui.render({
    props: {
        title: "加个字幕",
        navButtons: [{
                title: $l10n("SHARE"),
                symbol: util.ios13 ? "square.and.arrow.up" : null,
                handler: shareImage
            },
            {
                title: $l10n("COPY"),
                symbol: util.ios13 ? "doc.on.doc" : null,
                handler: copyImage
            }
        ]
    },
    views: [{
            type: "input",
            props: {
                id: "text-field"
            },
            layout: (make, view) => {
                make.left.top.right.inset(6);
                make.height.equalTo(36);
            },
            events: {
                ready: sender => sender.focus(),
                changed: sender => {
                    const text = sender.text;
                    // updateText(text);
                    $('label').text = text;
                }
            }
        },
        {
            type: "view",
            props: {
                id: "canvas"
            },
            layout: (make, view) => {
                make.centerX.equalTo(view.super);
                // make.size.equalTo($size(width, height + 50));
                make.size.equalTo($size(width, height));
                make.top.equalTo($("text-field").bottom).offset(6);
            },
            views: [{
                type: "image",
                props: {
                    src: "temp.jpg"
                },
                // layout: (make, view) => {
                //     make.top.equalTo($("text-field").bottom).offset(6);
                //     make.size.equalTo($size(width, height));
                // },
                layout: $layout.fill
            }, {
                type: "label",
                props: {
                    id: 'label',
                    align: $align.center,
                    textColor: $color('white'),
                    shadowColor: $color('black'),
                    font: $font("bold", 30)
                },
                layout: (make, view) => {
                    make.size.equalTo($size(width, 30));
                    make.left.equalTo(0);
                    make.top.equalTo(height - 30);
                }
            }]
        }
    ]
});

function copyImage() {
    const image = exportAsImage();
    $clipboard.image = image;
    util.successTaptic();
}

function shareImage() {
    const image = exportAsImage();
    $share.sheet(image);
    util.successTaptic();
}

function exportAsImage() {
    const canvas = $("canvas");
    const image = canvas.snapshot;
    return image;
}