export default function (productsService, cartService, dataService) {
    this.orderUrl = 'orders/';
    this.sendOrder = function (data) {
        return dataService.post(this.orderUrl, data);
    }
}