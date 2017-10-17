export default function () {
    function Observable() {
        this.subscribers = [];
        this.emit = function (data) {
            this.subscribers.forEach(sub => sub(data))
        }
        this.subscribe = function (sub) {
            this.subscribers.push(sub);
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
        fakeAuth
            .getUser(token)
            .then(res => {
                this.user = res;
                this.userObs.emit();
                console.log('load user:', res);
            })
    }

    this.login = function (data) {
        return fakeAuth.login(data)
            .then(
                res => {
                    this.saveToken(res);
                    this.loadUser(res);
                    console.log('login data', data)
                }
            )
    }

    this.logout = function () {
        return new Promise((res, rej) => {
            setTimeout(() => {
                this.deleteToken();
                this.user = null;
                this.userObs.emit();
                console.log('logout', this.getToken());
            }, 500);
        })
    }

    this.reg = function (data) {
        return fakeAuth.reg(data)
            .then(
                res => {
                    this.saveToken(res);
                    this.loadUser(res);
                    console.log('reg data', data)
                }
            )
    }

    this.testBackendCheck = function (cat) {
        const check = (this.getToken() == 'adminToken' || (cat == 'user' && this.getToken() == 'userToken'))
        console.log('test token check', check);
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
                            username: 'Admin',
                            category: 'admin'
                        })
                    } else if (token == 'userToken') {
                        res({
                            username: 'User',
                            category: 'user'
                        })
                    } else {
                        rej('Get user failed!')
                    }
                }, 500)
            })
        }
    }
}