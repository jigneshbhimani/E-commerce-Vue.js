<template>
  <div class="d-flex product-details-outer">
    <Header />
    <div class="product-details">
      <div class="container mb-5">
        <h4 class="fw-600" style="color: blue">Add Electronic to Cart</h4>
        <div class="back">
          <button class="btn btn-primary back" @click="back">Back</button>
        </div>
        <div class="row">
          <div class="col-md-4" style="cursor: pointer">
            <img :src="details.imageURL" class="image" />
          </div>
          <div class="col-md-4" style="cursor: pointer">
            <h5 class="my-4"><b class="head">Title: </b>{{ details.title }}</h5>
            <h5 class="my-4"><b class="head">Price: </b>{{ details.price }}</h5>
            <h5 class="my-4">
              <b class="head">Description: </b>{{ details.description }}
            </h5>
            <h5 class="my-4">
              <b class="head">Company: </b>{{ details.company }}
            </h5>
            <h5 class="my-4"><b class="head">Color: </b>{{ details.color }}</h5>
            <h5 class="my-4"><b class="head">Size: </b>{{ details.size }}</h5>
            <div>
              <button @click="goToCart" class="btn btn-outline-primary">
                Go to Cart
              </button>
              <button
                @click="addToCart"
                style="margin-right: 5px; margin-left: 5px"
                class="btn btn-outline-success"
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
  </div>
</template>

<script>
import Header from "../Common/Header.vue";

export default {
  name: "ProductDetails",
  components: {
    Header,
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
      this.$router.push("/electronics");
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

<style scoped>
.image {
  width: 300px;
  height: 300px;
  border-radius: 150px;
  padding: 10px;
  background: gainsboro;
}
.container {
  margin-top: 50px;
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
.back {
  margin-top: 10px;
  padding: 10px;
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
