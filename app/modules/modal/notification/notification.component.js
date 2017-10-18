export default {
    bindings: {
        config: '<',
        id: '<'
    },
    controller: function (modalService) {
        this.close = function () {
            modalService.deleteModal(this.config.id, 'notifications')
        }
    },
    template: require('./notification.component.html')
}