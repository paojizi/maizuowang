import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home/Home.vue'
import Banner from '@/components/Home/Banner.vue'
import More from '@/components/Home/More.vue'
import Detail from '@/components/Home/Detail.vue'
import City from '@/components/Home/City.vue'
import Register from '@/components/Home/Register.vue'

import Film from '@/components/film/Film.vue'
import Cinema from '@/components/cinema/Cinema.vue'
import Cinemadetail from '@/components/cinema/Cinemadetail.vue'
import Shopping from '@/components/shopping/Shopping.vue'
import Shopdetail from '@/components/shopping/Shopdetail.vue'
import Shopbannerdetail from '@/components/shopping/Shopbannerdetail.vue'
import Activedetail from '@/components/shopping/Activedetail.vue'
import Alldetail from '@/components/shopping/Alldetail.vue'
import Htc from '@/components/shopping/Htc.vue'
import Show from '@/components/show/Show.vue'
import Showdetail from '@/components/show/Showdetail.vue'
import Showorder from '@/components/show/Showorder.vue'
import Me from '@/components/me/Me.vue'
import Card from '@/components/card/Card.vue'




Vue.use(Router)

export default new Router({
  routes: [
  {path: '/',component:Home},
  {path:'/home',component:Home},    	
	{path:'/home/banner',component:Banner},
	{path:'/home/detail/:id',component:Detail},
	{path:'/home/more',component:More},    		    	  
  {path:'/city',component:City},
  {path:'/register',component:Register},
  {path:'/film',component:Film},
  {path:'/cinema',component:Cinema},
  {path:'/cinema/cinemadetail/:id',component:Cinemadetail},
  {path:'/shopping',component:Shopping},
  {path:'/shopping/shopdetail/:id',component:Shopdetail},
  {path:'/shopping/shopbannerdetail/:id',component:Shopbannerdetail},
  {path:'/shopping/activedetail/:id',component:Activedetail},
  {path:'/shopping/alldetail/:id',component:Alldetail},
  {path:'/shopping/htc/:id',component:Htc},
  {path:'/show',component:Show},
  {path:'/show/showdetail/:id',component:Showdetail},
  {path:'/show/showdetail/:id/showorder',component:Showorder},
  {path:'/me',component:Me},
  {path:'/card',component:Card}
  ]
})
