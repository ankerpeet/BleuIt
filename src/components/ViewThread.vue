<template>
  <div class="threads">
    <div v-for="thread in results">
      <h3>{{thread.title}}</h3>
      <p>{{thread.body}}</p>
      <div v-for="tag in thread.tags">
        <p>{{tag}}</p>
      </div>
    </div>
    <h3>test</h3>
  </div>
</template>

<script>
import { store } from '../store'

export default {
  name: 'threads',
  data() {
    return {
      results: [

      ]
    }
  },
  methods: {
    getThreads() {
      this.results = store.getThreads()
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
