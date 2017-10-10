export default {
    bindings: {
        $router: '<'
    },
    controller: function (productsService, $location) {
        this.$routerOnActivate = function (next) {
            if (next.params.id) {
                productsService.getProduct(next.params.id)
                    .then(
                        res => {
                            this.product = res;
                            this.cache = Object.assign({}, res);
                        }
                    )
            } else {
                this.product = {
                    price: 0,
                    rating: 0
                }
            }
        }
        this.reset = function () {
            this.product = this.cache;

        }
        this.subm = function () {
            if (this.product && this.product.id) {
                productsService.updateProduct(this.product)
                    .then(res => this.$router.navigate(['AdminProducts']));
            } else {
                productsService.addProduct(this.product)
                    .then(res => this.$router.navigate(['AdminProducts']));
            }
        }
        this.del = function () {
            productsService.deleteProduct(this.product.id)
                .then(res => this.$router.navigate(['AdminProducts']))
        }
    },
    template: require('./product.component.html')
}