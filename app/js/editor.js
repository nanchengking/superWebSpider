/**
 * Created by liushuqing on 16/5/11.
 */
exports.reload = function () {
    var marked = require("marked");
    marked.setOptions({
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
    });
    var resultDiv = global.$('.md_result');
    var textEditor = global.$('#editor');
    var text = textEditor.val();
    resultDiv.html(marked(text));
};
exports.loadText = function (text) {
    var textEditor = global.$('#editor');
    textEditor.val(text);
    exports.reload();
};

exports.loadFile = function (file) {
    var fs = require('fs');
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            return global.window.console.log(err);
        }
        //export是一个变量,可以文件内调用这个方法用
        exports.loadText(data);
    });
};
//这种方法打开文件,利用了一个隐藏的file类型的input
exports.chooseFile = function (name, callback) {
    var chooser = global.$(name);
    //当元素的值发生改变时，会发生 change 事件。
    //该事件仅适用于文本域（text field），以及 textarea 和 select 元素。
    chooser.change(function (evt) {
        //global.$(this)代表chooser自己的val
        global.window.console.log(global.$(this).val());
        callback(global.$(this).val());
    });

    chooser.trigger('click');
};

exports.chooseExcel = function handleFile(file) {
    var XLSX = require('xlsx');
    var util = require('util');
    global.window.console.log("打开的文件名字: " + file);
    var workbook = XLSX.readFile(file);
    iterExcel(workbook);
};

function iterExcel(workbook){
    var sheet_name_list = workbook.SheetNames;
    sheet_name_list.forEach(function(y) { /* iterate through sheets */
        var worksheet = workbook.Sheets[y];
        for (z in worksheet) {
            /* all keys that do not begin with "!" correspond to cell addresses */
            if(z[0] === '!') continue;
            console.log(y + "!" + z + "=" + JSON.stringify(worksheet[z].v));
        }
    });
}