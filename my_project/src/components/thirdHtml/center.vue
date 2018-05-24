<template>

      <div class="tab-wapper">
        <span>默认</span>
        <span>销量</span>
        <span>价格</span>
      </div>

</template>

<script>
    export default {
        name: "center"
    }
</script>

<style scoped>
  .tab-wapper {
    position: fixed;
    z-index: 110;
    left: 0;
    top: 44px;
    width: 100%;
    max-width: 640px;
    height: 44px;
    line-height: 44px;
    background: #fff;
    font-size: 0;
    text-align: center;
    border-bottom: .5px solid #e8e8e8;
    color: #858585;
  }

  span {
    width: 33%;
    display: inline-block;
    font-size: 1.4rem;
    vertical-align: top;
    border-right: 1px solid rgb(222,222,222);
  }
</style>
