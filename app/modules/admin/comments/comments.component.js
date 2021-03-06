export default {
    controller: function (commentsService, productsService) {
        'ngInject';
        this.refreshComments = function () {
            commentsService.getComments()
                .then(res => {
                    this.comments = res;
                    this.comments.forEach(comment => {
                        productsService.getProduct(comment.productId)
                            .then(res => comment.productName = res.name)
                    })
                });
        }
        this.refreshComments();
        this.editToggle = function (comment) {
            comment.edit = !comment.edit;
        }
        this.submitComment = function (data) {
            delete data.edit;
            commentsService.updateComment(data)
                .then(res => this.refreshComments());
        }
        this.deleteComment = function (id) {
            commentsService.deleteComment(id)
                .then(res => res ? this.refreshComments() : null);
        }
    },
    template: require('./comments.component.html')
}