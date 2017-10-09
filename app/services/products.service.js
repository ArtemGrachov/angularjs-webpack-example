export default function (dataService) {
    this.productsUrl = 'products/';

    this.getProduct = function (index) {
        return dataService.get(this.productsUrl + index);
    }
    this.getProducts = function () {
        return dataService.get(this.productsUrl)
    }
    this.getComments = function (productId) {
        return dataService.get(`comments?productId=${productId}`)
    }
    this.postComment = function (data) {
        return dataService.post('comments/', data);
    }
}