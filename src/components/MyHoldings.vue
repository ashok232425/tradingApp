<template>
  <div class="holdings-container">
    <h2 class="text-lg font-semibold mb-4">Holdings</h2>
    <table class="w-full border-collapse">
      <thead>
        <tr>
          <th @click="sortBy('symbol')">Symbol</th>
          <th @click="sortBy('averagePrice')">Average Price</th>
          <th @click="sortBy('totalQuantity')">Total Quantity</th>
          <th @click="sortBy('totalValue')">Total Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="holding in sortedHoldings" :key="holding.symbol">
          <td>{{ holding.symbol }}</td>
          <td>{{ holding.averagePrice }}</td>
          <td>{{ holding.totalQuantity }}</td>
          <td>{{ holding.totalValue }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      holdings: [
        // Dummy data for demonstration, replace with actual data from API
        { symbol: 'AAPL', averagePrice: 150.25, totalQuantity: 100, totalValue: 15025 },
        { symbol: 'GOOGL', averagePrice: 2850.75, totalQuantity: 50, totalValue: 142537.5 },
        // Add more holding data as needed
      ],
      sortKey: '', // Key for sorting
      sortOrder: 'asc' // Initial sort order
    };
  },
  computed: {
    sortedHoldings() {
      // Create a copy of holdings array
      let sortedHoldings = [...this.holdings];
      
      // Sort the copy based on selected key and order
      sortedHoldings.sort((a, b) => {
        if (this.sortOrder === 'asc') {
          return a[this.sortKey] - b[this.sortKey];
        } else {
          return b[this.sortKey] - a[this.sortKey];
        }
      });

      return sortedHoldings;
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
.holdings-container {
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