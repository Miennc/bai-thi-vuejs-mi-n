<script>
import {homeService} from '@/services/homeService.js'

export default {
  data() {
    return {
      articles: [],
      search: 'tesla',
      favorites: [],
    }
  },
  mounted() {
   this.onSubmit()
    this.favorites.push(JSON.parse(localStorage.getItem('article')));
  },
  methods: {
    async onSubmit() {
      try {
        const response = await homeService.getArticles(this.search);
        this.articles = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    favorite(name){
      this.articles.articles.forEach(article => {
        if(article.source.name === name){
          localStorage.setItem('article', JSON.stringify(article));
        }
      });

    }
  }
}
</script>

<template>
  <div class="container mx-auto">
    <form action="" @submit.prevent="onSubmit()" class="flex justify-center">
      <input type="text" placeholder="search" class="w-96 h-14 border-2 border-rose-600" v-model="search">
      <span><button class="w-32 h-14 bg-red-500">favorite</button></span>
    </form>
    <div v-for="(articlesItem, index) in articles.articles" :key="index">
        <div class="overflow-hidden w-96 h-auto mx-auto ">
          <img :src="articlesItem.urlToImage" alt="" class="mt-4">
          <div>title: {{ articlesItem.title }}</div>
          <div>source: {{ articlesItem.source.name }}</div>
          <div>description short: {{ articlesItem.description }}</div>
          <a :href="articlesItem.url"  target="_blank" class="text-rose-600"  >Read more</a>>
          <a class="mt-20 w-full px-5 text-center  rounded-lg" :href="'https://www.facebook.com/sharer/sharer.php?u='+articlesItem.url"><i class="fa-solid fa-share"></i> facebook </a>
          <a class="mt-20 w-full px-5 text-center  rounded-lg" :href="'https://twitter.com/intent/tweet?text='+articlesItem.url"><i class="fa-solid fa-share"></i> Twitter</a>
          <a class="cursor-pointer" @click="favorite(articlesItem.source.name)"><i class="fa-solid fa-heart"></i></a>
        </div>
    </div>
  </div>
</template>

<style>

</style>