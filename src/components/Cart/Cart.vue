<template>
  <div class="d-flex cart-outer-div">
    <Header />
    <div class="cart-body">
      <div v-if="totalPrice !== 0" class="container mb-5">
        <h4 class="my-4 my-cart">My Cart</h4>
        <div class="my-3 class-1">
          <h4 class="fw-600">Summary</h4>
          <h4 class="fw-600 class-2">Cart</h4>
        </div>
        <div class="d-flex">
          <Summary v-bind:totalPrice="totalPrice" />
          <div class="row">
            <div class="col-md-12 class-3">
              <ul class="class-6">
                <li v-for="items in cartItems" :key="items.id" class="class-4">
                  <div class="cart-items">
                    <img :src="items.imageURL" class="image" />
                    <h6 class="mt-15">{{ items.title }}</h6>
                    <div class="d-flex mt-10">
                      <button
                        @click="removeItem(items)"
                        class="remove"
                        type="button"
                      >
                        -
                      </button>
                      <span class="cart-quantity">{{ items.quantity }}</span>
                      <button @click="addItem(items)" class="add" type="button">
                        +
                      </button>
                    </div>
                    <h6 class="mt-15">{{ items.price }}</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="class-5">
          <div>
            <stripe-checkout
              ref="checkoutRef"
              mode="payment"
              :pk="publishableKey"
              :line-items="lineItems"
              :success-url="successURL"
              :cancel-url="cancelURL"
              @loading="(v) => (loading = v)"
            />
          </div>
          <button @click="checkout" type="button" class="btn btn-primary">
            Checkout
          </button>
        </div>
      </div>
      <EmptyCart v-else />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../Common/Header.vue";
import Footer from "../Common/Footer.vue";
import EmptyCart from "../Cart/EmptyCart.vue";
import Summary from "../Summary.vue";
import { StripeCheckout } from "@vue-stripe/vue-stripe";

export default {
  name: "Cart",
  components: {
    Header,
    Footer,
    EmptyCart,
    Summary,
    StripeCheckout,
  },
  data() {
    this.publishableKey =
      "pk_test_51J8J6pSIIkglpNEV5DvCWLA9xNSLN3WeYUzHZrVzbrRcjz7sVvP4wZ5nYZzIVpIBKR6EpUM4IZO4Vd3ux76Rt34800sRhUy8aI";
    return {
      loading: false,
      lineItems: [
        {
          price: "price_1L5k0ASIIkglpNEVMYZLsR7a",
          quantity: 1,
        },
      ],
      successURL: "http://localhost:8080/success",
      cancelURL: "http://localhost:8080/error",
    };
  },
  methods: {
    addItem(items) {
      this.$store.dispatch("addToCart", items);
    },
    removeItem(items) {
      this.$store.dispatch("removeItem", items);
    },
    checkout() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    totalPrice() {
      let price = 0;
      this.$store.state.cartItems.map((el) => {
        price += el["quantity"] * el["price"];
      });
      return price;
    },
  },
};
</script>

<style scoped>
.class-1 {
  justify-content: space-between;
  display: flex;
}
.class-2 {
  margin-right: 49%;
}
.class-3 {
  max-width: 70%;
}
.class-4 {
  list-style: none;
}
.class-5 {
  width: 80%;
  margin-top: 2%;
  display: flex;
  justify-content: end;
}
.class-6 {
  padding: 0;
}
.image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.row {
  width: 50%;
}
.cart-outer-div {
  flex-direction: column;
  height: 100vh;
}
.cart-body {
  background: #efe9e2;
  flex: 1;
  overflow-y: auto;
}
.cart-quantity {
  display: inline-block;
  padding: 3px 6px;
  width: 46px;
  height: 28px;
  border-radius: 2px;
  background-color: #fff;
  margin: 0 5px;
  text-align: center;
}
.cart-items {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: white;
}
.my-cart {
  color: orange;
  font-weight: 600;
}
.input[type="text"] {
  border: none;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  vertical-align: middle;
  text-align: center;
  outline: none;
}
.fw-600 {
  font-weight: 600;
}
.line {
  height: 1px;
  border-bottom: 1px solid black;
}
.w-120 {
  width: 120%;
}
.w-60 {
  width: 60%;
}
.add,
.remove {
  width: 28px;
  height: 28px;
  background: linear-gradient(#fff, #f9f9f9);
  border: 1px solid #c2c2c2;
  cursor: pointer;
  font-size: 16px;
  border-radius: 7px;
  padding-top: 1px;
  outline: none;
}
.mt-10 {
  margin-top: 10px;
}
.mt-15 {
  margin-top: 15px;
}
.orange-red {
  color: orangered;
}
.darkblue {
  color: darkblue;
}
</style>
