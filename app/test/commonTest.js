/**
 * Created by liushuqing on 16/5/12.
 */
var os=require("os");

exports.getPlatform = function () {
    return os.platform();
};