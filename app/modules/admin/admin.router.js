export default function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.when('/admin', '/admin/products');
    $stateProvider
        .state('Admin', {
            url: '/admin',
            component: 'appAdmin',
            resolve: {
                checkAdmin: function (authService, $state) {
                    return authService
                        .loadUser(authService.getToken())
                        .catch(err => $state.go('Auth'))
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
        });
}