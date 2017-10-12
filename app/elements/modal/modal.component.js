export default {
    controller: function (modalService) {
        this.modals = modalService.modals;
        console.log(this.modals.windows);
    },
    template: require('./modal.component.html')
}