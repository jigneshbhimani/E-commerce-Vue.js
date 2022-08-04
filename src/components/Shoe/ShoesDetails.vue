<template>
  <div class="d-flex product-details-outer">
    <Header />
    <div class="product-details">
      <div class="container mb-5">
        <div class="div">
          <img src="../../assets/back.png" class="back" @click="back" />
        </div>
        <h4 class="fw-600 class-3">Add Shoes to Cart</h4>
        <div class="row">
          <div class="col-md-4 class-1">
            <img :src="details.imageURL" class="image" />
          </div>
          <div class="col-md-4 class-2">
            <h5 class="my-4"><b class="head">Title: </b>{{ details.title }}</h5>
            <h5 class="my-4"><b class="head">Price: </b>{{ details.price }}</h5>
            <h5 class="my-4"><b class="head">Brand: </b>{{ details.brand }}</h5>
            <h5 class="my-4"><b class="head">Color: </b>{{ details.color }}</h5>
            <h5 class="my-4"><b class="head">Size: </b>{{ details.size }}</h5>
            <div>
              <button @click="goToCart" class="btn btn-outline-primary">
                Go to Cart
              </button>
              <button
                @click="addToCart"
                class="btn btn-outline-success cart-btn"
              >
                Add Item
              </button>
              <button @click="removeItem" class="btn btn-outline-danger">
                Remove Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../Common/Header.vue";
import Footer from "../Common/Footer.vue";

export default {
  name: "ShoesDetails",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      details: this.$route.params,
    };
  },
  methods: {
    goToCart() {
      this.$router.push("/cart");
    },
    addToCart() {
      this.$store.dispatch("addToCart", this.details);
    },
    removeItem() {
      this.$store.dispatch("removeItem", this.details);
    },
    back() {
      this.$router.push("/shoes");
    },
  },
  created() {
    if (this.$route.params.id !== undefined) {
      localStorage.setItem("details", JSON.stringify(this.$route.params));
    }
  },
  mounted() {
    this.details = JSON.parse(localStorage.getItem("details"));
  },
};
</script>

<style>
.class-1,
.class-2 {
  cursor: pointer;
}
.class-3 {
  color: blue;
}
.cart-btn {
  margin-right: 5px;
  margin-left: 5px;
}
.image {
  width: 300px;
  height: 300px;
  border-radius: 150px;
  padding: 10px;
  background: gainsboro;
}
.container {
  padding: 20px;
}
.product-details-outer {
  flex-direction: column;
  height: 100vh;
}
.product-details {
  flex: 1;
  background: #efe9e2;
  overflow-y: auto;
}
.div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.back {
  padding: 10px;
  width: 50px;
  height: 50px;
}
.fw-600 {
  font-weight: 600;
}
.my-4 {
  text-align: left;
  margin-left: 1rem;
  color: darkcyan;
}
.head {
  color: black;
  font-weight: 600;
}
</style>
