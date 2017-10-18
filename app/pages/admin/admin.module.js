import angular from 'angular';
import AdminComponent from './admin.component';
import AdminCommentsComponent from './comments/comments.component';
import AdminProductsComponent from './products/products.component';
import AdminProductComponent from './products/product/product.component';
import AdminReviewsComponent from './reviews/reviews.component';
import AdminFeedbacksComponent from './feedbacks/feedbacks.component';
import AdminOrdersComponent from './orders/orders.component';
import AdminOrderComponent from './orders/order/order.component';

export default angular.module('adminModule', [])
    .component('appAdmin', AdminComponent)
    .component('appAdminProducts', AdminProductsComponent)
    .component('appAdminProduct', AdminProductComponent)
    .component('appAdminComments', AdminCommentsComponent)
    .component('appAdminReviews', AdminReviewsComponent)
    .component('appAdminFeedbacks', AdminFeedbacksComponent)
    .component('appAdminOrders', AdminOrdersComponent)
    .component('appAdminOrder', AdminOrderComponent)
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/admin', '/admin/products');
        $stateProvider
            .state('Admin', {
                url: '/admin',
                component: 'appAdmin',
                resolve: {
                    test: function (authService, $state) {
                        return authService
                            .loadUser(authService.getToken())
                            .then(res => {
                                if (res.category != 'admin') {
                                    $state.go('Auth');
                                }
                            })
                    }
                }
            })
            .state('AdminNewProduct', {
                parent: 'Admin',
                url: 'products/new',
                component: 'appAdminProduct'
            })
            .state('AdminProduct', {
                parent: 'Admin',
                url: '/products/:id',
                component: 'appAdminProduct'
            })
            .state('AdminProducts', {
                parent: 'Admin',
                url: '/products',
                component: 'appAdminProducts'
            })
            .state('AdminComments', {
                parent: 'Admin',
                url: '/comments',
                component: 'appAdminComments'
            })
            .state('AdminReviews', {
                parent: 'Admin',
                url: '/reviews',
                component: 'appAdminReviews'
            })
            .state('AdminFeedbacks', {
                parent: 'Admin',
                url: '/feedbacks',
                component: 'appAdminFeedbacks'
            })
            .state('AdminOrders', {
                parent: 'Admin',
                url: '/orders',
                component: 'appAdminOrders'
            })
            .state('AdminOrder', {
                parent: 'Admin',
                url: '/orders/:id',
                component: 'appAdminOrder'
            })
    })