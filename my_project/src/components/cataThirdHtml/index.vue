<template>
  <div class="wrap">
    <productList></productList>
    <centerProductList></centerProductList>
    <thirdContent></thirdContent>
    <bottom></bottom>
  </div>
</template>

<script>
  import bottom from '../../components/index/bottom'
  import productList from './thirdHead'
  import thirdContent from './thirdContent'
  import centerProductList from './center'
  export default {
    name: "index",
    components : {
      productList,
      thirdContent,
      bottom,
      centerProductList
    }
  }
</script>

<style scoped>
  .wrap {
    margin-bottom: 54px;
  }
</style>
