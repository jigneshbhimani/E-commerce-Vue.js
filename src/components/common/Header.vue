<template>
  <header>
    <div class="header">
      <div @click="goTo('products')" class="product-header">
        <h4 class="product">Products</h4>
      </div>
      <div class="d-flex cart">
        <img
          @click="goTo('cart')"
          src="../../assets/shoppingcart.jpg"
          width="40px"
          height="40px"
          style="margin-top: 6px"
        />
        <span class="cart-count">{{ count }}</span>

        <h5 class="login">
          <button class="btn btn-primary" @click="logout">Logout</button>
        </h5>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    goTo(page) {
      page === "products"
        ? this.$router.push("/products")
        : this.$router.push("/cart");
    },
    logout() {
      localStorage.removeItem("details");
      this.$router.push("/login");
    },
  },
  computed: {
    count() {
      return this.$store.state.cartItemCount;
    },
  },
};
</script>

<style scoped>
.header {
  height: 60px;
  background: lightgrey;
  display: flex;
  justify-content: space-between;
}
.product-header {
  display: flex;
  margin-left: 15px;
  padding: 6px;
  cursor: pointer;
}
.product {
  color: deeppink;
  font-weight: 600;
  margin-top: 7px;
}
.cart-count {
  font-size: 15px;
  color: #d4570cf2;
  padding: 0 5px;
  margin-left: -35px;
  background: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}
.cart {
  width: 300px;
  justify-content: space-evenly;
  padding-top: 3px;
}
.cart-icon {
  line-height: 45px;
  font-size: 24px;
  color: #2aa5a0;
  cursor: pointer;
}
.login,
.register {
  font-weight: 600;
  margin-top: 10px;
}
</style>
