import $ from 'jquery'

function postComment(thread, id, cb) {
    $.ajax({
        contentType: 'application/json',
        method: 'PUT',
        url: '//localhost:3000/api/threads/' + id + '/comments',
        data: JSON.stringify(thread)
    })
        .then(() => {
            //console.log(updatedObj)
            store.updateThreads(cb)
        })
        .fail(console.log('I\'m a little teapot'))
}

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
                //console.log(state.user)
            })
    },
    login(user) {
        $.post("//localhost:3000/login", user)
            .then(res => {
                state.user = res.data
                //console.log(state.user)
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
    createThread(thread, cb) {
        //thread.userId = state.user._id

        var newPost = {
            title: thread.title,
            body: thread.body,
            tags: thread.tags,
            url: thread.url,
            userId: state.user._id
        }

        console.log(state.user._id)

        console.log(newPost)
        $.post("//localhost:3000/api/threads", newPost)
            .then(
            cb(newPost)
            )
        // state.thread = thread
        // console.log(state.thread)
    },
    getThreads(cb) {
        $.get("//localhost:3000/api/threads")
            .then((data) => {
                state.threadArr = data
                //console.log("Store", state.threadArr)
                cb(state.threadArr)
            })
    },
    createComment(comment, id, cb) {
        var newComment = {
            body: comment.body,
             threadId: id,
            userId: state.user._id
        }
        console.log(newComment)
        state.threadArr.forEach(function (thread) {
            console.log('this is a test of the emergency broadcast system')
            if (thread._id == id) {
                console.log('does it get here ' + thread)
                thread.comments.push(newComment)
                postComment(thread, id, cb)

            }
        })
        //console.log(comment, id)
    },
    vote(int, thread, cb) {
        //console.log(thread)
        var updatedObj = {
            votes: thread.votes + int
        }

        $.ajax({
            contentType: 'application/json',
            method: 'PUT',
            url: '//localhost:3000/api/threads/' + thread._id + '/votes',
            data: JSON.stringify(updatedObj)
        })
            .then(() => {
                //console.log(updatedObj)
                this.updateThreads(cb)
            })
            .fail(console.log('I\'m a little teapot'))
    },
    updateThreads(cb) {
        $.get("//localhost:3000/api/threads")
            .then((data) => {
                state.threadArr = data
                //console.log("Store", state.threadArr)
                cb(state.threadArr)
            })
    },
    postComment
}

export { store }