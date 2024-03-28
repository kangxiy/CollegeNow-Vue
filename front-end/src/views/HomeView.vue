<template>
  <div>
    <ul>
      <li v-for="animal in animals" :key="animal">{{ animal }}</li>
    </ul>
    <CoolButton />
    <CoolCard />
  </div>
</template>

<script setup>
import CoolButton from "../components/CoolButton.vue";
import CoolCard from "../components/CoolCard.vue";

let animals = ["Monkey", "Shark", "Ape", "Bogdan"];
</script>

<style scoped></style>
