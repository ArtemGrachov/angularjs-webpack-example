export default function (dataService) {
    this.feedbackUrl = 'feedbacks/';
    this.getFeedbacks = function () {
        return dataService.get(this.feedbackUrl);
    }
    this.sendFeedback = function (data) {
        return dataService.post(this.feedbackUrl, data)
    }
    this.deleteFeedback = function (id) {
        return dataService.delete(this.feedbackUrl + id)
    }
}