export default function ($rootScope, $compile) {
    this.createModal = function () {
        const modalScope = $rootScope.$new({}),
            body = angular.element(document).find('body');
        body.append($compile('<app-modal></app-modal>')(modalScope));
    }
}