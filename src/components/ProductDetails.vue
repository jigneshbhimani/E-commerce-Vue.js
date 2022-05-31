<template>
  <div class="d-flex product-details-outer">
    <Header />
    <div class="product-details">
      <div class="container mb-5">
        <br />
        <h4 class="fw-600" style="color: blue;">Add Item To Cart</h4>
        <div class="row">
          <div class="col-md-4" style="cursor: pointer">
            <img
              :src="details.imageURL"
              width="300px"
              height="300px"
              style="border-radius: 15px"
            />
          </div>
          <div class="col-md-4" style="cursor: pointer">
            <h5 class="my-4 fw-600">Title: {{ details.title }}</h5>
            <h5 class="my-4 fw-600">Price: {{ details.price }}</h5>
            <h5 class="my-4 fw-600">Description: {{ details.description }}</h5>
            <h5 class="my-4 fw-600">Company: {{ details.Company }}</h5>
            <h5 class="my-4 fw-600">Color: {{ details.color }}</h5>
            <h5 class="my-4 fw-600">Size: {{ details.size }}</h5>
            <div>
              <button @click="goToCart" class="btn btn-primary">
                Go to Cart
              </button>
              <button
                @click="addToCart"
                style="margin-right: 5px; margin-left: 5px"
                class="btn btn-success"
              >
                Add Item
              </button>
              <button @click="removeItem" class="btn btn-danger">
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
import Header from "../components/common/Header.vue";

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
.product-details-outer {
  flex-direction: column;
  height: 100vh;
}
.product-details {
  flex: 1;
  background: #efe9e2;
  overflow-y: auto;
}
.fw-600 {
  font-weight: 600;
}
.my-4 {
  text-align: left;
  margin-left: 1rem;
}
</style>
