import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import WatchlistContainer from './components/WatchlistContainer.vue'
import OrderWindow from './components/OrderWindow.vue'
import MyOrderbook from './components/MyOrderbook.vue'
import MyHoldings from './components/MyHoldings.vue'
import MyChart from './components/MyChart.vue'
import './index.css'

const routes = [
  { path: '/', redirect: '/watchlist' }, // Redirect to watchlist by default
  { path: '/watchlist', component: WatchlistContainer },
  { path: '/order', component: OrderWindow },
  { path: '/orderbook', component: MyOrderbook },
  { path: '/holdings', component: MyHoldings },
  { path: '/chart', component: MyChart }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')