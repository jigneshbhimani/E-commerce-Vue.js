import Vue from "vue";
import Vuex from "vuex";
import mobile from "../assets/mobile.jpg";
import ac from "../assets/ac.jpg";
import buds from "../assets/buds.jpg";
import charger from "../assets/charger.jpg";
import fan from "../assets/fan.jpg";
import fridge from "../assets/fridge.jpg";
import laptop from "../assets/laptop.jpg";
import mixer from "../assets/mixer.jpg";
import oven from "../assets/oven.jpg";
import sm from "../assets/sm.jpg";
import tag from "../assets/tag.jpg";
import tv from "../assets/tv.jpg";
import ucb from "../assets/ucb.jpg";
import watch from "../assets/watch.jpg";
import wm from "../assets/wm.jpg";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: "Mobile",
        price: "55999",
        company: "Apple",
        description: "Apple iPhone 13",
        color: "Starlight",
        size: "512GB",
        imageURL: mobile,
      },
      {
        id: 2,
        title: "TV",
        price: "30999",
        company: "Sony",
        description:
          "Sony Bravia 4K Ultra HD Smart LED Google TV KD-55X80AJ (Black) (2021 Model) | with Alexa Compatibility",
        color: "Black",
        size: "139 cm (55 inches)",
        imageURL: tv,
      },
      {
        id: 3,
        title: "Washing Machine",
        price: "13999",
        company: "LG",
        description:
          "LG Inverter Touch Control Fully-Automatic Front Load Washing Machine with Heater (FHM1207SDL, Silver, 6 Motion Direct Drive)",
        color: "Gray",
        size: "7 kg",
        imageURL: wm,
      },
      {
        id: 4,
        title: "Refrigerator",
        price: "18999",
        company: "Samsung",
        description:
          "Samsung 4 Star Inverter Direct Cool Single Door Refrigerator(RR23A2F3X9U/HL, Paradise Blue, Base Stand with Drawer, Digi-Touch Cool)",
        color: "Gray-White",
        size: "225 L",
        imageURL: fridge,
      },
      {
        id: 5,
        title: "Laptop",
        price: "45999",
        company: "Dell",
        description:
          "Intel PQC-N5030, Win11 + Office'21, 8GB GDDR4, 256GB SSD HD AG (D560756WIN9BE, 1.61Kgs)",
        color: "Black",
        size: "15.6 (39.62Cms)",
        imageURL: laptop,
      },
      {
        id: 6,
        title: "Fan",
        price: "2499",
        company: "Luminous",
        description: "Luminous Dhoom 70-Watt High Speed Ceiling Fan (Brown)",
        color: "Light-Brown",
        size: "1200mm",
        imageURL: fan,
      },
      {
        id: 7,
        title: "AC",
        price: "30999",
        company: "Mitsubishi",
        description:
          "Mitsubishi Heavy Industries 3 Star Non Inverter Split AC (SRK20CSS-S6, White)",
        color: "White",
        size: "1.6 Ton",
        imageURL: ac,
      },
      {
        id: 8,
        title: "Microwave Oven",
        price: "4799",
        company: "Bajaj",
        description: "Bajaj MTBX 2016 20L Grill Microwave Oven, Black",
        color: "Black",
        size: "5 kg",
        imageURL: oven,
      },
      {
        id: 9,
        title: "Mixer Grinder",
        price: "3296",
        company: "Prestige",
        description: "Prestige IRIS Plus 750 watt mixer grinder",
        color: "White",
        size: "3 liter",
        imageURL: mixer,
      },
      {
        id: 10,
        title: "Sandwich Maker",
        price: "1675",
        company: "Havells",
        description: "Havells Sandwich Maker (2372) 700-Watt (White)",
        color: "Gray-White",
        size: "2 kg",
        imageURL: sm,
      },
      {
        id: 11,
        title: "Earbuds",
        price: "5999",
        company: "Skullcandy",
        description:
          "Skullcandy Indy Evo Truly Wireless Bluetooth in Ear Earbuds with Mic",
        color: "Blue",
        size: "100 gm",
        imageURL: buds,
      },
      {
        id: 12,
        title: "Charger",
        price: "1899",
        company: "Apple",
        description: "Apple USB-C Power Adapter (for iPhone, iPad & AirPods)",
        color: "White",
        size: "20W",
        imageURL: charger,
      },
      {
        id: 13,
        title: "AirTag",
        price: "3190",
        company: "Apple",
        description: "Apple AirTag",
        color: "White",
        size: "1.41 Ounces",
        imageURL: tag,
      },
      {
        id: 14,
        title: "USB C Connector Splitter",
        price: "199",
        company: "Samsung",
        description:
          "Type-C to 3.5 MM for Samsung Galaxy S Light Luxury Type-C to 3.5 MM Audio Jack Adapter Converter for CDLA Type",
        color: "White",
        size: "3.5 mm",
        imageURL: ucb,
      },
      {
        id: 15,
        title: "Apple Watch",
        price: "44900",
        company: "Apple",
        description: "Apple Watch Series 6",
        color: "Blue",
        size: "25 mm",
        imageURL: watch,
      },
    ],
    cartItemCount: 0,
    cartItems: [],
  },
  getters: {},
  mutations: {
    addToCart(state, payload) {
      let item = payload;
      item = { ...item, quantity: 1 };
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id === item.id);
        if (bool) {
          let itemIndex = state.cartItems.findIndex((el) => el.id === item.id);
          state.cartItems[itemIndex]["quantity"] += 1;
        } else {
          state.cartItems.push(item);
        }
      } else {
        state.cartItems.push(item);
      }
      state.cartItemCount++;
    },
    removeItem(state, payload) {
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id === payload.id);
        if (bool) {
          let index = state.cartItems.findIndex((el) => el.id === payload.id);
          if (state.cartItems[index]["qunatity"] !== 0) {
            state.cartItems[index]["quantity"] -= 1;
            state.cartItemCount--;
          }
          if (state.cartItems[index]["quantity"] === 0) {
            state.cartItems.splice(index, 1);
          }
        }
      }
    },
  },
  actions: {
    addToCart: (context, payload) => {
      context.commit("addToCart", payload);
    },
    removeItem: (context, payload) => {
      context.commit("removeItem", payload);
    },
  },
  modules: {},
});
