<template>
  <div class="warp">
    <navHead></navHead>
  </div>
</template>

<script>
  import navHead from './navHead'
    export default {
        name: "index",
      components :  {
        navHead
      }
    }
</script>

<style scoped>
  .warp {
    background-color: rgb(240,240,240);
  }
</style>
