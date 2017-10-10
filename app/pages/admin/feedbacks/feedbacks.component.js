export default {
    controller: function (feedbacksService) {
        this.refreshFeedbacks = function () {
            feedbacksService.getFeedbacks()
                .then(res => this.feedbacks = res)
        }
        this.deleteFeedback = function (id) {
            feedbacksService.deleteFeedback(id)
                .then(res => this.refreshFeedbacks());
        }
        this.refreshFeedbacks();
    },
    template: require('./feedbacks.component.html')
}