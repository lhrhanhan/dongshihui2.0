<template>
    <div class="wrap">
      <headDiscover></headDiscover>

      <disContent></disContent>
      <navIndex></navIndex>
    </div>
</template>

<script>
  import navIndex from '../../components/index/bottom'
  import headDiscover from './headerDiscover'
  import disContent from './disContent'
    export default {
        name: "index",
      components :  {
        headDiscover,
        navIndex,
        disContent
      }
    }
</script>

<style scoped>
  .wrap {
    background-color: rgb(240,240,240);
  }
</style>
