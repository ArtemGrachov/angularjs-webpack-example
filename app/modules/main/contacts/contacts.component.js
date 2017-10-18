export default {
    controller: function (dataService) {
        this.sendFeedback = function () {
            dataService.post('feedbacks/', this.feedbackForm)
                .then(
                    res => this.feedbackForm = {}
                );
        }
    },
    template: require('./contacts.component.html')
}