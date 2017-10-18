import angular from 'angular';
import ProductsComponent from './products/products.component';
import ProductPreviewComponent from './products/products.component';
import ProductComponent from './product/product.component';
import CartComponent from './cart/cart.component';
import OrderComponent from './order/order.component';

import ProductsRouter from './products.router';

export default angular.module('productsModule', [])
    .component('appProducts', ProductsComponent)
    .component('appProductPreview', ProductPreviewComponent)
    .component('appProduct', ProductComponent)
    .component('appCart', CartComponent)
    .component('appOrder', OrderComponent)
    .config(ProductsRouter)