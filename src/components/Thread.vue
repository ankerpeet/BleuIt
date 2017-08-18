<template>
  <div class="userform">
    <form @submit.prevent="createUser()">
      <input type="text" v-model="user.username" placeholder="username">
      <input type="text" v-model="user.password" placeholder="password">
      <input type="text" v-model="user.email" placeholder="email">
      <button type="submit">CREATE</button>
    </form>
  </div>
</template>

<script>
import { store } from '../store'

export default {
  name: 'userform',
  data() {
    return {  
      user: {
        username: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    createUser() {
      store.createUser(this.user);
        // .then(res => {
        //   this.results = res
        // })
    }
  }
}
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
