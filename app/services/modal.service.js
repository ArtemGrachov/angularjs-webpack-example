export default function () {
    this.modals = {
        windows: [{
                id: '0',
                title: 'title',
                msg: 'message',
                buttons: [{
                    text: 'test',
                    style: 'success',
                    action: () => console.log('green button')
                }, {
                    text: 'test 2',
                    style: 'danger',
                    action: () => console.log('orange button')
                }, {
                    text: 'test 3',
                    style: 'warning',
                    action: () => {
                        console.log(this)
                    }
                }]
            },
            {
                id: '1',
                title: 'title 2',
                msg: 'message 2',
                buttons: [{
                    text: 'test',
                    style: 'success',
                    action: () => console.log('green button')
                }, {
                    text: 'test 2',
                    style: 'danger',
                    action: () => console.log('orange button')
                }]
            }
        ],
        notify: ['ntf 1', 'ntf2']
    }
}