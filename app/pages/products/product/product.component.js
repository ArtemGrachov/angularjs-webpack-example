import './product.component.scss';

export default {
    controller: function (productsService, cartService) {
        this.$routerOnActivate = function (next) {
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
        this.addToCart = function () {
            cartService.addToCart({
                id: this.product.id,
                name: this.product.name,
                price: this.product.price,
                imgUrl: this.product.imgUrl
            });
        }
    },
    template: require('./product.component.html')
}