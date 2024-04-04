<script setup>
import { RouterLink, RouterView } from "vue-router";
import CoolCard from "@/components/CoolCard.vue"
import CoolButton from "../components/CoolButton.vue"

let places = [{
  location: 'Tokyo',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0RbtJ8f7uvbw2IypMz9QW7SrLs6Ht93dMNHfKn7eoMA&s',
  price: 300
},
{ 
  location: 'Seoul',
  image: 'https://i.pinimg.com/originals/ee/10/5b/ee105b9c4c89b1ee930a500d16328294.jpg',
  price: 400
},{
  location: 'Hainan',
  image: 'https://i.pinimg.com/736x/fe/ae/db/feaedb5a069becf94c6a39831e04702e.jpg',
  price: 250
},
{
  location: 'Paris',
  image: 'https://s1.1zoom.me/b5155/503/France_Rivers_Sky_Bridges_Marinas_Evening_Paris_535441_1080x1920.jpg',
  price: 450
},
{
  location: 'New York',
  image:'https://wallpapers.com/images/hd/times-square-new-york-iphone-xgod0u46melcc3rm.jpg',
  price: 450
},
{
  location: 'Los Angeles',
  image: 'https://images.wallpaperscraft.com/image/single/downtown_los_angeles_usa_115546_1080x1920.jpg',
  price: 450
}]
</script>

<template>
  <div class="container">
    <div class="top">
      <CoolCard v-for="(place, index) in places.slice(0, 3)" :key="index" :vari="place" />
    </div>
    <div class="bottom">
      <CoolCard v-for="(place, index) in places.slice(3)" :key="index" :vari="place" />
    </div>
  
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: row; 
  align-items: center;
  flex-wrap: wrap;
  width: 90vw;
  margin: 10px auto;
  background-color: pink;
  border-radius: 50px;
}
.top, .bottom {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
