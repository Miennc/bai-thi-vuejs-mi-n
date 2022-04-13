import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

export const router = new VueRouter({
    routes:[
        {
            path: '/',
            name: 'Home',
            component:()=> import('@/pages/HomePageComponent.vue')
        },
        {
         path:'favorite',
         name:'favorite',
         component:()=> import('@/pages/FavoriteComponent.vue')
        }

    ],
    mode:"history"
})