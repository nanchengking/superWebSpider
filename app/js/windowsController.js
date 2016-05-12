/**
 * Created by liushuqing on 16/5/12.
 */
var util = require('util');
var path = require("path");
var login = require('./login.js');
var casper=require('./casper.js');
var os = require("os");
exports.goToBaidu = function (keyWord) {
    global.gui.Window.open('http://www.baidu.com?ie=UTF-8&wd=' + keyWord, {
        position: 'center',
        width: 800,
        height: 800,
        title: "打开百度了啊啊啊"
    }, function (win) {
        getBaiduHtml(win)
    });
};
/**
 * 获得项目中页面的路径,可以直接open
 * @param page
 * @returns {string}
 */
exports.getPagePath = function (page) {
    var url = "file://" + path.join(process.cwd(), "app/html/", page) + ".html";
    return url;
};

/**
 * 在后台调用百度搜索
 * @param keyword
 */
exports.searchInBaidu=function(keyword){
    global.console.log("搜索关键字: "+keyword);
    casper.searchBaidu(keyword);
}

exports.goToLogin = function (company) {
    var url = exports.getPagePath("login");
    global.gui.Window.open(url, {
        position: 'center',
        width: 800,
        height: 800,
        title: "本地登陆"
    }, function (win) {
        login.init(win);
    });
};
function getBaiduHtml(win) {
    var dom = win.window;
    alert("加载之后标题是: " + win.title);
    win.on("loaded", "input", "", function () {
        //初始化页面元素必须在页面加载之后才能运行
        alert("加载之后标题是: " + dom.document.title);
    });
    win.on('loaded', function () {
        //初始化页面元素必须在页面加载之后才能运行
        alert("加载之后标题是: " + dom.document.title);
    });

    global.$(dom.document).ready(function () {
        //初始化页面元素必须在页面加载之后才能运行
        //alert("标题是"+win.title);
        //var body=global.$(dom.document);
        //var input=body.find("input");
        //alert("输入框是:"+input.html());
        //global.console.log(util.inspect(body));
    });
}
