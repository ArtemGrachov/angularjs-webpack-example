export default {
    bindings: {
        config: '=',
        id: '='
    },
    controller: function ($scope, $element, modalService) {
        console.log('modal window component');
        this.click = function (btn) {
            if (btn.action) {
                btn.action();
            }
            if (btn.close) {
                // this.close();
            }
        }
    },
    template: require('./window.component.html')
}