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
            global.console.log("get error when start");
            throw e;
        }

        var url = 'http://www.baidu.com?ie=UTF-8&wd=' + keyword;
        global.console.log("start casper: " + url);
        spooky.start(url);
        spooky.then(function () {
            global.console.log("before casper");
        });
        spooky.then(function () {
            global.console.log("casper picture");
            this.capture('baidu.png', {
                top: 100,
                left: 100,
                width: 500,
                height: 400
            });
        });

        spooky.then(function () {
            global.console.log("run after casper then");
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