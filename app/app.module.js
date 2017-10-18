import '../node_modules/normalize.css/normalize.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import AppComponent from './app.component';
// page sections
import HeaderComponent from './sections/header/header.component';
import FooterComponent from './sections/footer/footer.component';
import SidebarComponent from './sections/sidebar/sidebar.component';

// pages
import AboutComponent from './pages/about/about.component';
import ContactsComponent from './pages/contacts/contacts.component';
import ProductsComponent from './pages/products/products.component';
import ProductComponent from './pages/products/product/product.component';
import OrderComponent from './pages/order/order.component';
import AdminComponent from './pages/admin/admin.component';
import AdminCommentsComponent from './pages/admin/comments/comments.component';
import AdminProductsComponent from './pages/admin/products/products.component';
import AdminProductComponent from './pages/admin/products/product/product.component';
import AdminReviewsComponent from './pages/admin/reviews/reviews.component';
import AdminFeedbacksComponent from './pages/admin/feedbacks/feedbacks.component';
import AdminOrdersComponent from './pages/admin/orders/orders.component';
import AdminOrderComponent from './pages/admin/orders/order/order.component';
import AuthComponent from './pages/auth/auth.component';
import AuthLoginComponent from './pages/auth/login/login.component';
import AuthRegComponent from './pages/auth/reg/reg.component';
import ModalComponent from './elements/modal/modal.component';
import ModalWindowComponent from './elements/modal/window/window.component';
import ModalNotificationComponent from './elements/modal/notification/notification.component';

// page inner elements
import CommentsComponent from './elements/comments/comments.component';
import CartComponent from './elements/cart/cart.component';

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

//router
import Router from './app.router';

angular
    .module('app', [uiRouter])
    .value('$routerRootComponent', 'app')
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
    .component('app', AppComponent)
    .component('appHeader', HeaderComponent)
    .component('appFooter', FooterComponent)
    .component('appSidebar', SidebarComponent)
    .component('appComments', CommentsComponent)
    .component('appAbout', AboutComponent)
    .component('appContacts', ContactsComponent)
    // to PRODUCTS MODULE
    .component('appProducts', ProductsComponent)
    .component('appProduct', ProductComponent)
    .component('appOrder', OrderComponent)
    .component('appCart', CartComponent)
    // to ADMIN MODULE
    .component('appAdmin', AdminComponent)
    .component('appAdminProducts', AdminProductsComponent)
    .component('appAdminProduct', AdminProductComponent)
    .component('appAdminComments', AdminCommentsComponent)
    .component('appAdminReviews', AdminReviewsComponent)
    .component('appAdminFeedbacks', AdminFeedbacksComponent)
    .component('appAdminOrders', AdminOrdersComponent)
    .component('appAdminOrder', AdminOrderComponent)
    // TO AUTH MODULE
    .component('appAuth', AuthComponent)
    .component('appAuthReg', AuthRegComponent)
    .component('appAuthLogin', AuthLoginComponent)
    // TO MODAL MODULE
    .component('appModal', ModalComponent)
    .component('appModalWindow', ModalWindowComponent)
    .component('appModalNotification', ModalNotificationComponent)
    .config(Router)