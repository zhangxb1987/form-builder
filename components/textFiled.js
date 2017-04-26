/**
 * TextFiled Component
 */
angular.module('formBuilder').config(['fbComponentProvider', function(fbComponentProvider) {
    fbComponentProvider.register({
        /*这些属性只有在表单设计的时候才需要，表单渲染的时候不需要，考虑不要全部放在一起，提高程序效率*/
        /*****************左边使用*******************/
        //控件类型
        type: 'textField',
        //控件是否显示
        show: true,
        //显示顺序，数字越小表示余额靠前显示，可以是小于零的数字
        order: 1,
        //控件图标
        icon: 'fa fa-cubes',
        //控件类别
        group: 'basic',
        //控件显示的名称
        title: FORM_BULIDER_CONFIG.COMPONENTS.TEXTFIELD_TITLE,

        /*****************中间使用*******************/
        //控件展示模板
        template: 'components/textfield.html',
        //控件设置面板视图
        setting_views: [{
            name: FORM_BULIDER_CONFIG.COMPONENTS.TITLE_SETTING_DISPLAY,
            template: 'builder/components/common/display.html'
        }, {
            name: FORM_BULIDER_CONFIG.COMPONENTS.TITLE_SETTING_DATA,
            template: 'builder/components/common/data.html'
        }, {
            name: FORM_BULIDER_CONFIG.COMPONENTS.TITLE_SETTING_API,
            template: 'builder/components/common/api.html'
        }, {
            name: FORM_BULIDER_CONFIG.COMPONENTS.TITLE_SETTING_VALIDATION,
            template: 'builder/components/common/validation.html'
        }, {
            name: FORM_BULIDER_CONFIG.COMPONENTS.TITLE_SETTING_LAYOUT,
            template: 'builder/components/common/layout.html'
        }, {
            name: FORM_BULIDER_CONFIG.COMPONENTS.TITLE_SETTING_CONDITION,
            template: 'builder/components/common/condition.html'
        }],
        /*****************全局使用*******************/
        //控件属性
        settings: {
            input: true,
            inputType: 'text',
            inputMask: '',
            label: '',
            key: 'textField',
            placeholder: '',
            prefix: '',
            suffix: '',
            multiple: false,
            defauleValue: '',
            description: '',
            validation: {
                require: false,
                minLength: '',
                maxLength: '',
                pattern: '',
                custom: ''
            },
            condition: {
                show: '',
                when: '',
                eq: ''
            }
        }
    });
}]).run(['$templateCache', function($templateCache) {
    var textfieldTemp = '<input ';
    textfieldTemp += 'type={{component.type}}';
    textfieldTemp += '';
    textfieldTemp += '/>'
    $templateCache.put('components/textfield.html', textfieldTemp);
}]);