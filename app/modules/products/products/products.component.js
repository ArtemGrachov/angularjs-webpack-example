export default {
    controller: function (productsService) {
        'ngInject';
        productsService.getProducts().then(res => this.products = res);
    },
    template: require('./products.component.html')
}