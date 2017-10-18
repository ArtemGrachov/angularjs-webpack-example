export default {
    controller: function (reviewsService, $scope) {
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
        $scope.$on('$routeChangeStart', function () {
            console.log(arguments);
        })
        this.refreshReviews();
    },
    template: require('./about.component.html')
}