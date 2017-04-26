/*Form Builder Module*/
var formBuilder = angular.module("formBuilder", ['ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngDragDrop',                                                 
    'ui.bootstrap.tpls',
    'ui.bootstrap.accordion',
    'pascalprecht.translate',
    'fbUtilsModule',
    'fbEventBusModule',
    'fbWrapLogModule'
]);

formBuilder.config(["$translateProvider", function($translateProvider) {

    $translateProvider.useStaticFilesLoader({
        prefix: './i18n/',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('zh-CN');
    $translateProvider.useCookieStorage();
}]).run(['$rootScope',
    '$http',
    '$translate',
    '$q',
    'fbEventBus',
    'fbWrapLog',
    function($rootScope,
        $http,
        $translate,
        $q,
        fbEventBus,
        fbWrapLog) {
        /*components配置资源延迟对象*/
        //$rootScope.componentsPromise = $q.defer();
        //fbEventBus.addEventListener(FORM_BULIDER_CONFIG.EVENTS.EVENT_MODEL_DATA_LOADED, function(event) {
        //    console.debug('model data loaded form remote source.');
        //});
        //fbEventBus.dispatch(FORM_BULIDER_CONFIG.EVENTS.EVENT_MODEL_DATA_LOADED);
        //
        //
    }
]);