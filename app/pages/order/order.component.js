export default {
    controller: function (cartService, ordersService) {
        this.cart = cartService.cart;
        this.total = cartService.calcTotal;
        this.sendOrder = function () {
            ordersService.sendOrder(this.orderForm)
                .then(res => console.log('ok!'))
        };
    },
    template: require('./order.component.html')
}