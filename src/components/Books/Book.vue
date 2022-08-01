<template>
  <div class="wrapper" data-app>
    <Header />
    <div class="content">
      <div class="container mb-5">
        <!-- <input
          type="text"
          placeholder="Search Here..."
          class="mt-3 search"
          v-model="search"
        /> -->
        <div class="row">
          <div
            @click="bookDetails(items)"
            v-for="items in books"
            :key="items.id"
            class="col-md-4 pointer"
          >
            <img :src="items.imageURL" class="image" />
            <h5 class="fw-600">
              {{ items.name }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Common/Header.vue";

export default {
  name: "Book",
  components: {
    Header,
  },
  data() {
    return {
      // search: null,
    };
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
    // resultSearch() {
    //   if (this.search) {
    //     return this.$store.state.books.filter((item) => {
    //       return this.search
    //         .toLowerCase()
    //         .split(" ")
    //         .every(
    //           (v) =>
    //             item.id.toString().includes(v) ||
    //             item.name.toLowerCase().includes(v) ||
    //             item.author.toLowerCase().includes(v) ||
    //             item.published.toLowerCase().includes(v)
    //         );
    //     });
    //   } else {
    //     return this.$store.state.books;
    //   }
    // },
  },
  methods: {
    bookDetails(items) {
      this.$router.push({
        name: "book-details",
        params: items,
      });
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}
/* .search {
  padding: 5px;
  margin: 15px;
} */
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
}
</style>
