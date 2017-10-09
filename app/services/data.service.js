export default function ($http) {

    this.get = function (url) {
        return $http({
            method: 'GET',
            url: `http://localhost:3000/${url}`
        }).then(res => res.data);
    }

    this.getWithAuth = function (url) {

    }
}