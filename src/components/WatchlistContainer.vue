<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div v-for="n in 5" :key="n" class="watchlist bg-white rounded-lg shadow-md p-4">
      <h2>Watchlist {{ n + 1 }}</h2>
      <ul class="list-disc space-y-2">
        <li
          v-for="stock in generateMockData(20)"
          :key="stock.symbol"
          @click="handleStockClick(stock)"
          class="cursor-pointer hover:bg-gray-100 flex justify-between items-center px-2 py-1 rounded-md"
        >
          <div>
            <span class="font-semibold">{{ stock.symbol }}</span> ({{ stock.exchange }})
          </div>
          <div class="font-semibold">{{ stock.price.toFixed(2) }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exchanges: ["NSE", "BSE"],
    };
  },
  methods: {
    generateMockData(numStocks) {
      const data = [];
      for (let i = 0; i < numStocks; i++) {
        data.push({
          symbol: `STOCK${i + 1}`,
          exchange: this.exchanges[Math.floor(Math.random() * this.exchanges.length)],
          price: Math.random() * 1000, // Generate random price between 0 and 1000
        });
      }
      return data;
    },
    handleStockClick(stock) {
      // Mock functionality for order/chart actions
      console.log(`Selected stock: ${stock.symbol} (${stock.exchange})`);
      alert(`You selected ${stock.symbol}. This is a mock and cannot place real orders.`);
    },
  },
};
</script>

<style scoped>
/* Add Tailwind CSS classes here for additional styling if needed */
</style>