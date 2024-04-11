<template>
  <div class="order-window fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
    <div class="modal-container bg-white rounded-lg shadow-md p-6">
      <h2 class="text-lg font-semibold mb-4">Order Window</h2>
      <div class="mb-4">
        <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
        <input type="text" id="price" v-model="price" placeholder="Enter price" class="input-field">
      </div>
      <div class="mb-4">
        <label for="quantity" class="block text-sm font-medium text-gray-700">Quantity</label>
        <input type="text" id="quantity" v-model="quantity" placeholder="Enter quantity" class="input-field">
      </div>
      <div class="flex justify-between">
        <button @click="placeOrder('buy')" class="action-button bg-green-500">Buy</button>
        <button @click="placeOrder('sell')" class="action-button bg-red-500">Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: '',
      quantity: ''
    };
  },
  methods: {
    placeOrder(type) {
      // Emit event to parent component with order details
      this.$emit('order-placed', { type, price: this.price, quantity: this.quantity });
      // Reset input fields after placing order
      this.price = '';
      this.quantity = '';
    }
  }
};
</script>

<style scoped>
.order-window {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  width: 400px;
}

.input-field {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.action-button {
  padding: 8px 16px;
  color: black;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  opacity: 0.9;
}
</style>
