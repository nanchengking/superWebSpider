/**
 * Created by liushuqing on 16/5/12.
 */
var cheerio = require('cheerio');

exports.init = function init(win) {
    global.$(win.window.document).ready(function () {
        //初始化页面元素必须在页面加载之后才能运行
         window=win.window;
        var keyword=$("#keyword").val();
    });
};