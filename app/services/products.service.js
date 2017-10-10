export default function (dataService) {
    this.productsUrl = 'products/';

    this.getProduct = function (id) {
        return dataService.get(this.productsUrl + id);
    }
    this.getProducts = function () {
        return dataService.get(this.productsUrl);
    }
    this.addProduct = function (data) {
        return dataService.post(this.productsUrl, data);
    }
    this.updateProduct = function (data) {
        return dataService.update(this.productsUrl + data.id, data);
    }
    this.deleteProduct = function (id) {
        return dataService.delete(this.productsUrl + id)
    }
    this.getComments = function (id) {
        return dataService.get(`comments?productId=${id}`);
    }
    this.postComment = function (data) {
        return dataService.post('comments/', data);
    }
}