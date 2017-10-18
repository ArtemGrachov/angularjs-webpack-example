export default {
    controller: function (productsService) {
        productsService.getProducts().then(res => this.products = res);
    },
    template: require('./products.component.html')
}