<template>
  <div id="app">

    <!--<router-view></router-view>-->
    <UserForm></UserForm>
    <ThreadForm></ThreadForm>
    <Threads></Threads>
  </div>
</template>

<script>
import UserForm from './components/UserForm'
import ThreadForm from './components/Threadform'
import Threads from './components/Threads'
export default {
  name: 'app',
  components: {
    UserForm,
    ThreadForm,
    Threads
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
