import './modal.component.scss';

export default {
    controller: function (modalService, $scope, $element) {
        this.modals = modalService.modals;
        this.$onInit = function () {
            modalService.activeModal = {
                scope: $scope,
                el: $element
            }
        }
    },
    template: require('./modal.component.html')
}