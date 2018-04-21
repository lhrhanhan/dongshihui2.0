<template>
  <div>
    <botBottom></botBottom>
    <div class="wrap">
      <seaSearch></seaSearch>
      <snoSnow></snoSnow>
    </div>
  </div>
</template>

<script>
  import botBottom from './bottom'
  import seaSearch from './search'
  import snoSnow from './snowing'
  export default {
    name: "index",
    components : {
      botBottom,
      seaSearch,
      snoSnow
    },
    data () {
      return {

      }
    },

    mounted () {
      this.$request({
        type: 'GET',
        url: 'api/adwap/loadAds?adids=1%7C2%7C3%7C4%7C5',
        success: function (res) {
          console.log(res.data)
        }
      })
    }

  }
</script>

<style scoped>

</style>
