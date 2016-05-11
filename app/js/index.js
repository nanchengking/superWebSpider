/**
 * Created by liushuqing on 16/5/11.
 */
function init(){
    global.$(global.window.document).ready(function(){
        var editor = require("./../js/editor.js");
        var textEditor = global.$('#editor');
        textEditor.bind('input propertychange', function() {
            editor.reload();
        });
    });
}