/**
 * Created by liushuqing on 16/5/12.
 */
var Spooky = require('spooky');
var test = require("../test/commonTest.js");
exports.searchBaidu = function (keyword) {
    var spooky = new Spooky({
        child: {
            transport: 'http'
        },
        casper: {
            logLevel: 'debug',
            verbose: true
        }
    }, function (isErr) {
        if (isErr) {
            e = new Error('Failed to initialize SpookyJS');
            e.details = isErr;
            throw e;
        }
        var url = 'http://www.baidu.com?ie=UTF-8&wd=' + keyword;
        global.console.log("启动casper成功,搜索路径: "+url);
        spooky.start(
            url);
        spooky.then(function () {
            //global.console.log("截取图片");
            this.capture('baidu.png', {
                top: 100,
                left: 100,
                width: 500,
                height: 400
            });
        });
        spooky.then(function(){
            //global.console.log("继续进行");
        });

        spooky.run();
    });

    spooky.on('error', function (e, stack) {
        global.console.warn(e);
        if (stack) {
            global.console.log(stack);
        }
    });

    spooky.on('log', function (log) {
        if (log.space === 'remote') {
            global.console.log(log.message.replace(/ \- .*/, ''));
        }
    });
};