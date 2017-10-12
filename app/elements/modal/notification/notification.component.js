export default {
    bindings: {
        config: '<',
        id: '<'
    },
    controller: function (modalService) {
        this.$onInit = function () {
            console.log(this.config)
        }
        this.close = function () {
            modalService.deleteModal(this.config.id, 'notifications')
        }
    },
    template: require('./notification.component.html')
}