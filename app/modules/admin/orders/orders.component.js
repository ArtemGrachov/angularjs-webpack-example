export default {
    controller: function (ordersService) {
        'ngInject';
        this.refreshOrder = function () {
            ordersService.getOrders()
                .then(res => this.orders = res);
        }
        this.refreshOrder();
        this.totalPrice = ordersService.totalPrice;
        this.setClass = function (status) {
            switch (status) {
                case 'waiting':
                    return 'info';
                case 'completed':
                    return 'success';
                case 'cancelled':
                    return 'warning';
                default:
                    return 'default';
            }
        }
    },
    template: require('./orders.component.html')
}