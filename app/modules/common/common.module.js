import angular from 'angular';

import HeaderComponent from './header/header.component';
import SidebarComponent from './sidebar/sidebar.component';
import FooterComponent from './footer/footer.component';
import CommentsComponent from './comments/comments.component';

export default angular.module('commonModule', [])
    .component('appHeader', HeaderComponent)
    .component('appSidebar', SidebarComponent)
    .component('appFooter', FooterComponent)
    .component('appComments', CommentsComponent)