export default function () {
    this.login = function (data) {
        console.log(data);
        return new Promise(
            function (res, rej) {
                setTimeout(() => {
                    if (data.login != 'zzz') {
                        res(true)
                    } else {
                        rej('test error')
                    }
                }, 700)
            }
        );
    }
    this.reg = function (data) {
        console.log(data);
        return new Promise(
            function (res, rej) {
                setTimeout(() => {
                    if (data.login != 'zzz') {
                        res(true)
                    } else {
                        rej('test error')
                    }
                }, 700)
            }
        );
    }
    this.getUser = function (id) {
        console.log(id);
    }
}