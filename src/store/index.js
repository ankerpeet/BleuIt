import $ from 'jquery'



var state = {
    user: {},
    thread: {},
    threadArr: [
        // {
        //     title: 'Awesome Sauceome',
        //     body: 'I fell down. My butt hurts. Also my knee. I took an arrow to my knee!',
        //     url: '//placehold.it/200x200/',
        //     id: "123",
        //     tags: ["fun", "stupid", "awesome"],
        //     comments: []
        // },
        // {
        //     title: 'Awesome!',
        //     body: 'I am Jerry.',
        //     url: '//placehold.it/300x200/',
        //     id: "2222",
        //     tags: ["fun", "stupid", "awesome"],
        //     comments: []
        // },
        // {
        //     title: 'Sauce,,,,ome',
        //     body: 'I knee!',
        //     url: '//placehold.it/209x200/',
        //     id: "123123",
        //     tags: ["fun", "stupid", "awesome"],
        //     comments: []
        // }
    ]
}

let store = {
    state: state,
    createUser(user) {
        $.post("//localhost:3000/register", user)
            .then(res => {
                state.user = res.data
                console.log(state.user)
            })
    },
    login(user) {
        $.post("//localhost:3000/login", user)
            .then(res => {
                state.user = res.data
                console.log(state.user)
            })
    },
    logout() {
        $.ajax({
            contentType: 'application/json',
            method: 'DELETE',
            url: '//localhost:3000/logout'

        })
            .then(state.user = {})
            .fail(logError)
    
},
    createThread(thread) {
        state.thread = thread
        console.log(state.thread)
    },
    getThreads(cb) {
        $.get("//localhost:3000/api/threads")
            .then((data) => {
                state.threadArr = data
                console.log("Store", state.threadArr)
                cb(state.threadArr)
            })

    },
    createComment(comment, id) {
        state.threadArr.forEach(function (thread) {
            if (thread.id == id) {
                thread.comments.push(comment)
            }
        })
        console.log(comment, id)
    }
}

export { store }