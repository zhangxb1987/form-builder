/*Wrap Log Service*/
angular.module('fbWrapLogModule', ['fbEventBusModule'])
    .factory('fbWrapLog', ['$log', 'fbEventBus', function fbWrapLogFactory($log, fbEventBus) {
        //FORM_BULIDER_CONFIG
        var WrapLogger = {};

        WrapLogger = function() {

        };

        WrapLogger.prototype = {
            _dispatchEvent: function(_message, _level) {
                //$log.debug('触发\'EVENT_CONSOLE_LOG\'事件，方便其他控件监听');
                /*触发'EVENT_CONSOLE_LOG'事件，方便其他控件监听*/
                fbEventBus.dispatch(FORM_BULIDER_CONFIG.EVENTS.EVENT_CONSOLE_LOG, null, {
                    message: _message,
                    level: _level
                });
            },

            log: function(message) {
                $log.log(message);
                this._dispatchEvent(message, 'DEBUG');
            },
            info: function(message) {
                $log.info(message);
                this._dispatchEvent(message, 'INFO');
            },
            warn: function(message) {
                $log.warn(message);
                this._dispatchEvent(message, 'WARN');
            },
            error: function(message) {
                $log.error(message);
                this._dispatchEvent(message, 'ERROR');
            },
            debug: function(message) {
                $log.debug(message);
                this._dispatchEvent(message, 'DEBUG');
            }
        };

        return new WrapLogger();

    }]);