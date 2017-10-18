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