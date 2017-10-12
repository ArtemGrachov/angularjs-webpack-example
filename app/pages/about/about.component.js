export default {
    controller: function (reviewsService, $compile, $rootScope, $scope) {
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
        ////////////////////////////////////////////////
        // test!
        this.$onDestroy = function () {
            console.log('about destroyed!')
            console.log($scope)
        }
        setTimeout(
            () => {
                const modalScope = $rootScope.$new({});
                const body = angular.element(document).find('body');
                body.append($compile('<app-modal></app-modal>')(modalScope))

            }, 2500
        );


        // test!
        ////////////////////////////////////////////////
    },
    template: require('./about.component.html')
}