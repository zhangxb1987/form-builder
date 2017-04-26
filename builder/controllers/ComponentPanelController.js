/*Component Controller*/
angular.module('formBuilder').run(['$rootScope', 'fbComponent', function($rootScope, fbComponent) {}])
.controller('FbComponentPanelController', ['$scope', '$http', 'fbWrapLog', 'fbComponent', function($scope, $http, fbLog, fbComponent) {

	//load component definition data

	//fbLog.debug('FbComponentController is going to load component defintion data!');

	$scope.oneAtATime = FORM_BULIDER_CONFIG.COMPONENTS.ACCORDION_CLOSE_OTHERS;

	$scope.components = fbComponent.components;
	$scope.groups = fbComponent.groups;

	//分组注册的组件，便于页面显示
	if ($scope.components) {
		$scope.groupedComponents = angular._.groupBy($scope.components, function(_p) {
			//fbLog.log(_p.group || 'basic');
			return _p.group || 'basic';
		});
	}

	fbLog.log($scope.groupedComponents);
}]);