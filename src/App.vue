<template>
  <div id="app">
    <Heading></Heading>
    <h1 class="logo-text">BLEU IT!</h1>
    <!--<router-view></router-view>-->
    <UserForm></UserForm>
    <!-- <ThreadForm></ThreadForm> -->
    <Threads></Threads>
  </div>
</template>

<script>
  import UserForm from './components/UserForm'
  import Heading from './components/Heading'
  // import ThreadForm from './components/Threadform'
  import Threads from './components/Threads'
  import ViewThread from './components/ViewThread'
  export default {
    name: 'app',
    components: {
      UserForm,
      // ThreadForm,
      Threads,
      ViewThread,
      Heading
    }
  }

</script>

<style>
  @import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  input {
    margin: 15px;
  }

  .logo-text {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }
</style>