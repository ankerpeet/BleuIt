import $ from 'jquery'

var state = {
    user: {},
    thread: {},
    threadArr: [
        {
            title: 'Awesome Sauceome',
            body: 'I fell down. My butt hurts. Also my knee. I took an arrow to my knee!',
            url: '//placehold.it/200x200/',
            id: "123"
        },
        {
            title: 'Awesome!',
            body: 'I am Jerry.',
            url: '//placehold.it/300x200/',
            id: "2222"
        },
        {
            title: 'Sauce,,,,ome',
            body: 'I knee!',
            url: '//placehold.it/209x200/',
            id: "123123"
        }
    ]
}

let store = {
    state: state,
    createUser(user) {
        //Get response from server
        //If return true, we're good.
        state.user = user
        //state.user.userId = userId
        console.log(state.user)
    },
    createThread(thread) {
        state.thread = thread
        console.log(state.thread)
    },
    getThreads() {
        return state.threadArr
        
    }
}

export {store}