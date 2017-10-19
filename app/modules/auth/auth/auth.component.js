export default {
    controller: function (authService, $state) {
        'ngInject';
        this.user = authService.user;
        this.userSubscr = authService.userObs.subscribe(
            res => {
                if (res) {
                    $state.go('Profile');
                }
            }
        );
        this.$onDestroy = function () {
            authService.userObs.unsubscribe(this.userSubscr);
        }
    },
    template: require('./auth.component.html')
}