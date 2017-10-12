export default function ($http, modalService) {
    this.get = function (url) {
        return $http({
            method: 'GET',
            url: `http://localhost:3000/${url}`
        }).then(res => res.data);
    }
    this.post = function (url, data) {
        return $http({
            method: 'POST',
            url: `http://localhost:3000/${url}`,
            data: data
        })
    }
    this.update = function (url, data) {
        return $http({
            method: 'PUT',
            url: `http://localhost:3000/${url}`,
            data: data
        })
    }
    this.delete = function (url) {
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
                return $http({
                    method: 'DELETE',
                    url: `http://localhost:3000/${url}`
                })
            } else {
                return false
            }
        })
    }
}