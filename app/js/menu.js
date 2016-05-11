/**
 * Created by liushuqing on 16/5/11.
 */
var editor = require("./../js/editor.js");
exports.initMenu = function () {
    var win = global.gui.Window.get();
    var menubar = new global.gui.Menu({type: 'menubar'});
    var fileMenu = new global.gui.Menu();
    var test = new global.gui.Menu();
    fileMenu.append(new global.gui.MenuItem({
        label: '新建',
        click: function () {
            editor.loadText("");
        }
    }));
    fileMenu.append(new global.gui.MenuItem({
        label: '打开',
        click: function () {
            editor.chooseFile("#openFileDialog", function (filename) {
                editor.loadFile(filename);
            });
        }
    }));
    fileMenu.append(new global.gui.MenuItem({
        label: '保存',
        click: function () {
            editor.chooseFile("#saveFileDialog", function (filename) {
                var fs = require('fs');
                var textEditor = global.$('#editor');
                fs.writeFile(filename, textEditor.val(), function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("The file was saved!");
                    }
                });
            });
        }
    }));
    fileMenu.append(new global.gui.MenuItem({
        label: '退出',
        click: function () {
            global.gui.App.quit();
        }
    }));
    fileMenu.append(new global.gui.MenuItem({
        label: 'alert',
        click: function () {
            global.alert();
        }
    }));

    menubar.append(new global.gui.MenuItem({label: '文件', submenu: fileMenu}));
    menubar.append(new global.gui.MenuItem({label: '测试', submenu: test}));
    win.menu = menubar;
};