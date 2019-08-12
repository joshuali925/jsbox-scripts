const dict = {
    "全部": all,
    "长度": length,
    "质量": mass,
    "温度": temperature,
    "汇率": currency,
}
const units = Object.keys(dict)

$ui.render({
    props: {
        title: "Converter"
    },
    views: [{
            type: "input",
            props: {
                type: $kbType.decimal
            },
            layout: function (make) {
                make.left.top.equalTo(10);
                make.size.equalTo($size(128, 32));
            },
            events: {
                ready: function (sender) {
                    sender.focus();
                    populate();
                },
                changed: function (sender) {
                    populate();
                }
            }
        },
        {
            type: "tab",
            props: {
                items: units
            },
            layout: function (make) {
                make.centerY.equalTo($("input"));
                make.right.inset(10);
                make.left.equalTo($("input").right).inset(10);
            },
            events: {
                changed: function (sender) {
                    populate();
                }
            }
        },
        {
            type: "list",
            props: {
                font: $font("bold", 10),
                rowHeight: 55.0,
                data: []
            },
            layout: function (make) {
                make.left.right.inset(10);
                make.top.equalTo($("input").bottom);
                make.bottom.inset(40);
            }
        }
    ]
});

function populate() {
    let convert = dict[units[$("tab").index]];
    let number = Number($("input").text);
    $("list").data = convert(number);
    //   var origin = Number($("input").text);
    //   var rate = rates[$("tab").index];
    //   var tip = origin * rate;
    //   $("label").text =
    //     origin.toFixed(2) +
    //     " + " +
    //     tip.toFixed(2) +
    //     " = " +
    //     (origin + tip).toFixed(2);
}

function length(number) {
    let data = [];
    let inches = number / 2.54;
    let ft = Math.floor(inches / 12);
    let in_remain = inches % 12;
    data.push(`${number} cm = ${+inches.toFixed(2)} inches = ${ft} ft ${+in_remain.toFixed(2)} in`)
    let cm = number * 2.54;
    ft = Math.floor(number / 12);
    in_remain = number % 12;
    data.push(`${number} inches = ${+cm.toFixed(2)} cm = ${ft} ft ${+in_remain.toFixed(2)} in`)
    return data;
}

function mass(number) {
    let data = [];
    let lbs = number / 0.907;
    let jin = number * 0.907;
    let kg = jin / 2;
    data.push(`${number} 斤 = ${+lbs.toFixed(2)} lbs`);
    data.push(`${number} lbs = ${+jin.toFixed(2)} 斤 = ${+kg.toFixed(2)} kg`);
    return data;
}

function temperature(number) {
    let data = [];
    let celsius = (number - 32) / 1.8;
    let fahrenheit = number * 1.8 + 32;
    data.push(`${number} °F = ${+celsius.toFixed(2)} °C`);
    data.push(`${number} °C = ${+fahrenheit.toFixed(2)} °F`);
    return data;
}

function currency(number) {

}

function all(number) {
    let data = [];
    for (let i = 0; i < units.length; i++) {
        if (i == $("tab").index)
            continue;
        let convert = dict[units[i]];
        data = data.concat(convert(number));
    }
    return data;
}