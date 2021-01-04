
var items = document.getElementsByClassName('item');
var goPreBtn = document.getElementById('goPre');
var goNextBtn = document.getElementById('goNext');
var points = document.getElementsByClassName('point');
var timer = null;
var index = 0;

// 清除函数，让轮播过的图片和点一起恢复不显示状态
var clearActive = function () {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'item';
    }
    for (var i = 0; i < points.length; i++) {
        points[i].className = 'point';
    }
}

// 排它思想，使整体遍历显示
var goIndex = function () {
    clearActive();
    items[index].className = 'item active';
    points[index].className = 'point active';
}

//给个例添加样式向前向后函数，之前是写来给左右按钮的
//后来嫌丑删了就留来刚好给再下面的点到哪个点播相应的图使用，原理相同
var goNext = function () {
    if (index < items.length) {
        goIndex();
        index++;
    }
    else {
        index = 0;
    }
}
var goPre = function () {
    if (index == 0) {
        index = items.length;
    }
    else {
        index--;
    }
    goIndex();
}

// click到哪个点就播相应的图
goNextBtn.addEventListener('click', function () {
    goNext();
})
goPreBtn.addEventListener('click', function () {
    goPre();
})
for (var i = 0; i < points.length; i++) {
    points[i].addEventListener('click', function () {
        var pointIndex = this.getAttribute('data-index');
        index = pointIndex;
        goIndex();
    });
}
// 计时器轮播
timer = setInterval(function () {
    goNextBtn.click();
}, 2000);

