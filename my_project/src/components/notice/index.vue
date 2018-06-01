<template>
  <div class="wrap">
    <noticeHead></noticeHead>
    <noticeContent></noticeContent>
  </div>
</template>

<script>
  import noticeHead from './noticeHead'
  import noticeContent from './noticeContent'
    export default {
        name: "index",
      components : {
        noticeHead,
        noticeContent
      }
    }
</script>

<style scoped>
  .wrap {
    background: #f0f0f0;
  }
</style>
