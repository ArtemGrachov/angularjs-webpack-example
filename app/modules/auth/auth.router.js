export default function ($stateProvider) {
    $stateProvider
        .state('Auth', {
            url: '/auth',
            component: 'appAuth'
        })
}