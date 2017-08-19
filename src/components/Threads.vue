<template>
  <div class="threads">
    <div v-if="this.view">
      <div class="panel">
        <h3>{{view.title}}</h3>
        <p class="body-baby">{{view.body}}</p>
         <img :src="view.url" alt="image">
        <div v-for="tag in view.tags">
          <p class="tags">{{tag}}</p>
        </div>
      </div>
      <div>
        <form @submit.prevent="createComment(view.id)">
        <input type="text" v-model="comment.body" placeholder="comment">
        <button type="submit">Submit</button>
        </form>
      </div>
      <div v-if="view.comments" v-for="comment in view.comments">
        <div>{{comment.body}}</div>
      </div>
    </div>

    <div v-else v-for="thread in results">
      <div class="panel" @click="viewThread(thread)">
        <h3>{{thread.title}}</h3>
        <p class="body-baby">{{thread.body}}</p>
        <img :src="thread.url" alt="image">
        <div v-for="tag in thread.tags">
          <p class="tags">Tags:{{tag}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store'

export default {
  name: 'threads',
  data() {
    return {
      results: [],
      view: "",
      comment: {
        body: ""
      },
      comments: ""
    }
  },
  methods: {
    getThreads() {
      this.results = store.getThreads()
    },
    viewThread(thread) {
      console.log(thread)
      this.view = thread
    },
    createComment(id) {
store.createComment(this.comment, id);
    }
  },
  mounted() {
    this.getThreads()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2,
h3 {
  font-weight: normal;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
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

.body-baby {
font-size: 25px;
}
</style>
