export default function () {
    this.getCart = function () {
        return JSON.parse(localStorage.getItem('cart'));
    }
    this.refreshStorage = function () {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        console.log(this.getCart())
    }
    this.deleteStorage = function () {
        localStorage.removeItem('cart');
        this.cart = [];
    }
    this.addToCart = function (productId) {
        this.cart.push(productId);
        this.refreshStorage();
    }
    this.removeFromCart = function (index) {
        this.cart.splice(index, 1);
        this.refreshStorage();
    }
    this.cart = this.getCart();
    if (!this.cart) {
        this.cart = [];
    }
}