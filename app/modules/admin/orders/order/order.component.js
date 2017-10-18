import './order.component.scss';

export default {
    bindings: {
        $router: '<'
    },
    controller: function (ordersService, $stateParams, $state) {
        this.refreshOrder = function (id) {
            ordersService.getOrder(id).then(res => this.order = res)
        }
        this.$onInit = function () {
            this.refreshOrder($stateParams.id)
        }
        this.totalPrice = ordersService.totalPrice;
        this.setOrderStatus = function (status) {
            this.order.status = status;
            ordersService.updateOrder(this.order);
        }
        this.deleteOrder = function () {
            ordersService.deleteOrder(this.order.id)
                .then(res => res ? $state.go('AdminOrders') : false);
        }
    },
    template: require('./order.component.html')
}