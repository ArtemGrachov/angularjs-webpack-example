export default {
    controller: function ($state, authService) {
        this.authSubscr = authService.userObs.subscribe(
            res => {
                if (!res) {
                    $state.go('Auth');
                }
            }
        )
    },
    template: require('./admin.component.html'),
}