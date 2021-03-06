export default {
    bindings: {
        $router: '<'
    },
    controller: function (cartService, ordersService, modalService, $state) {
        'ngInject';
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
                    $state.go('Products')
                })
        };
        this.confirmOrder = function () {
            modalService.createWindow({
                title: 'Are you sure?',
                msg: `Total price: $${this.total()} for ${this.cart.length} products.`,
                btns: [{
                        text: 'Yes',
                        res: true,
                        style: 'success'
                    },
                    {
                        text: 'No',
                        style: 'danger'
                    }
                ]
            }).then(res => {
                if (res) {
                    this.sendOrder();
                    modalService.createNotification({
                        strong: 'Thank you',
                        text: 'for order!',
                        style: 'success'
                    })
                }
            })
        }
        this.removeFromCart = function (index) {
            cartService.removeFromCart(index);
        }
    },
    template: require('./order.component.html')
}