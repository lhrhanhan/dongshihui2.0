<template>
  <div class="wrap">
    发现
  </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>
  .wrap {
    background: #000;
    color: #fff;
    height: 44px;
    line-height: 44px;
    text-align: center;
    width: 100%;
    max-width: 640px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    box-shadow: 0 -1px 0 rgba(0,0,0,.05), 0 0 10px rgba(0,0,0,.1);
    font-size: 1.6rem;
  }
</style>
