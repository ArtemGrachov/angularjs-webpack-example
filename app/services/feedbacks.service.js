export default function (dataService) {
    'ngInject';
    this.feedbackUrl = 'feedbacks/';
    this.getFeedbacks = function () {
        return dataService.get(this.feedbackUrl, 'admin');
    }
    this.sendFeedback = function (data) {
        return dataService.post(this.feedbackUrl, data)
    }
    this.deleteFeedback = function (id) {
        return dataService.delete(this.feedbackUrl + id, 'admin')
    }
}