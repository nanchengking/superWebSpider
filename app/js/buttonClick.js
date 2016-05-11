/**
 * Created by liushuqing on 16/5/11.
 */
var $=require("jquery")
exports.say = function () {
    $('button#showA').bind('click', function () {
        alert("Ahaha哈哈哈");
    });
    //alert("大傻逼就是你啊啊啊a");
};
