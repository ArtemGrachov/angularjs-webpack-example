export default {
    controller: function (dataService) {
        'ngInject';
        this.sendFeedback = function () {
            dataService.post('feedbacks/', this.feedbackForm)
                .then(
                    res => this.feedbackForm = {}
                );
        }
    },
    template: require('./contacts.component.html')
}