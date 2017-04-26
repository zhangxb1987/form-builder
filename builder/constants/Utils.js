/**
 * add loadash Utils Plugin to angular globle object
 */
angular.module('fbUtilsModule',[]).config([function () {
	if(_ && (typeof(_) == 'function')){
		angular._ = window._;
	}	
}]);