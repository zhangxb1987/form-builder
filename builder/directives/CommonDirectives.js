/*Common Diretives*/
/*author：Xiaobin.Zhang*/
angular.module('formBuilder')
    /*fb-select-all 文本输入框成为焦点后，内容自动全选中*/
    .directive('fbSelectAll', function(){
    return {
            link:function(scope, element){
                element.on('focus', function(event){
                    element.select();
                });
              },
            restrict: 'A'
        };
}).directive('fbHoverIndicator', [function () {
    return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) {
            iElement.on('mouseover', function(event){
                event.stopPropagation();
                iElement.addClass('hover-indicator');
            }).on('mouseout', function(event){
                event.stopPropagation();
                iElement.removeClass('hover-indicator');
            });
        }
    };
}]);