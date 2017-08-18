import $ from 'jquery'

var state = {
    user: {}
}

let store = {
    state: state,
    createUser(user) {
        //Get response from server
        //If return true, we're good.
        state.user = user
        //state.user.userId = userId
        console.log(state.user)
    }
}

export {store}