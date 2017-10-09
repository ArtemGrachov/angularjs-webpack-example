export default {
    controller: function (productsService) {
        this.products = [];
        productsService.getProducts().then(res => this.products = res);
    },
    template: require('./products.component.html')
}