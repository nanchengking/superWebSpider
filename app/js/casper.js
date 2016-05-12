/**
 * Created by liushuqing on 16/5/12.
 */
var Spooky = require('spooky');
exports.imaBaidu = function () {
    var spooky = new Spooky({
        child: {
            transport: 'http'
        },
        casper: {
            logLevel: 'debug',
            verbose: true
        }
    }, function (err) {
        if (err) {
            e = new Error('Failed to initialize SpookyJS');
            e.details = err;
            throw e;
        }

        spooky.start(
            'http://www.baidu.com');
        spooky.then(function () {
            this.emit('hello', 'Hello, from ' + this.evaluate(function () {
                    return document.title;
                }));
        });
        spooky.run();
    });

    spooky.on('error', function (e, stack) {
        global.console.warn(e);

        if (stack) {
            global.console.log(stack);
        }
    });

    spooky.on('hello', function (greeting) {
        global.console.log(greeting);
    });

    spooky.on('log', function (log) {
        if (log.space === 'remote') {
            global.console.log(log.message.replace(/ \- .*/, ''));
        }
    });
};