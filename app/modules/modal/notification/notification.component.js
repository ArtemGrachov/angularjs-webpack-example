export default {
    bindings: {
        config: '<',
        id: '<'
    },
    controller: function (modalService) {
        'ngInject';
        this.close = function () {
            modalService.deleteModal(this.config.id, 'notifications')
        }
    },
    template: require('./notification.component.html')
}