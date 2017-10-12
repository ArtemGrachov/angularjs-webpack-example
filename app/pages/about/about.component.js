export default {
    controller: function (reviewsService, $compile, $rootScope, $scope, modalService) {
        this.sendReview = function (data) {
            reviewsService.addReview(data)
                .then(
                    res => this.refreshReviews()
                );
        }
        this.refreshReviews = function () {
            reviewsService.getReviews()
                .then(
                    res => {
                        this.reviews = res;
                    }
                )
        }
        this.refreshReviews();
    },
    template: require('./about.component.html')
}