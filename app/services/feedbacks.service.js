export default function (dataService) {
    this.feedbackUrl = 'feedbacks/';
    this.loadFeedbacks = function () {
        return dataService.get(this.feedbackUrl);
    }
    this.loadFeedback = function (id) {
        return dataService.get(this.feedbackUrl + id)
    }
    this.sendFeedback = function (data) {
        return dataService.post(this.feedbackUrl, data)
    }
    this.deleteFeedback = function (id) {
        return dataService.delete(this.feedbackUrl + id)
    }
}