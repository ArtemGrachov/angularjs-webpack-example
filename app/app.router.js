export default function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('Products', {
            url: '/',
            component: 'appProducts'
        })
        .state('Product', {
            url: '/products/:id',
            component: 'appProduct'
        })
        .state('About', {
            url: '/about/',
            component: 'appAbout'
        })
        .state('Contacts', {
            url: '/contacts/',
            component: 'appContacts'
        })
        .state('Admin', {
            url: '/admin/',
            component: 'appAdmin'
        })
        .state('AdminNewProduct', {
            parent: 'Admin',
            url: '/admin/products/news',
            component: 'appAdminProduct'
        })
        .state('AdminProduct', {
            parent: 'Admin',
            url: '/admin/products/:id',
            component: 'appAdminProduct'
        })
        .state('AdminProducts', {
            parent: 'Admin',
            url: '/admin/products',
            component: 'appAdminProducts'
        })
        .state('AdminComments', {
            parent: 'Admin',
            url: '/admin/comments',
            component: 'appAdminComments'
        })
        .state('AdminReviews', {
            parent: 'Admin',
            url: '/admin/reviews/',
            component: 'appAdminReviews'
        })
        .state('AdminFeedbacks', {
            parent: 'Admin',
            url: '/admin/feedbacks/',
            component: 'appAdminFeedbacks'
        })
        .state('AdminOrders', {
            parent: 'Admin',
            url: '/admin/orders/',
            component: 'appAdminOrders'
        })
        .state('Order', {
            url: '/order/',
            component: 'appOrder'
        })
        .state('Auth', {
            url: '/auth/',
            component: 'appAuth'
        })
    // $urlRouterProvider.otherwise('products');
}