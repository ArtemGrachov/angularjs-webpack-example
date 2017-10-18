import '../node_modules/normalize.css/normalize.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

// services
import DataService from './services/data.service';
import ProductsService from './services/products.service';
import CartService from './services/cart.service';
import CommentsService from './services/comments.service';
import ReviewsService from './services/reviews.service';
import FeedbacksService from './services/feedbacks.service';
import OrdersService from './services/orders.service';
import ModalService from './services/modal.service';
import AuthService from './services/auth.service';

// modules
import MainModule from './modules/main/main.module';
import CommonModule from './modules/common/common.module';
import ModalModule from './modules/modal/modal.module';
import AdminModule from './modules/admin/admin.module';
import AuthModule from './modules/auth/auth.module';
import ProductsModule from './modules/products/products.module';

angular
    .module('app', [
        uiRouter,
        'mainModule',
        'commonModule',
        'modalModule',
        'adminModule',
        'authModule',
        'productsModule'
    ])
    .service('dataService', DataService)
    .service('productsService', ProductsService)
    .service('cartService', CartService)
    .service('commentsService', CommentsService)
    .service('reviewsService', ReviewsService)
    .service('feedbacksService', FeedbacksService)
    .service('ordersService', OrdersService)
    .service('modalService', ModalService)
    .service('authService', AuthService)
    .run(function (authService) {
        const token = authService.getToken();
        if (token) {
            authService.loadUser(token);
        }
    })