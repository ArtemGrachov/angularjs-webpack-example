import '../node_modules/normalize.css/normalize.css'
import './sass/main.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import angular from 'angular';
import ngComponentRouter from 'ngcomponentrouter';

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
import AdminComponent from './pages/admin/admin.component';
import AdminCommentsComponent from './pages/admin/comments/comments.component';
import AdminProductsComponent from './pages/admin/products/products.component';
import AdminProductComponent from './pages/admin/products/product/product.component';
import AdminReviewsComponent from './pages/admin/reviews/reviews.component';
import AdminFeedbacksComponent from './pages/admin/feedbacks/feedbacks.component';
import OrderComponent from './pages/order/order.component';

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

angular
    .module('app', [ngComponentRouter])
    .value('$routerRootComponent', 'app')
    .service('dataService', DataService)
    .service('productsService', ProductsService)
    .service('cartService', CartService)
    .service('commentsService', CommentsService)
    .service('reviewsService', ReviewsService)
    .service('feedbacksService', FeedbacksService)
    .service('ordersService', OrdersService)
    .component('app', AppComponent)
    .component('appHeader', HeaderComponent)
    .component('appFooter', FooterComponent)
    .component('appSidebar', SidebarComponent)
    .component('appComments', CommentsComponent)
    .component('appCart', CartComponent)
    .component('appAbout', AboutComponent)
    .component('appContacts', ContactsComponent)
    .component('appProducts', ProductsComponent)
    .component('appProduct', ProductComponent)
    .component('appAdmin', AdminComponent)
    .component('appAdminProducts', AdminProductsComponent)
    .component('appAdminProduct', AdminProductComponent)
    .component('appAdminComments', AdminCommentsComponent)
    .component('appAdminReviews', AdminReviewsComponent)
    .component('appAdminFeedbacks', AdminFeedbacksComponent)
    .component('appOrder', OrderComponent)