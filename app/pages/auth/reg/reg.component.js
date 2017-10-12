export default {
    bindings: {
        $router: '<'
    },
    controller: function (authService, modalService) {
        this.reg = function () {
            // this.$router.navigate(['Products'])
            authService.reg(this.regForm)
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
    template: require('./reg.component.html')
}