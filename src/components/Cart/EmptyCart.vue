<template>
  <div class="container my-5">
    <img src="../../assets/products/shopping-cart.png" width="200px" />
    <div class="mt-4">
      <h4 class="orange-red fw-600">Your cart is empty</h4>
      <h5 class="darkblue fw-600">
        You can go to category to view more products.
      </h5>
      <div class="electronics">
        <router-link to="/category">
          <abbr title="Category">
            <img class="image" src="../../assets/category.png" />
          </abbr>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmptyCart",
};
</script>

<style>
.orange-red {
  color: orangered;
}
.darkblue {
  color: darkblue;
}
.fw-600 {
  font-weight: 600;
}
.image {
  cursor: pointer;
  width: 40px;
  height: 40px;
}
.container {
  text-align: center;
}
</style>
