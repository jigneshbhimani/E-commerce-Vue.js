<template>
  <div class="success">
    <h1>Payment is successful</h1>
    <router-link to="/electronics">Buy Again</router-link>
  </div>
</template>

<script>
export default {
  name: "Success",
};
</script>

<style scoped>
.success {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #ff0000;
  margin-top: 15rem;
}
</style>
