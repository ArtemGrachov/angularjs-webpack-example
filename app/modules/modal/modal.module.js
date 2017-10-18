import angular from 'angular';

import ModalComponent from './modal/modal.component';
import ModalNotificationComponent from './notification/notification.component';
import ModalWindowComponent from './window/window.component';

export default angular.module('modalModule', [])
    .component('appModal', ModalComponent)
    .component('appModalNotification', ModalNotificationComponent)
    .component('appModalWindow', ModalWindowComponent)