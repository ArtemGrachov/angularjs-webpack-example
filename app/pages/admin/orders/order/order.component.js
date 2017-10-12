import './order.component.scss';

export default {
    bindings: {
        $router: '<'
    },
    controller: function (ordersService) {
        this.refreshOrder = function (id) {
            ordersService.getOrder(id).then(res => this.order = res)
        }
        this.$routerOnActivate = function (next) {
            this.refreshOrder(next.params.id)
        }
        this.totalPrice = ordersService.totalPrice;
        this.setOrderStatus = function (status) {
            this.order.status = status;
            ordersService.updateOrder(this.order);
        }
        this.deleteOrder = function () {
            ordersService.deleteOrder(this.order.id)
                .then(res => res ? this.$router.navigate(['AdminOrders']) : false);
        }
    },
    template: require('./order.component.html')
}