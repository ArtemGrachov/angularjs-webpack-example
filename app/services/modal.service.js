export default function ($rootScope, $compile) {
    this.modals = {
        windows: [],
        notifications: []
    }
    this.activeModal = false;

    this.createWindow = function (config) {
        this.createModal(config, 'windows');
    }
    this.createNotification = function (config) {
        this.createModal(config, 'notifications');
    }
    this.createModal = function (config, type) {
        config.id = Math.ceil((Math.random() * new Date().getTime()));
        this.modals[type].push(config);
        if (!this.activeModal) {
            this.activeModal = true;
            const scope = $rootScope.$new({});
            angular
                .element(document)
                .find('body')
                .append(
                    $compile('<app-modal></app-modal>')
                    (scope)
                );
        }
    }
}