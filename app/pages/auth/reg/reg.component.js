export default {
    controller: function (authService, modalService) {
        this.reg = function () {
            authService.reg(this.regForm);
        };
    },
    template: require('./reg.component.html')
}