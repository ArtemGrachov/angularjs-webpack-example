export default {
    bindings: {
        config: '='
    },
    controller: function ($scope, $element) {
        this.close = function () {
            $scope.$destroy();
            $element.remove();
        }
        this.click = function (btn) {
            if (btn.action) {
                btn.action();
            }
            if (btn.close) {
                this.close();
            }
        }
    },
    template: require('./modal.component.html')
}