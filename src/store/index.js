import $ from 'jquery'

var state = {
    user: {
        username: '',
        userId: ''
    },
    
}

let store = {
    createUser(username, password, email) {
        //Get response from server
        //If return true, we're good.
        state.user.username = username
        //state.user.userId = userId
        console.log(state.user)
    }
}