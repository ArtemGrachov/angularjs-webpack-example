export default {
    controller: function (productsService) {
        this.product = null;

        this.$routerOnActivate = function (next, previous) {
            productsService.getProduct(next.params.id).then(res => this.product = res);

        }
    },
    template: require('./product.component.html')
}