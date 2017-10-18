export default function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('About', {
            url: '/about',
            component: 'appAbout'
        })
        .state('Contacts', {
            url: '/contacts',
            component: 'appContacts'
        });

    $urlRouterProvider.otherwise('/products');
}