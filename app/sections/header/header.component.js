export default {
    controller: function (authService, $rootScope) {
        const $this = this;
        this.logout = () => authService.logout();
        this.updateAuth = () => {
            console.log('header updateAuth');
            $this.user = authService.user;
            $rootScope.$apply();
        }
        authService.userObs.subscribe(this.updateAuth);
    },
    template: require('./header.component.html')
}