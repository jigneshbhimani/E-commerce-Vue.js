<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <div class="container mb-5">
        <br />
        <br />
        <div class="row">
          <div
            @click="clothDetails(items)"
            v-for="items in clothes"
            :key="items.id"
            class="col-md-4 pointer"
          >
            <img
              :src="items.imageURL"
              width="300px"
              height="300px"
              style="border-radius: 150px"
            />
            <br />
            <br />
            <h5 class="fw-600 black">
              {{ items.name }} - Rs.{{ items.price }}
            </h5>
            <hr />
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/common/Header.vue";

export default {
  name: "Cloth",
  components: {
    Header,
  },
  computed: {
    clothes() {
      return this.$store.state.clothes;
    },
  },
  methods: {
    clothDetails(items) {
      this.$router.push({
        name: "cloth-details",
        params: items,
      });
    },
  },
};
</script>

<style scoped>
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
}
.d-blue {
  color: dodgerblue;
}
.black {
  color: black;
}
.pointer {
  cursor: pointer;
}
</style>
