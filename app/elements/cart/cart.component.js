export default {
    controller: function (cartService, productsService) {
        this.cart = [];
        this.total = 0;
        cartService.getCart()
            .map((id, index) => productsService
                .getProduct(id)
                .then(res => {
                    this.cart.push(res.name);
                    this.total += res.price;
                })
                .catch(
                    err => cartService.removeFromCart(index)
                )
            )
        this.removeFromCart = function (index) {
            cartService.removeFromCart(index);
        }
    },
    template: require('./cart.component.html')
}