<template>
  <div class="cancel">
    <h1>Payment Failed!</h1>
    <router-link to="/category">Buy Again</router-link>
  </div>
</template>

<script>
export default {
  name: "Cancel",
};
</script>

<style>
.cancel {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #ff0000;
  margin-top: 15rem;
}
</style>
