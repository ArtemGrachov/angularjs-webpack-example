export default {
    controller: function (authService) {
        this.user = authService.user;
    },
    template: require('./auth.component.html')
}