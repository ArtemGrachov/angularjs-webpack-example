export default {
    bindings: {
        config: '=',
        id: '=',
        del: '&'
    },
    controller: function ($scope, $element, modalService) {
        this.$onInit = function () {
            if (!this.config.btns) {
                this.config.btns = [{
                    text: 'Close',
                    close: true,
                    style: 'primary'
                }]
            }
        }
        this.click = function (btn) {
            if (btn.action) {
                btn.action();
            }
            if (btn.close) {
                this.del();
            }
        }
    },
    template: require('./window.component.html')
}