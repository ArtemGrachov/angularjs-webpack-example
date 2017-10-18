export default function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/admin', '/admin/products');
    $stateProvider
        .state('Products', {
            url: '/products',
            component: 'appProducts'
        })
        .state('Product', {
            url: '/products/:id',
            component: 'appProduct'
        })
        .state('About', {
            url: '/about',
            component: 'appAbout'
        })
        .state('Contacts', {
            url: '/contacts',
            component: 'appContacts'
        })
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
        .state('Auth', {
            url: '/auth',
            component: 'appAuth'
        })
        .state('Order', {
            url: '/order',
            component: 'appOrder'
        });
    $urlRouterProvider.otherwise('/products');
}