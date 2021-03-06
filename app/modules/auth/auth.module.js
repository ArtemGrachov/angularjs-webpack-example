import angular from 'angular';
import AuthComponent from './auth/auth.component';
import AuthLoginComponent from './login/login.component';
import AuthRegComponent from './reg/reg.component';
import ProfileComponent from './profile/profile.component';

import AuthRouter from './auth.router';

export default angular.module('authModule', [])
    .component('appAuth', AuthComponent)
    .component('appAuthLogin', AuthLoginComponent)
    .component('appAuthReg', AuthRegComponent)
    .component('appProfile', ProfileComponent)
    .config(AuthRouter)