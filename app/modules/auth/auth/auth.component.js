export default {
    controller: function (authService, $state) {
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