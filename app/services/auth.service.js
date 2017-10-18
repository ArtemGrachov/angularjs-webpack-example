export default function ($http) {
    const $this = this;

    function Observable() {
        this.subscribers = [];
        this.emit = function (data) {
            this.subscribers.forEach(sub => sub(data))
        }
        this.subscribe = function (sub) {
            this.subscribers.push(sub);
            return sub;
        }
        this.unsubscribe = function (sub) {
            this
                .subscribers
                .splice(
                    this
                    .subscribers
                    .indexOf(sub),
                    1
                )
        }
    }
    this.userObs = new Observable();

    this.checkUser = function (category) {
        if (this.user) {
            return this.user.category == category;
        }
        return false;
    }

    this.saveToken = function (token) {
        return localStorage.setItem('authorization', JSON.stringify(token));
    }

    this.getToken = function (token) {
        return JSON.parse(localStorage.getItem('authorization'));
    }

    this.deleteToken = function () {
        localStorage.clear('authorization');
    }

    this.loadUser = function (token) {
        if (!token) {
            token = this.getToken();
        }
        // console.log('load user token', token)
        return fakeAuth
            .getUser(token)
            .then(res => {
                // console.log('load user:', res);
                $this.user = res;
                $this.userObs.emit(res);
                return res;
            })
    }

    this.login = function (data) {
        return fakeAuth.login(data)
            .then(res => {
                this.saveToken(res);
                return res
            })
            .then(this.loadUser)
    }

    this.reg = function (data) {
        return fakeAuth.reg(data)
            .then(res => {
                this.saveToken(res);
                return res
            })
            .then(this.loadUser)
    }

    this.logout = function () {
        return new Promise((res, rej) => {
            setTimeout(() => {
                this.deleteToken();
                this.user = null;
                this.userObs.emit(null);
                // console.log('logout', this.getToken());
            }, 500);
        })
    }
    this.testBackendCheck = function (cat) {
        const check = (this.getToken() == 'adminToken' || (cat == 'user' && this.getToken() == 'userToken'))
        // console.log('test token check', check);
        return check;
    }
    const fakeAuth = {
        login: function (data) {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    if (data.login == 'admin' && data.password == '111') {
                        res('adminToken');
                    } else if (data.login == 'user' && data.password == '222') {
                        res('userToken');
                    } else {
                        rej('Test authentication failed!');
                    }
                }, 500);
            })
        },
        reg: function (data) {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    if (data.login == 'new' && data.password == '333') {
                        res('userToken');
                    } else {
                        rej('Test registration failed!');
                    }
                }, 500)
            })
        },
        getUser: function (token) {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    if (token == 'adminToken') {
                        res({
                            login: 'admin',
                            username: 'Admin',
                            category: 'admin',
                            fullname: 'Test Admin',
                            phone: '555-555-55-55',
                            address: 'Lorem Ipsum str., 24a',
                            email: 'admin@mail.net'
                        })
                    } else if (token == 'userToken') {
                        res({
                            login: 'admin',
                            username: 'User',
                            category: 'user',
                            fullname: 'Test User',
                            phone: '444-444-44-44',
                            email: 'user@post.com',
                            address: 'Lorem Ipsum str., 55'
                        })
                    } else {
                        rej('Get user failed!')
                    }
                }, 500)
            })
        }
    }
}