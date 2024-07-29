<script setup>
import { useRoute, useRouter ,RouterView } from 'vue-router';
import products from '../data/products.json'

const route = useRoute();
const router = useRouter();
const product = products.find(product => product.id === parseInt(route.params.id));

function showOwner() {
  router.push({ name: 'owner', params: { id: product.owner.id } });
}

</script>

<template>
  <div v-if="product">
    <h1>Product</h1>
    <h2>{{ product.name }}</h2>
    <p>price : {{ product.price }}</p>
    <p>year : {{ product.year }}</p>
    <button @click="showOwner">Show Owner</button>
    <RouterView />
  </div>
  <div v-else>
    <h1>Product not found</h1>
  </div>
</template>