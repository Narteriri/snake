<template>

  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script>

  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap';
  import NavBar from './components/NavBar.vue';

  export default {
    components: { 
      NavBar 
    },
    name: "App",
    setup: () => {
    }
  }
</script>

<style>
  body {
    background-image: url("@/assets/images/bg1.png");
    background-size: cover;
  }
</style>
