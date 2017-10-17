export default {
    controller: function (authService, modalService, $rootScope) {
        this.login = function () {
            authService
                .login(this.loginForm)
                .then(res => {
                    modalService.createNotification({
                        strong: 'Hello, ',
                        text: res.username + '!',
                        style: 'success'
                    });
                    console.log('login componetn promise res', res);
                    $rootScope.$apply();
                })
                .catch(
                    err => {
                        modalService.createNotification({
                            strong: 'Error!',
                            text: err,
                            style: 'danger'
                        });
                        $rootScope.$apply();
                    }
                )
        }
    },
    template: require('./login.component.html')
}