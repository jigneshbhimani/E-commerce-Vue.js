<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="default">
          <form @submit.prevent="signup" class="form">
            <h2 class="heading">Sign Up</h2>
            <div class="form-group">
              <input
                type="text"
                placeholder="First Name"
                class="form-control"
                v-model="firstname"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                placeholder="Last Name"
                class="form-control"
                v-model="lastname"
                required
              />
            </div>
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
              <button type="submit" class="btn btn-success">Register</button>
            </div>
            <h6 class="text-center">
              Already registered?
              <button class="btn-link" @click="login">Login</button>
            </h6>
          </form>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
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
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    signup() {
      let user = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      };
      localStorage.setItem("user", JSON.stringify(user));
      alert("Signup Successfully");
      this.$router.push("/login");
    },
    login() {
      this.$router.push("/login");
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
  margin-top: 1rem;
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
