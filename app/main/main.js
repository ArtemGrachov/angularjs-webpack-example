import './main.scss';

export default {
    controller: function () {
        this.test = 'hello, webpack!'
    },
    template: require('./main.html')
}