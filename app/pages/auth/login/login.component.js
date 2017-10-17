export default {
    controller: function (authService, modalService) {
        this.login = function () {
            authService.login(this.loginForm);
        }
    },
    template: require('./login.component.html')
}