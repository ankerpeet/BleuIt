<template>
  <div class="heading">
    <button @click="showLogin">Login</button>
    <button @click="showSignup">Signup</button>
    <button @click="showSignup">Logout</button>


    <div id="stuff">
      <form v-show="seen" @submit.prevent="createUser()">
        <input type="text" v-model="user.username" placeholder="username">
        <input type="password" v-model="user.password" placeholder="password">
        <input type="text" v-model="user.email" placeholder="email">
        <button type="submit">CREATE</button>
      </form>
      <form v-show="unameSeen" @submit.prevent="loginUser()">
        <input type="text" v-model="user.email" placeholder="email">
        <input type="password" v-model="user.password" placeholder="password">
        <button type="submit">LOGIN</button>
      </form>
    </div>
  </div>
</template>

<script>
  import { store } from '../store'

  export default {
    name: 'heading',
    data() {
      return {
        user: {
          username: '',
          password: '',
          email: ''
        },
        seen: false,
        unameSeen: false
      }
    },
    methods: {
      showSignup() {
        if (this.unameSeen) {
          this.showLogin()
        }
        this.seen = !this.seen
      },
      showLogin() {
        if (this.seen) {
          this.showSignup()
        }
        this.unameSeen = !this.unameSeen
      },
      createUser() {
        store.createUser(this.user);
      },
      loginUser() {
        store.login(this.user); //not sure if this is the correct method name
      }
    },
    props: {
      flag: true //possibly use for login/create new user
    }
  }

  // var app = new Vue({
  //   el: '#stuff',
  //   data: {
  //     seen:true
  //   }
  // })

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>