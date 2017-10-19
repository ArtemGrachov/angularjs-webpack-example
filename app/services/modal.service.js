export default function ($rootScope, $compile, $q) {
    'ngInject';
    this.modals = {
        windows: [],
        notifications: []
    }
    this.activeModal = null;
    this.createWindow = function (config) {
        config.deffered = $q.defer();
        this.createModal(config, 'windows');
        return config.deffered.promise;
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
        // $rootScope.$apply();
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


// this.testModal = function () {
//     // modalService.createWindow({
//     //     title: 'About alert',
//     //     msg: 'This modal window was called from About page to test how does modals component and service works',
//     //     bgClose: true,
//     //     btns: [{
//     //         text: 'Left button (console.log)',
//     //         style: 'default',
//     //         action: () => console.log('LEFT BTN')

//     //     }, {
//     //         text: 'Right button (console.log and close)',
//     //         style: 'info',
//     //         action: () => console.log('CLOSE'),
//     //         close: true
//     //     }]
//     // });
//     // modalService.createWindow({
//     //     title: 'About alert 2',
//     //     msg: 'This text must be rendered only in second window!'
//     // });
//     // modalService.createNotification({
//     //     strong: 'Hello!',
//     //     text: 'It is test notification ' + new Date().getTime()
//     // })
// }
// // test