document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
var timer = null;
window.onresize = function () {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
    timer = setTimeout(function () {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
    }, 100)
}

var data = [{
        img: '../images/1.png',
        title: '小度人工智能音箱',
        des: '入门必备款AI助手',
        price: '￥89'

    },
    {
        img: '../images/2.png',
        title: '小度在家1S',
        des: '大屏可触控音箱',
        price: '￥369'

    },
    {
        img: '../images/3.png',
        title: '小度人工智能音箱1S',
        des: '传统家电，动口就能操作',
        price: '￥149'

    },
    {
        img: '../images/4.png',
        title: '小度语音车载支架',
        des: '会导航，会逗趣，会聊天',
        price: '￥69'

    }
]

var sliding_block = document.getElementsByClassName("sliding-block")[0];
console.log(sliding_block)
var html = '';
for (var i = 0; i < data.length; i++) {
     html += `
        <dl>
            <dt><img src=${data[i].img} alt=""></dt>
            <dd>
                <p>${data[i].title}</p>
                <p>${data[i].des}</p>
                <p>${data[i].price}</p>
            </dd>
        </dl>
    `
}
sliding_block.innerHTML = html;
var bs = new BScroll('#con')