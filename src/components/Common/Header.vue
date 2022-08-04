<template>
  <div class="header">
    <div class="menu-item" @click="isOpen = !isOpen">
      <div class="category">
        <img src="../../assets/separation.png" class="class-1" />
        <transition name="Category" apear>
          <div class="sub-menu" v-if="isOpen">
            <div class="menu-item">
              <router-link to="/electronics">Electronics</router-link>
            </div>
            <div class="menu-item">
              <router-link to="/clothes">Clothes</router-link>
            </div>
            <div class="menu-item">
              <router-link to="/books">Books</router-link>
            </div>
            <div class="menu-item">
              <router-link to="/toys">Toys</router-link>
            </div>
            <div class="menu-item">
              <router-link to="/shoes">Shoes</router-link>
            </div>
          </div>
        </transition>
      </div>
      <svg viewBox="0 0 1030 638" width="10">
        <path
          d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
          fill="#FFF"
        ></path>
      </svg>
    </div>
    <p class="head">E - STORE</p>
    <div class="cart">
      <img @click="goTo" class="image" src="../../assets/products/cart.png" />
      <span class="cart-count">{{ count }}</span>

      <h5 class="logout">
        <button class="btn btn-primary" @click="logout">Logout</button>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    logout() {
      alert("Logout Successfully");
      this.$router.push("/login");
    },
    goTo() {
      this.$router.push("/cart");
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
.class-1 {
  width: 30px;
  height: 30px;
}
.header {
  height: 60px;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-item {
  color: #fff;
  padding: 5px 20px;
  display: flex;
  transition: 0.4s;
}
.menu-item a {
  color: inherit;
  text-decoration: none;
}
.category {
  position: relative;
}
.sub-menu {
  top: 30px;
  left: -20px;
  position: absolute;
  color: #bb3030;
  background: black;
}
.head {
  font-size: 30px;
  font-weight: 700;
  color: dodgerblue;
  margin: inherit;
  margin-left: 12rem;
  cursor: pointer;
  text-decoration: none;
}
.cart-count {
  font-size: 15px;
  color: #fff;
  padding: 0 5px 2px 5px;
  margin-left: -60px;
  background: rgb(240, 8, 8);
  border-radius: 50%;
  width: 20px;
  height: 20px;
}
.cart {
  width: 300px;
  justify-content: space-evenly;
  padding-top: 3px;
  display: flex;
}
.cart-icon {
  line-height: 45px;
  font-size: 24px;
  color: #2aa5a0;
  cursor: pointer;
}
.logout {
  font-weight: 600;
  margin-top: 5px;
}
.image {
  margin-top: 5px;
  height: 40px;
  width: 40px;
  cursor: pointer;
}
</style>
