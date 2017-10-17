export default function ($http, modalService, authService) {
    this.get = function (url, authTest) {
        const reqParams = {
            method: 'GET',
            url: `http://localhost:3000/${url}`
        }
        if (authTest) {
            reqParams.headers = {
                'Authorization': authService.getToken()
            }
        }
        return $http(reqParams).then(
            res => {
                // test
                if (authTest) {
                    if (authService.testBackendCheck(authTest)) {
                        return res.data
                    } else {
                        return false;
                    }
                }
                // test
                return res.data
            }
        );
    }
    this.post = function (url, data, authTest) {
        const reqParams = {
            method: 'POST',
            url: `http://localhost:3000/${url}`,
            data: data
        };
        if (authTest) {
            reqParams.headers = {
                'Authorization': authService.getToken()
            }
        }
        // test
        if (authTest) {
            if (authService.testBackendCheck(authTest)) {
                return $http(reqParams)
            } else {
                return new Promise((res, rej) => rej('Auth error (POST)'))
            }
        } else {
            return $http(reqParams)
        }
        // test
    }
    this.update = function (url, data, authTest) {
        const reqParams = {
            method: 'PUT',
            url: `http://localhost:3000/${url}`,
            data: data
        };
        if (authTest) {
            reqParams.headers = {
                'Authorization': authService.getToken()
            }
        }
        // test
        if (authTest) {
            if (authService.testBackendCheck(authTest)) {
                return $http(reqParams)
            } else {
                return new Promise((res, rej) => rej('Auth error (PUT)'))
            }
        } else {
            return $http(reqParams)
        }
        // test
    }
    this.delete = function (url, authTest) {
        return modalService.createWindow({
            title: 'Confirm deleting',
            msg: 'Are you sure to delete this item?',
            btns: [{
                    text: 'Yes',
                    res: true
                },
                {
                    text: 'No'
                }
            ]
        }).then(res => {
            if (res) {
                const reqParams = {
                    method: 'DELETE',
                    url: `http://localhost:3000/${url}`
                }
                if (authTest) {
                    reqParams.headers = {
                        'Authorization': authService.getToken()
                    }
                }
                // test
                if (authTest) {
                    if (authService.testBackendCheck(authTest)) {
                        return $http(reqParams)
                    } else {
                        return new Promise((res, rej) => rej('Auth error (DELETE)'))
                    }
                } else {
                    return $http(reqParams)
                }
                // test
            } else {
                return false
            }
        })
    }
}