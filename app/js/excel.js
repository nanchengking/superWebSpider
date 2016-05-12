/**
 * Created by liushuqing on 16/5/12.
 */

var XLSX = require('xlsx');
/**
 * 从一个excel文件里面拿到一张表的数据,json格式
 * @param file
 * @returns {*}
 */
exports.getSheetDataFromFile = function handleFile(sheetName, file) {
    var workbook = exports.getWorkBook(file);
    var sheet = getSheet(sheetName, workbook);
    global.window.console.log("一个sheet在转换中: " + JSON.stringify(sheet));
    var data = getDataFromSheet(sheet);
    global.window.console.log("表格数据拿到了: " + data);
    return data;
};


/**
 * 拿到一个工作表
 * @param file
 * @returns {*}
 */
exports.getWorkBook = function getWorkBook(file) {
    var workbook = XLSX.readFile(file);
    return workbook;
}

/**
 * 遍历一张表,打印log
 * @param workbook
 */
exports.iterExcelToLog = function iterExcel(workbook) {
    var sheet_name_list = workbook.SheetNames;
    sheet_name_list.forEach(function (y) { /* iterate through sheets */
        var worksheet = workbook.Sheets[y];
        for (z in worksheet) {
            /* all keys that do not begin with "!" correspond to cell addresses */
            if (z[0] === '!') continue;
            console.log(y + "!" + z + "=" + JSON.stringify(worksheet[z].v));
        }
    });
}
/**
 * 获得一张表格
 * @param sheetName 表名,传入null,获得默认的唯一表格
 * @param workbook 工作区(一个excel文件)
 */
function getSheet(sheetName, workbook) {
    global.window.console.log("工作表的名字: " + sheetName);
    var sheetNameList = workbook.SheetNames;
    var sheet=null;
    global.window.console.log("工作表的名字们: " + sheetNameList);
    if (sheetNameList != null && sheetNameList.length > 0) {
        sheetNameList.forEach(function (name) {
            global.window.console.log("遍历中: " + name);
            if (sheetName == null) {
                sheet=workbook.Sheets[name]
            }
            if (name == sheetName) {
                sheet=workbook.Sheets[name];
                global.window.console.log("拿到对应的表的名字: " + JSON.stringify(sheet));
            }
        });
    }
    return sheet;
}
/**
 * 从一张表格里面获得所有数据
 * 返回一个对象数组,一行是一个元素
 * @param sheet
 *
 */
function getDataFromSheet(sheet) {
    return XLSX.utils.sheet_to_json(sheet);
}

/**
 * 从一张表里面获取某一行的数据
 * @param line
 * @param sheet
 * @returns {*}
 */
function getLineFromSheet(line, sheet) {
    if (sheet != null && line) {
        var data = getDataFromSheet(sheet);
        return data[line];
    }
    return null;
}