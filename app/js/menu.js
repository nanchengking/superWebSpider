/**
 * Created by liushuqing on 16/5/11.
 */
exports.initMenu = function(){
    var win = global.gui.Window.get();
    var menubar = new global.gui.Menu({ type: 'menubar' });
    var fileMenu = new global.gui.Menu();
    fileMenu.append(new global.gui.MenuItem({
        label: 'New',
        click: function() {

        }
    }));
    fileMenu.append(new global.gui.MenuItem({
        label: 'Open',
        click: function() {

        }
    }));
    fileMenu.append(new global.gui.MenuItem({
        label: 'Save',
        click: function() {

        }
    }));
    fileMenu.append(new global.gui.MenuItem({
        label: 'Exit',
        click: function() {
            global.gui.App.quit();
        }
    }));

    menubar.append(new global.gui.MenuItem({ label: 'File', submenu: fileMenu}));
    win.menu = menubar;
};