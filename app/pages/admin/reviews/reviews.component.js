export default {
    controller: function (reviewsService) {
        this.refreshReviews = function () {
            reviewsService.getReviews()
                .then(res => this.reviews = res)
        }
        this.refreshReviews();

        this.editToggle = function (review) {
            review.edit = !review.edit;
        }
        this.submitReview = function (data) {
            delete data.edit;
            reviewsService.updateReview(data)
                .then(res => this.refreshReviews())
        }
        this.deleteReview = function (id) {
            reviewsService.deleteReview(id)
                .then(res => this.refreshReviews())
        }
    },
    template: require('./reviews.component.html')
}