export default function ($rootScope, $compile) {
    this.modals = {
        windows: [],
        notifications: []
    }
    this.activeModal = null;

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
            angular
                .element(document)
                .find('body')
                .append(
                    $compile('<app-modal></app-modal>')
                    ($rootScope.$new({}))
                );
        }
    }
    this.deleteModal = function (id, type) {
        this.modals[type] = this.modals[type].filter(modal => modal.id != id);
        if (this.modals.windows.length == 0 && this.modals.notifications.length == 0) {
            this.activeModal.scope.$destroy();
            this.activeModal.el.remove();
            this.activeModal = null;
        }
    }
}