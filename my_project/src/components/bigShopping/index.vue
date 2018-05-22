<template>
  <div class="wrap">
    <headNav></headNav>
    <headContent></headContent>
  </div>
</template>

<script>
  import headNav from './headNav'
  import headContent from './bigShoppingContent'
    export default {
        name: "index",
      components : {
        headNav,
        headContent
      }
    }
</script>

<style scoped>

</style>
