<template>
  <a-layout-header  class="header">
    <div class="logo" />
    <a-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">Trang chủ</a-menu-item>
      <a-menu-item key="2">Sản phẩm</a-menu-item>
      <a-menu-item key="3">Giới thiệu</a-menu-item>
      <a-menu-item key="4">Tuyển dụng</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>


<script>
import { defineComponent, ref } from 'vue';
export default {
  name: "TopBar",
  setup(){
    return {selectedKeys1: ref(['2']),}
  }
}
</script>

<style scoped>

</style>