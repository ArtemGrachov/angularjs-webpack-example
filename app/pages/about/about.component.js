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
        // test
        this.testModal = function () {
            modalService.createModal({
                title: 'About alert',
                msg: 'This modal window was called from About page to test how does modals component and service works',
                bgClose: true,
                btns: [{
                    text: 'Left button (console.log)',
                    style: 'default',
                    action: () => console.log('LEFT BTN')

                }, {
                    text: 'Right button (console.log and close)',
                    style: 'info',
                    action: () => console.log('close!'),
                    close: true
                }]
            });

        }
        // test
    },
    template: require('./about.component.html')
}