import '../node_modules/normalize.css/normalize.css'
import './app.scss';
import './main/main';

import angular from 'angular';

import MainComponent from './main/main';

angular
    .module('app', [])
    .component('appMain', MainComponent)