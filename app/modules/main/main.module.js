import angular from 'angular';

import MainComponent from './main/main.component';
import ContactsComponent from './contacts/contacts.component';
import AboutComponent from './about/about.component';

import MainRouter from './main.router';

export default angular.module('mainModule', [])
    .component('appMain', MainComponent)
    .component('appContacts', ContactsComponent)
    .component('appAbout', AboutComponent)
    .config(MainRouter)