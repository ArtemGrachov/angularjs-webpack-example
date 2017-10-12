export default {
    controller: function (modalService) {
        this.modals = modalService.modals;
        console.log(this.modals);

        this.$watch = function () {
            console.log('changes!')
        }
    },
    template: require('./modal.component.html')
}