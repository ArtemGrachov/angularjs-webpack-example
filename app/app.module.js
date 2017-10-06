import '../node_modules/normalize.css/normalize.css'
import './sass/main.scss';

import angular from 'angular';

import ngComponentRouter from 'ngcomponentrouter';

import MainComponent from './main/main';
import Header from './header/header';
import Footer from './footer/footer';
import Sidebar from './sidebar/sidebar';
import Products from './products/products';
import About from './about/about';
import Contacts from './contacts/contacts';

angular
    .module('app', [ngComponentRouter])
    .value('$routerRootComponent', 'appMain')
    .component('appMain', MainComponent)
    .component('appHeader', Header)
    .component('appFooter', Footer)
    .component('appSidebar', Sidebar)
    .component('appProducts', Products)
    .component('appAbout', About)
    .component('appContacts', Contacts)