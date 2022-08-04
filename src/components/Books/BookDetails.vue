<template>
  <div class="d-flex book-details-outer">
    <Header />
    <div class="book-details">
      <div class="container mb-5">
        <div class="div">
          <img src="../../assets/back.png" class="back" @click="back" />
        </div>
        <h4 class="fw-600 class-3">Add Book to Cart</h4>
        <div class="row">
          <div class="col-md-4 class-1">
            <img :src="details.imageURL" class="image" />
          </div>
          <div class="col-md-4 class-2">
            <h5 class="my-4"><b class="head">Name: </b>{{ details.name }}</h5>
            <h5 class="my-4"><b class="head">Price: </b>{{ details.price }}</h5>
            <h5 class="my-4">
              <b class="head">Author: </b>{{ details.author }}
            </h5>
            <h5 class="my-4">
              <b class="head">Published: </b>{{ details.published }}
            </h5>
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
  name: "BookDetails",
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
      this.$router.push("/books");
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
.cart-btn {
  margin-left: 5px;
  margin-right: 5px;
}
.class-3 {
  color: blue;
}
.container {
  padding: 20px;
}
.image {
  width: 300px;
  height: 300px;
  border-radius: 150px;
  padding: 10px;
  background: gainsboro;
}
.book-details-outer {
  flex-direction: column;
  height: 100vh;
}
.div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.back {
  padding: 10px;
  height: 50px;
  width: 50px;
}
.book-details {
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
  color: darkcyan;
}
.head {
  color: black;
  font-weight: 600;
}
</style>
