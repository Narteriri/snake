<template>
  <div>
    <div>bot名称:{{ bot_name }}</div>
    <div>bot战力:{{ bot_power }}</div>
  </div>
  <router-view></router-view>
</template>

<script>
  import $ from 'jquery';
  import { ref } from 'vue';

  export default {
    name: "App",
    setup: () => {

      let bot_name = ref("")
      let bot_power = ref("")

      $.ajax({
        url: "http://localhost:3030/pk/getbotinfo/",
        type: "get",
        success: resp => {
          bot_name.value = resp.name;
          bot_power.value = resp.power;
          console.log(resp)
        }
      })

      return {
        bot_name,
        bot_power
      };
    }
  }
</script>

<style>
  body {
    background-image: url("@/assets/bg1.png");
    background-size: cover;
  }
</style>
