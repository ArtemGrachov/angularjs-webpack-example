export default function (productsService, cartService, dataService) {
    this.orderUrl = 'orders/';
    this.sendOrder = function (data) {
        if (data.cart.length > 0) {
            data.status = 'waiting';
            data.date = new Date().getTime();
            return dataService.post(this.orderUrl, data);
        }
    }
    this.updateOrder = function (data) {
        return dataService.update(this.orderUrl + data.id, data);
    }
    this.getOrder = function (id) {
        return dataService.get(this.orderUrl + id)
            .then(res => {
                res.date = new Date(res.date);
                return res;
            });
    }
    this.getOrders = function () {
        return dataService.get(this.orderUrl);
    }
    this.deleteOrder = function (id) {
        return dataService.delete(this.orderUrl + id);
    }
    this.totalPrice = function (cart) {
        let price = 0;
        cart.forEach(product => price += +(product.price).toFixed(2));
        return +(price).toFixed(2);
    }
}