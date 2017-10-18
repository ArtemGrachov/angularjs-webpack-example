export default {
    bindings: {
        $router: '<'
    },
    controller: function (productsService, $stateParams) {
        this.$onInit = function () {
            if ($stateParams.id) {
                productsService.getProduct($stateParams.id)
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
        this.resetProduct = function () {
            this.product = this.cache;
        }
        this.submitProduct = function () {
            if (this.product && this.product.id) {
                productsService.updateProduct(this.product)
                    .then(res => this.navToList(res));
            } else {
                productsService.addProduct(this.product)
                    .then(res => this.navToList(res));
            }
        }
        this.navToList = function (res) {
            if (res) {
                this.$router.navigate(['AdminProducts']);
            }
        }
        this.deleteProduct = function () {
            productsService.deleteProduct(this.product.id)
                .then(res => this.navToList(res))
        }
    },
    template: require('./product.component.html')
}