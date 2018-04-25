<template>
  <div class="wrap">
    <cataSearch></cataSearch>
    <leftCata></leftCata>
    <rightCata></rightCata>
  </div>
</template>

<script>
  import cataSearch from './search'
  import leftCata from './leftCata'
  import rightCata from './rightCata'
    export default {
        name: "index",
      components : {
        cataSearch,
        leftCata,
        rightCata
      }

    }
</script>

<style scoped>

</style>
