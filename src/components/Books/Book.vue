<template>
  <div class="wrapper" data-app>
    <Header />
    <div class="content">
      <div class="container mb-5">
        <input
          type="text"
          placeholder="Search Here..."
          class="mt-3 search"
          v-model="search"
        />
        <div class="row">
          <div
            class="col-md-4 pointer"
            id="my-table"
            @click="bookDetails(items)"
            v-for="items in resultQuery"
            :key="items.id"
            :per-page="perPage"
            :current-page="currentPage"
            :books="resultQuery"
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
      search: null,
      perPage: 3,
      currentPage: 1,
    };
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
    rows() {
      return this.books.length;
    },
    resultQuery() {
      if (this.search) {
        return this.books.filter((book) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every(
              (v) =>
                book.name.toLowerCase().includes(v) ||
                book.author.toLowerCase().includes(v)
            );
        });
      } else {
        return this.books;
      }
    },
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
