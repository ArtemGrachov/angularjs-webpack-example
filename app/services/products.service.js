export default function (dataService) {
    this.getProduct = function (index) {
        return dataService.get(`products/${index}`)
    }
    this.getProducts = function () {
        return dataService.get('products')
    }
}