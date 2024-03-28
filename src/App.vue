<template>
  <div>
    <!-- Navigation bar -->
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-white font-bold">Stock Trader</router-link>
        <div>
          <router-link to="/watchlist" class="text-white mx-4">Watchlist</router-link>
          <router-link to="/order" class="text-white mx-4">Orders</router-link>
          <router-link to="/orderbook" class="text-white mx-4">Orderbook</router-link>
          <router-link to="/holdings" class="text-white mx-4">Holdings</router-link>
          <router-link to="/chart" class="text-white mx-4">Chart</router-link>
        </div>
      </div>
    </nav>

    <!-- Router view -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
