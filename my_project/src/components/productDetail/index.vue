<template>
    <div class="warp">
      <productDetailHead></productDetailHead>
      <productDetailContent></productDetailContent>
      <productDetailBottom></productDetailBottom>
    </div>
</template>

<script>
  import productDetailHead from './productDetailHead'
  import productDetailContent from './productContent'
  import productDetailBottom from './productBottom'
    export default {
        name: "index",
      components : {
        productDetailHead,
        productDetailContent,
        productDetailBottom
      }
    }
</script>

<style scoped>
  .warp {
    margin-bottom: 37px;
  }
</style>
