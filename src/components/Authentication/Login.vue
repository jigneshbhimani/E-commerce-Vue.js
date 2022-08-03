<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="default">
          <form @submit.prevent="login" class="form">
            <h2 class="heading">Login</h2>
            <div class="form-group">
              <input
                type="email"
                placeholder="Email"
                class="form-control"
                v-model="email"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                placeholder="Password"
                class="form-control"
                v-model="password"
                required
              />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-success">Login</button>
            </div>
            <h6 class="text-center">
              Don't have an account?
              <button class="btn-link" @click="signup">Sign Up</button>
            </h6>
          </form>
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
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    login() {
      var data = JSON.parse(localStorage.getItem("user"));
      if (data.email == this.email && data.password == this.password) {
        alert("Login Successfully");
        this.$router.push("/category");
      } else {
        alert("Invalid Credentials");
      }
    },
    signup() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style>
.heading {
  text-align: center;
  font-weight: 700;
  padding: 30px;
  color: black;
}
.form {
  padding: 30px;
  background: rgb(204, 140, 140);
  margin-top: 3rem;
}
.default {
  display: flex;
  justify-content: center;
}
.form-group {
  padding: 15px;
}
.form-control {
  border-radius: 10px;
}
.text-center {
  padding: 15px;
}
</style>
