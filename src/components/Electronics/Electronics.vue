<template>
  <div>
    <div class="wrapper" data-app>
      <Header />
      <div class="content">
        <div class="container mb-5">
          <input
            type="text"
            placeholder="Search Electronics..."
            class="mt-3 search"
            v-model="search"
          />
          <div class="row">
            <div
              class="col-md-4 pointer"
              id="my-list"
              @click="productDetails(items)"
              v-for="items in resultQuery"
              :key="items.id"
            >
              <img :src="items.imageURL" class="image" />
              <h5 class="fw-600">
                {{ items.title }}
              </h5>
            </div>
          </div>
          <div class="pagination">
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-list"
            ></b-pagination>
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
  name: "Home",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      search: null,
      perPage: 3,
      currentPage: 1,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    rows() {
      return this.products.length;
    },
    resultQuery() {
      if (this.search) {
        return this.products.filter((electronic) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every(
              (v) =>
                electronic.title.toLowerCase().includes(v) ||
                electronic.company.toLowerCase().includes(v) ||
                electronic.color.toLowerCase().includes(v) ||
                electronic.size.toLowerCase().includes(v)
            );
        });
      } else {
        return this.products;
      }
    },
  },
  methods: {
    productDetails(items) {
      this.$router.push({
        name: "electronic-details",
        params: items,
      });
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.search {
  padding: 5px;
  margin: 30px;
  border: 3px solid gainsboro;
  border-radius: 20px;
}
.image {
  width: 300px;
  height: 300px;
  border-radius: 150px;
  padding: 10px;
  background: gainsboro;
}
.row {
  text-align: center;
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  background: #efe9e2;
  flex: 1;
  overflow-y: auto;
}
.fw-600 {
  font-weight: 600;
  padding: 20px;
  color: teal;
}
.pointer {
  cursor: pointer;
  min-width: max-content;
  max-width: 33.33%;
  width: 100%;
}
</style>
