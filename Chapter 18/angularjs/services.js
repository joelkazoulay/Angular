/*globals angular, console*/
var baseLogger = function() {
        'use strict';

        this.messageCount = 0;
        this.log = function(msg) {
            console.log(this.msgType + ': ' + (this.messageCount++) + ' ' + msg);
        };
    },
    debugLogger = function() { },
    errorLogger = function() { };

debugLogger.prototype = new baseLogger();
debugLogger.prototype.msgType = 'Error';

errorLogger.prototype = new baseLogger();
errorLogger.prototype.msgType = 'Error';

angular.module('customServices', [])
    .provider('logService', function() {
        'use strict';

        var counter = true,
            debug = true;

        return {
            messageCounterEnabled: function(setting) {
                if(angular.isDefined(setting)) {
                    counter = setting;
                    return this;
                } else {
                    return counter;
                }
            },
            debugEnabled: function(setting) {
                if(angular.isDefined(setting)) {
                    debug = setting;
                    return this;
                } else {
                    return debug;
                }
            },
            $get: function() {
                return {
                    messageCount: 0,
                    log: function(msg) {
                        if(debug) {
                            console.log('LOG' + (counter ? ' + ' + this.messageCount++ + ') ' : ') ') + msg);
                        }
                    }
                };
            }
        };
    })
    .service('errorService', errorLogger);
