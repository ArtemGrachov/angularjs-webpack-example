export default {
    bindings: {
        $router: '<'
    },
    controller: function (cartService, ordersService) {
        this.cart = cartService.cart;
        this.total = cartService.calcTotal;
        this.sendOrder = function () {
            this.orderForm.cart = this.cart.map(
                product => ({
                    id: product.id,
                    name: product.name,
                    price: product.price
                })
            );
            ordersService.sendOrder(this.orderForm)
                .then(res => {
                    cartService.clearCart();
                    this.$router.navigate(['Products'])
                })
        };
        this.removeFromCart = function (index) {
            cartService.removeFromCart(index);
        }
    },
    template: require('./order.component.html')
}