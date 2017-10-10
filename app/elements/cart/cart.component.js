export default {
    controller: function (cartService, productsService) {
        this.cart = cartService.getCart();
        this.removeFromCart = function (index) {
            cartService.removeFromCart(index);
        }
        this.calcTotal = function () {
            let sum = 0;
            this.cart.forEach(product => sum += +(product.price).toFixed(2));
            return +(sum).toFixed(2);
        }
    },
    template: require('./cart.component.html')
}