<template>
  <header>
    <div class="header">
      <div>
        <select
          name="categoryName"
          class="form-select form-control"
          @change="changeRoute"
          style="margin-left: 20px; margin-top: 7px"
          v-model="selected"
        >
          <option value="products">Electronics</option>
          <option value="clothes">Cloth</option>
          <option value="books">Book</option>
        </select>
      </div>

      <div class="d-flex cart">
        <img
          @click="goTo('cart')"
          src="../../assets/products/shoppingcart.jpg"
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
    logout() {
      alert("Logout Successfully");
      this.$router.push("/login");
    },
    changeRoute(e) {
      console.log(this.key,"KEY")
      this.$router.push(e.target.value);
    },
  },
  computed: {
    count() {
      return this.$store.state.cartItemCount;
    },
  },
  data() {
    return {
      key: "",
    };
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
.category {
  display: flex;
}
.product-header,
.cloth-header,
.book-header {
  padding: 6px;
  cursor: pointer;
}
.product,
.cloth,
.book {
  color: deeppink;
  font-weight: 600;
  font-size: 20px;
  margin-top: 7px;
  text-decoration: underline solid black 2px;
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
