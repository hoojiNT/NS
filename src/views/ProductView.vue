<template>
  <div>
    <h1>products</h1>
    <a-space>
      <product-item v-for="n in 5">
      </product-item>
    </a-space>
  </div>
</template>

<script>
import ProductItem from "@/components/product/ProductItem.vue"
export default {
  name: "ProductView",
  props: [],
  components :{
    ProductItem
  }
}
</script>

<style scoped>

</style>