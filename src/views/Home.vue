<script setup>
import products from "../data/products.json";
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <h1>Home</h1>
    <div class="products">
      <RouterLink
        v-for="product in products"
        :key="product.id"
        :to="`/products/${product.id}`"
      >
        {{ product.name }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.products {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem;
}
</style>
