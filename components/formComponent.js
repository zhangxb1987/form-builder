/*Form Component*/
angular.module('formBuilder').provider('fbComponent', [function() {
	/*注册控件的容器*/
	var _components = {};
	/*控件类别的容器*/
	var _groups = [{
		type: 'basic',
		title: FORM_BULIDER_CONFIG.COMPONENTS.TITLE_BASIC,
		class:'panel-default component-panel-group',
		order: 1
	}, {
		type: 'advanced',
		title: FORM_BULIDER_CONFIG.COMPONENTS.TITLE_ADVANCED,
		class:'panel-default component-panel-group',
		order: 2
	}, {
		type: 'layout',
		title: FORM_BULIDER_CONFIG.COMPONENTS.TITLE_LAYOUT,
		class:'panel-danger component-panel-group',
		order: 0,
		/*默认打开*/
		openStatus: true
	}];
	
	/*添加控件组*/
	this.addGroup = function(group) {
		var type = group.type;
		//检查是否存在，如果存在就合并数据
		var _matched = angular._.find(_groups, function(__group) {
			return __group.type == type;
		});
		if (_matched) {
			angular.extend(_matched, angular.extend({
				type: type ? 'basic' : type
			}, group || {}));
		} else {
			//如果不存在添加
			_groups.push(group);
		}
	};

	/*添加控件*/
	this.register = function(component) {
		var type = component.type;
		var group = component.group;
		if (!_components[type]) {
			_components[type] = component;
		} else {
			angular.extend(_components[type], component);
		}
		if (!_components[type].group) {
			_components[type].group = group || 'basic';
		}
		_components[type].settings.type = type;
	};

	this.$get = function() {
		return {
			components: _components,
			groups: _groups
		};
	};

}]);