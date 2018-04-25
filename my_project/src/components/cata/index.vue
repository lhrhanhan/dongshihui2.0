<template>
  <div class="wrap">
    <cataSearch></cataSearch>
    <leftCata></leftCata>
  </div>
</template>

<script>
  import cataSearch from './search'
  import leftCata from './leftCata'
    export default {
        name: "index",
      components : {
        cataSearch,
        leftCata
      }

    }
</script>

<style scoped>

</style>
