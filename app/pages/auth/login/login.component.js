export default {
    controller: function (authService, modalService) {
        this.login = function () {
            authService.login(this.loginForm)
                .then(res =>
                    modalService.createNotification({
                        strong: 'Welcome!',
                        style: 'success'
                    })
                )
                .catch(err =>
                    modalService.createNotification({
                        strong: 'Error!',
                        style: 'danger',
                        text: err
                    }))
        }
    },
    template: require('./login.component.html')
}