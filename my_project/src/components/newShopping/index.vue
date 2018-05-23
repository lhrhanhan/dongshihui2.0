<template>
  <div class="wrap">
    <navHead></navHead>
    <newShoppingContent></newShoppingContent>
  </div>
</template>

<script>
  import navHead from './navHead'
  import newShoppingContent from './newShoppingContent'
    export default {
        name: "index",
      components : {
        navHead,
        newShoppingContent
      }
    }
</script>

<style scoped>
  .wrap {
    height: 1600px;
  }
</style>
