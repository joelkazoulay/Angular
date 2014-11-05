/*globals angular, console*/
var now = new Date();
angular.module('exampleApp.Services', [])
    .value('nowValue', now)
    .service('days', function(nowValue) {
        'use strict';

        this.today = nowValue.getDay();
        this.tomorrow = this.today + 1;
    })
    .config(function() {
        'use strict';

        console.log('Services module config: (no time)');
    })
    .run(function(startTime) {
        'use strict';

        console.log('Services module run: ' + startTime);
    });