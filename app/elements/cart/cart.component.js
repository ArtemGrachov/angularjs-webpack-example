export default {
    controller: function (cartService, productsService) {
        this.cart = [];
        cartService.getCart()
            .map(id => productsService
                .getProduct(id)
                .then(res => this.cart.push(res.name))
            )
        this.removeFromCart = function (index) {
            cartService.removeFromCart(index);
        }
    },
    template: require('./cart.component.html')
}