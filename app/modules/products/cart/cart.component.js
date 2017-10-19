export default {
    controller: function (cartService, productsService) {
        'ngInject';
        this.cart = cartService.cart;
        this.removeFromCart = function (index) {
            cartService.removeFromCart(index);
        }
        this.total = cartService.calcTotal;
        this.clearCart = function () {
            cartService.clearCart();
        }
    },
    template: require('./cart.component.html')
}