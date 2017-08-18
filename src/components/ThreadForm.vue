<template>
  <div class="thread-form">
    <form @submit.prevent="createThread()">
      <input type="text" v-model="thread.title" placeholder="Title">
      <input type="text" v-model="thread.body" placeholder="Body">
      <input type="text" v-model="thread.tags" placeholder="Tags">
      <input type="text" v-model="thread.url" placeholder="URL">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { store } from '../store'

export default {
  name: 'userform',
  data() {
    return {  
      thread: {
        title: '',
        body: '',
        tags: '',
        url: ''
      }
    }
  },
  methods: {
    createThread() {
      store.createThread(this.thread);
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
