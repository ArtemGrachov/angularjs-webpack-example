export default function ($stateProvider) {
    $stateProvider
        .state('Products', {
            url: '/products',
            component: 'appProducts'
        })
        .state('Product', {
            url: '/products/:id',
            component: 'appProduct'
        })
        .state('Order', {
            url: '/order',
            component: 'appOrder'
        });
}