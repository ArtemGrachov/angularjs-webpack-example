export default {
    controller: function (dataService) {
        this.sendReply = function (data) {
            dataService.post('reviews/', data)
                .then(
                    res => this.refreshReplies()
                );
        }
        this.refreshReplies = function () {
            dataService.get('reviews')
                .then(
                    res => {
                        this.reviews = res;
                    }
                )
        }
        this.refreshReplies();
    },
    template: require('./about.component.html')
}