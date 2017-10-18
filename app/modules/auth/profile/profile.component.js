export default {
    controller: function (authService, modalService, $scope, $state) {
        const $this = this;
        this.userSubscr = authService.userObs.subscribe(res => {
            $this.userForm = res;
            $scope.$apply();
            if (!res) {
                $state.go('Auth')
            }
        })
        this.$onInit = function () {
            this.userForm = authService.user;
        }
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