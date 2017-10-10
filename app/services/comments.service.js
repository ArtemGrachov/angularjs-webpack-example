export default function (dataService) {
    this.commentsUrl = 'comments/';
    this.getComments = function (options) {
        return dataService.get(this.commentsUrl + (options ? options : ''));
    }
    this.addComment = function (data) {
        return dataService.post(this.commentsUrl, data);
    }
    this.updateComment = function (data) {
        return dataService.update(this.commentsUrl + data.id, data);
    }
    this.deleteComment = function (id) {
        return dataService.delete(this.commentsUrl + id);
    }
}