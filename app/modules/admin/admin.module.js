import angular from 'angular';

import AdminComponent from './admin/admin.component';
import AdminCommentsComponent from './comments/comments.component';
import AdminProductsComponent from './products/products.component';
import AdminProductComponent from './products/product/product.component';
import AdminReviewsComponent from './reviews/reviews.component';
import AdminFeedbacksComponent from './feedbacks/feedbacks.component';
import AdminOrdersComponent from './orders/orders.component';
import AdminOrderComponent from './orders/order/order.component';

import AdminRouter from './admin.router';

export default angular.module('adminModule', [])
    .component('appAdmin', AdminComponent)
    .component('appAdminProducts', AdminProductsComponent)
    .component('appAdminProduct', AdminProductComponent)
    .component('appAdminComments', AdminCommentsComponent)
    .component('appAdminReviews', AdminReviewsComponent)
    .component('appAdminFeedbacks', AdminFeedbacksComponent)
    .component('appAdminOrders', AdminOrdersComponent)
    .component('appAdminOrder', AdminOrderComponent)
    .config(AdminRouter)