export default {
    controller: function ($rootScope, $scope, $element) {
        this.testTime = new Date();
        this.test = true;
        this.counter = 0;
        setInterval(() => {
            this.counter++;

            console.log('counter add!')
        }, 1000)
        this.$onInit = function () {
            console.log('init')

        }
        this.$postLink = function () {
            console.log('postlink!')
            $scope.$apply()
        }
        // setTimeout(() => $scope.$apply(), 1500)

        this.$onDestroy = function () {
            console.log('destroy!')
        }
        this.close = function () {
            console.log('close')
        }

        // setTimeout(
        //     () => {
        //         $scope.$destroy();
        //         $element.remove();
        //         console.log($scope);
        //     }, 1500
        // )
    },
    template: require('./modal.component.html')
}