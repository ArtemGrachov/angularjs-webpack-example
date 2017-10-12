export default function ($rootScope, $compile) {
    this.createModal = function (config) {
        const scope = $rootScope.$new({});
        scope.config = config;
        angular
            .element(document)
            .find('body')
            .append(
                $compile('<app-modal config="config"></app-modal>')
                (scope)
            );
    }
}