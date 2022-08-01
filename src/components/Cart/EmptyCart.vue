<template>
  <div class="container my-5">
    <img src="../../assets/products/shopping-cart.png" width="200px" />
    <div class="mt-4">
      <h4 class="orange-red fw-600">Your cart is empty</h4>
      <h5 class="darkblue fw-600">
        You can go to product pages to view more products.
      </h5>
      <div class="electronics">
        <router-link to="/electronics">Electronics</router-link>
      </div>
      <div class="clothes">
        <router-link to="/clothes">Cloth</router-link>
      </div>
      <div class="books">
        <router-link to="/books">Book</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmptyCart",
};
</script>

<style scoped>
.orange-red {
  color: orangered;
}
.darkblue {
  color: darkblue;
}
.fw-600 {
  font-weight: 600;
}
.books,
.clothes,
.electronics {
  padding: 7px;
}
.container {
  text-align: center;
}
</style>
