<template>
  <div class="wrap">
    <cataSearch></cataSearch>
    <cataBottom></cataBottom>
    <leftCata></leftCata>
    <!--<rightCata></rightCata>-->
  </div>
</template>

<script>
  import cataSearch from './search'
  import leftCata from './leftCata'
  // import rightCata from './rightCata'
  import cataBottom from '../index/bottom'
    export default {
      name: "index",
      components : {
        cataSearch,
        leftCata,
        // rightCata,
        cataBottom
      }

    }
</script>

<style scoped>

</style>
