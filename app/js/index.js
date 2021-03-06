/**
 * Created by liushuqing on 16/5/11.
 */
function init() {
    global.$(global.window.document).ready(function () {
        //初始化页面元素必须在页面加载之后才能运行
        initPage();
    });
    var menu = require("./../js/menu.js");
    menu.initMenu();
}

function initPage() {
    var editor = require("./../js/editor.js");
    var controller=require("./../js/windowsController.js");
    var imat=require('./../js/casper.js');
    var textEditor = global.$('#editor');
    //绑定了两个事件  一个是input是非IE浏览器,监控input内容改变,一个是IE专属的属性
    textEditor.bind('input propertychange', function () {
        editor.reload();
    });
    console.log("初始化页面");
    var btn = global.$("#add");
    var content = $("#content");
    console.log("初始化页面"+btn.html()+content.html());
    btn.bind("click", function () {
        var item = "<div class='login'><label>登录名：<input class='text-primary lg-name' type='text' /></label><label>密码：<input class='psd' type='password' /></label><label>上传文件：<input class='file' type='file' /></label></div>";
        content.append(item);
    });
    var btnBaidu = global.$('#baidu');
    btnBaidu.bind('click', function () {
        controller.goToBaidu("美女");
    });
    var local = global.$('#local');
    local.bind('click', function () {
        controller.goToLogin();
    });
    var imit = global.$('#imit');
    imit.bind('click', function () {
        var keyword=global.$("#keyword").val();
        controller.searchInBaidu(keyword);
    });


}

/**
 * 获得登陆内容
 */
function getContent() {
    var content = $("#content").find(".login");
    $.each(content, function (i, item) {
        var file = $($(item).find(".file")[0]).val();
        var loginName = $($(item).find(".lg-name")[0]).val();
        var passWord = $($(item).find(".psd")[0]).val();
        getLoginItem(loginName, passWord, file);
    });
}
/**
 * 处理每一条文件
 * @param loginName
 * @param passWord
 * @param file
 */
function getLoginItem(loginName, passWord, file) {
    console.log("登录名是: " + loginName);
    console.log("密码是: " + passWord);
    console.log("文件名字是: " + file);
}
