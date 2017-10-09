export default {
    controller: function (productsService) {
        const $this = this;
        this.product = null;
        this.$routerOnActivate = function (next, previous) {
            productsService.getProduct(next.params.id)
                .then(res => {
                    this.product = res;
                    this.refreshComments();
                });
        }
        this.sendComment = function (data) {
            data.productId = this.product.id;
            productsService
                .postComment(data)
                .then(res => this.refreshComments())
        }
        this.refreshComments = function () {
            productsService.getComments(this.product.id)
                .then(res => this.comments = res);
        }
    },
    template: require('./product.component.html')
}