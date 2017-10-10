export default function (productsService) {
    this.cart = [];
    this.getCart = function () {
        this.getStorage();
        return this.cart;
    }
    this.updateStorage = function () {
        localStorage.setItem('cart', JSON.stringify(this.cart.map(product => product.id)));
    }
    this.addToCart = function (cartObj) {
        this.cart.push(cartObj);
        this.updateStorage();
    }
    this.removeFromCart = function (index) {
        this.cart.splice(index, 1);
        this.updateStorage();
    }
    this.clearCart = function () {
        this.cart = [];
        this.updateStorage();
    }
    this.getStorage = function () {
        const ids = JSON.parse(localStorage.getItem('cart'));
        this.cart = [];
        ids.forEach(id => {
            productsService.getProduct(id)
                .then(res => this.cart.push({
                    id: res.id,
                    price: res.price,
                    name: res.name
                }))
        })
    }
}