<template>
  <div class="userform">
    <form @click="createUser">
      <input type="text" v-model="username" placeholder="username">
      <input type="text" v-model="password" placeholder="password">
      <input type="text" v-model="email" placeholder="email">
      <button type="submit">CREATE</button>
    </form>
  </div>
</template>

<script>
import { store } from '../store'

export default {
  name: 'userform',
  data () {
    return {
      username: '',
      password: '',
      email: '',
      results: ''
    }
  },
  methods: {
    createUser() {
      store.createUser(this.username, this.password, this.email)
        .then(res => {
          this.results = res
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
