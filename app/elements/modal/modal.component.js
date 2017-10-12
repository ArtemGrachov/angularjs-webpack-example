export default {
    controller: function ($rootScope, $scope, $element) {
        this.close = function () {
            $scope.$destroy();
            $element.remove();
        }
        this.config = {
            id: new Date().getTime(),
            title: 'Test title',
            msg: 'Irure ut commodo exercitation ea qui consectetur eu proident excepteur adipisicing esse velit ipsum. Nulla amet exercitation nisi qui tempor dolor. Eu minim ad id tempor enim ex duis laboris irure consequat quis id.',
            bgClose: true,
            btns: [{
                    text: 'green button',
                    style: 'success',
                    action: () => console.log('green btn')
                },
                {
                    text: 'orange button',
                    style: 'warning',
                    action: () => console.log('orange btn')
                },
                {
                    text: 'close red button',
                    style: 'danger',
                    action: this.close
                }
            ]
        }
    },
    template: require('./modal.component.html')
}