<template>
  <div class="orderbook-container">
    <h2 class="text-lg font-semibold mb-4">Orderbook</h2>
    <table class="w-full border-collapse">
      <thead>
        <tr>
          <th @click="sortBy('symbol')">Symbol</th>
          <th @click="sortBy('price')">Price</th>
          <th @click="sortBy('quantity')">Quantity</th>
          <th @click="sortBy('type')">Type</th>
          <th @click="sortBy('time')">Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in sortedOrders" :key="order.id">
          <td>{{ order.symbol }}</td>
          <td>{{ order.price }}</td>
          <td>{{ order.quantity }}</td>
          <td>{{ order.type }}</td>
          <td>{{ order.time }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        // Dummy data for demonstration, replace with actual data from API
        { id: 1, symbol: 'AAPL', price: 150.25, quantity: 100, type: 'Buy', time: '2023-12-28 14:30:00' },
        { id: 2, symbol: 'GOOGL', price: 2850.75, quantity: 50, type: 'Sell', time: '2023-12-28 14:35:00' },
        // Add more order data as needed
      ],
      sortKey: '', // Key for sorting
      sortOrder: 'asc' // Initial sort order
    };
  },
  computed: {
    sortedOrders() {
      // Create a copy of orders array
      let sortedOrders = [...this.orders];
      
      // Sort the copy based on selected key and order
      sortedOrders.sort((a, b) => {
        if (this.sortOrder === 'asc') {
          return a[this.sortKey] - b[this.sortKey];
        } else {
          return b[this.sortKey] - a[this.sortKey];
        }
      });

      return sortedOrders;
    }
  },
  methods: {
    sortBy(key) {
      // Toggle sort order if same key is clicked again
      if (this.sortKey === key) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortKey = key;
        this.sortOrder = 'asc';
      }
    }
  }
};
</script>

<style scoped>
.orderbook-container {
  max-width: 800px;
  margin: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  padding: 8px;
  border: 1px solid #e2e8f0;
}

th {
  cursor: pointer;
  background-color: #edf2f7;
}

th:hover {
  background-color: #cbd5e0;
}
</style>