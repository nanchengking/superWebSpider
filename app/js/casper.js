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

        var url = 'https://www.baidu.com/s?ie=utf-8&wd=' + keyword;
        global.console.log("start casper: " + url);
        spooky.start(url);
        spooky.then(function () {
            this.echo("ready to do casper ");
        });
        spooky.then(function () {
            console.log("casper picture");
            this.capture('baidu.png', {
                top: 0,
                left: 0,
                width: 900,
                height: 900
            });
        });

        spooky.then(function () {
            console.log("run after casper then");
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