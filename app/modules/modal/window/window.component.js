export default {
    bindings: {
        config: '<',
        id: '<'
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
            this.config.deffered.resolve(btn.res)
            if (!btn.keepOpen) {
                modalService.deleteModal(this.config.id, 'windows')
            }
        }
    },
    template: require('./window.component.html')
}