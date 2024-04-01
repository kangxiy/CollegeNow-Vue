<template>
  <div class="card">
    <p>{{ vari.location }}</p>
    <img :src="vari.image">
    <p class="price">${{ vari.price }}</p> 
    <CoolButton :price="vari.price" />
  </div>
</template>

<script setup>
import CoolButton from './CoolButton.vue';
import { defineProps } from 'vue';

const props = defineProps({
  vari: Object
});
</script>

<style scoped>
img{
  height: 40%;
  width: 80%;
  flex-wrap: wrap;
  display: flex;
  border-radius: 10px;
  
}
.card{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 15vw;
  height: 27vw;
  margin: 20px;
  align-items: center;
  background-color:beige;
  border-radius: 20px;
  font-weight:bold;
  font-size: 25px;
}

.price{
  margin-top:20px;
  margin-bottom:0.5cm;
  align-items: center;
}
</style>