<template>
  <div class="wrapper" data-app>
    <Header />
    <div class="conatiner">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <router-link to="/electronics">
              <label class="label">Electronics</label>
              <img class="image" src="../../assets/electronics.png" />
            </router-link>
          </div>
          <div class="col">
            <router-link to="/clothes">
              <label class="label">Clothes</label>
              <img class="image" src="../../assets/cloth.png" />
            </router-link>
          </div>
          <div class="col">
            <router-link to="/books">
              <label class="label">Books</label>
              <img class="image" src="../../assets/books.png" />
            </router-link>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <router-link to="/toys">
              <label class="label">Toy</label>
              <img class="image" src="../../assets/toy.png" />
            </router-link>
          </div>
          <div class="col">
            <router-link to="/shoes">
              <label class="label">Shoes</label>
              <img class="image" src="../../assets/shoes.png" />
            </router-link>
          </div>
          <!-- <div class="col">
            <router-link to="/shoes">
              <label class="label">Shoes</label>
              <img class="image" src="../../assets/shoes.png" />
            </router-link>
          </div> -->
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
  name: "Category",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.col {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image {
  height: 70px;
  width: 70px;
  cursor: pointer;
}
.label {
  color: black;
  cursor: pointer;
}
</style>
