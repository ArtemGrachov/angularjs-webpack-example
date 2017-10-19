export default {
    controller: function (authService, $rootScope) {
        'ngInject';
        const $this = this;
        this.logout = () => authService.logout();
        this.updateAuth = () => {
            // console.log('header updateAuth');
            // console.log('$this.user', $this.user)
            $this.user = authService.user;
            $rootScope.$apply();
        }
        authService.userObs.subscribe(this.updateAuth);
    },
    template: require('./header.component.html')
}