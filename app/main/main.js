import './main.scss';

export default {
    controller: function () {},
    template: require('./main.html'),
    $routeConfig: [{
            path: '/',
            component: 'appProducts',
            name: 'Products',
            useAsDefault: true
        },
        {
            path: '/about/',
            component: 'appAbout',
            name: 'About'
        },
        {
            path: '/contacts/',
            component: 'appContacts',
            name: 'Contacts'
        },
    ]
}