<template>
    <button class="Cart"><slot>Add to Cart</slot></button>
</template>

<script setup>
const props = defineProps({
      vari: Object
  }) 
</script>

<style scoped>
.Cart{
  display: flex;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
</style>
