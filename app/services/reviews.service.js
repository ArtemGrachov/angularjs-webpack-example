export default function (dataService) {
    this.reviewsUrl = 'reviews/';
    this.getReviews = function () {
        return dataService.get(this.reviewsUrl);
    }
    this.addReview = function (data) {
        return dataService.post(this.reviewsUrl, data);
    }
    this.updateReview = function (data) {
        return dataService.update(this.reviewsUrl + data.id, data, 'admin');
    }
    this.deleteReview = function (id) {
        return dataService.delete(this.reviewsUrl + id, 'admin');
    }
}