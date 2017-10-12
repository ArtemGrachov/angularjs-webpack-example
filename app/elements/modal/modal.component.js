export default {
    controller: function (modalService, $scope, $element) {
        this.modals = modalService.modals;
        this.deleteModal = function (id, type) {
            modalService.deleteModal(id, type);
            if (this.modals.windows.length == 0) {
                $scope.$destroy();
                $element.remove();
            }
        }
    },
    template: require('./modal.component.html')
}