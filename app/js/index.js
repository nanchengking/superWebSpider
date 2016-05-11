/**
 * Created by liushuqing on 16/5/11.
 */
function init(){
    global.$(global.window.document).ready(function(){
        var editor = require("./../js/editor.js");
        var textEditor = global.$('#editor');
        //绑定了两个事件  一个是input是非IE浏览器,监控input内容改变,一个是IE专属的属性
        textEditor.bind('input propertychange', function() {
            editor.reload();
        });
    });
    var menu = require("./../js/menu.js");
    menu.initMenu();
}
