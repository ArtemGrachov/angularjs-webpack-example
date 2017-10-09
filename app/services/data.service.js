export default function ($http) {
    this.get = function (url) {
        return $http({
            method: 'GET',
            url: `http://localhost:3000/${url}`
        }).then(res => res.data);
    }
    this.post = function (url, data) {
        console.log('data service', url, data)
        return $http({
            method: 'POST',
            url: `http://localhost:3000/${url}`,
            data: data
        })
    }
}