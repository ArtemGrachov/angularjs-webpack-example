export default {
    controller: function (authService) {
        this.logout = () => authService.logout();
    },
    template: require('./header.component.html')
}