export default {
    controller: function () {},
    template: require('./app.component.html'),
    $routeConfig: [{
            path: '/',
            component: 'appProducts',
            name: 'Products',
            useAsDefault: true
        },
        {
            path: 'products/:id',
            name: 'Product',
            component: 'appProduct'
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
        {
            path: '/admin/...',
            component: 'appAdmin',
            name: 'Admin'
        },
        {
            path: '/order/',
            component: 'appOrder',
            name: 'Order'
        }
    ]
}