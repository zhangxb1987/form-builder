/*Console Panel Directive*/
angular.module('formBuilder')
    .directive('fbConsolePanel', ['$rootScope','fbEventBus','$window',function($rootScopt,fbEventBus,$window){
    /*log levels mapper*/
    var LOG_LEVEL_MAPPER = {
        'DEBUG' :0,
        'INFO'  :1,
        'WARN'  :2,
        'ERROR' :3
    };
    
    /*打印日志到web控制台上*/
    function _printConsoleMessage(_element,_message,_level, _scope_level){
        if(LOG_LEVEL_MAPPER[_level]>=_scope_level){
            _element.append('<p class="log-' + _level + '">'+ _level + ': ' + _message+ '</p>')
        }
    };
        
    return {
        restrict:'E',
        scope:{
            level   :'=',
            theme   :'='
        },
        templateUrl :'builder/templates/console-panel.html',
        link:function(scope, element){
            fbEventBus.addEventListener(FORM_BULIDER_CONFIG.EVENTS.EVENT_CONSOLE_LOG,function(event){
               //_printConsoleMessage(element,arguments);
               //$window.console.debug(event)
            });
        }
    };
}]);