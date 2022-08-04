<template>
  <div>
    <div class="wrapper" data-app>
      <Header />
      <div class="content">
        <div class="container mb-5">
          <div class="row">
            <div class="col">
              <img src="../../assets/back.png" class="back" @click="back" />
            </div>
            <div class="col">
              <input
                type="text"
                placeholder="Search Shoes..."
                class="mt-3 search"
                v-model="search"
              />
            </div>
          </div>
          <div class="row">
            <div
              class="col-md-4 pointer"
              id="my-list"
              @click="shoesDetails(items)"
              v-for="items in resultQuery"
              :key="items.id"
            >
              <img :src="items.imageURL" class="image" />
              <h5 class="fw-600">
                {{ items.name }}
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
  name: "Shoes",
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
    shoes() {
      return this.$store.state.shoes;
    },
    rows() {
      return this.shoes.length;
    },
    resultQuery() {
      if (this.search) {
        return this.shoes.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every(
              (v) =>
                item.title.toLowerCase().includes(v) ||
                item.brand.toLowerCase().includes(v) ||
                item.color.toLowerCase().includes(v)
            );
        });
      } else {
        return this.shoes;
      }
    },
  },
  methods: {
    shoesDetails(items) {
      this.$router.push({
        name: "shoes-details",
        params: items,
      });
    },
    back() {
      this.$router.push("/category");
    },
  },
};
</script>

<style>
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
.back {
  padding: 10px;
  height: 50px;
  width: 50px;
  margin-left: -35rem;
  margin-top: 10px;
  background: gray;
  border-radius: 30px;
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
