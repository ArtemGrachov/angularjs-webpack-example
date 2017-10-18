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
        //test
        this.$routerOnActivate = function (next, prev) {
            console.log('$routerOnActivate')
        }
        this.$onInit = function () {
            console.log('$onInit')
        }
        this.$postLink = function () {
            console.log('$postLink');
        }
        this.$routerCanActivate = function () {
            console.log('$routerCanActivate');
            return false;
        }
        this.$canActivate = function () {
            console.log('$canActivate');
            return false;
        }
        this.canActivate = function () {
            console.log('canActivate');
            return false;
        }
        this.$onActivate = function () {
            console.log('$onActivate')
        }
        this.canDeactivate = function () {
            console.log('canDeactivate');
            return false;
        }
        //test
    },
    template: require('./about.component.html')
}