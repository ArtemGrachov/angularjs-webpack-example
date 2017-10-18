export default {
    controller: function (authService, modalService, $scope) {
        const $this = this;
        this.userSubscr = authService.subscribe(res => {
            $this.userForm = res;
            $scope.$apply();
        })
        // fake profile
        this.submitUserForm = function () {
            return new Promise(
                    (res, rej) => {
                        setTimeout(() => res(), 500)
                    }
                )
                .then(() => {
                    modalService.createNotification({
                        strong: 'Profile',
                        text: 'updated',
                        style: 'success'
                    })
                    $scope.$apply();
                });
        }
        this.$onDestroy = function () {
            authService.userObs.unsubscribe(this.userSubscr);
        }
    },
    template: require('./profile.component.html')
}