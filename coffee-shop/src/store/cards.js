// cards.js

import { v4 as uuidv4 } from "uuid";

const cards = {
  state: {
    goods: [
      // {
      //   id: uuidv4(),
      //   name: "Solimo Coffee Beans 2kg",
      //   price: "10.73",
      //   image: "coffee-1.jpg",
      // },
      // {
      //   id: uuidv4(),
      //   name: "Presto Coffee Beans 1kg",
      //   price: "15.99",
      //   image: "coffee-2.jpg",
      // },
      // {
      //   id: uuidv4(),
      //   name: "AROMISTICO Coffee 1kg",
      //   price: "6.99",
      //   image: "coffee-3.jpg",
      // },
      // {
      //   id: uuidv4(),
      //   name: "Solimo Coffee Beans 2kg",
      //   price: "10.73",
      //   image: "coffee-1.jpg",
      // },
      // {
      //   id: uuidv4(),
      //   name: "Presto Coffee Beans 1kg",
      //   price: "15.99",
      //   image: "coffee-2.jpg",
      // },
      // {
      //   id: uuidv4(),
      //   name: "AROMISTICO Coffee 1kg",
      //   price: "6.99",
      //   image: "coffee-3.jpg",
      // },
    ],
    bestsellers: [
      // {
      //   id: uuidv4(),
      //   name: "Solimo Coffee Beans 2kg",
      //   price: "10.73",
      //   image: "coffee-1.jpg",
      // },
      // {
      //   id: uuidv4(),
      //   name: "Presto Coffee Beans 1kg",
      //   price: "15.99",
      //   image: "coffee-2.jpg",
      // },
      // {
      //   id: uuidv4(),
      //   name: "AROMISTICO Coffee 1kg",
      //   price: "6.99",
      //   image: "coffee-3.jpg",
      // },
    ],
    coffee: [
      // {
      //   id: uuidv4(),
      //   name: "Solimo Coffee Beans 2kg",
      //   price: "10.73",
      //   image: "coffee-1.jpg",
      // },
      // {
      //   id: uuidv4(),
      //   name: "Presto Coffee Beans 1kg",
      //   price: "15.99",
      //   image: "coffee-2.jpg",
      // },
      // {
      //   id: uuidv4(),
      //   name: "AROMISTICO Coffee 1kg",
      //   price: "6.99",
      //   image: "coffee-3.jpg",
      // },
      // {
      //   id: uuidv4(),
      //   name: "Solimo Coffee Beans 2kg",
      //   price: "10.73",
      //   image: "coffee-1.jpg",
      // },
      // {
      //   id: uuidv4(),
      //   name: "Presto Coffee Beans 1kg",
      //   price: "15.99",
      //   image: "coffee-2.jpg",
      // },
      // {
      //   id: uuidv4(),
      //   name: "AROMISTICO Coffee 1kg",
      //   price: "6.99",
      //   image: "coffee-3.jpg",
      // },
    ],
    searchValue: "",
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data;
    },
    setBestellersData(state, data) {
      state.bestsellers = data;
    },
    setGoodsData(state, data) {
      state.goods = data;
    },
    setSearchValue(state, value) {
      state.searchValue = value;
    },
  },
  actions: {
    setCoffeeData({ commit }, data) {
      commit("setCoffeeData", data);
    },
    setBestellersData({ commit }, data) {
      commit("setBestellersData", data);
    },
    setGoodsData({ commit }, data) {
      commit("setGoodsData", data);
    },
    setSearchValue({ commit }, value) {
      commit("setSearchValue", value);
    },
  },
  getters: {
    getGoodsCard(state) {
      return {
        goods: state.goods.filter((item) =>
          item.name.toLowerCase().includes(state.searchValue.toLowerCase())
        ),
      };
    },
    getBestsellersCard(state) {
      return {
        bestsellers: state.bestsellers.filter((item) =>
          item.name.toLowerCase().includes(state.searchValue.toLowerCase())
        ),
      };
    },
    getCoffeeCard(state) {
      return {
        coffee: state.coffee.filter((item) =>
          item.name.toLowerCase().includes(state.searchValue.toLowerCase())
        ),
      };
    },
    getProductById: (state) => (id) => {
      return (
        state.goods.find((card) => card.id === id) ||
        state.bestsellers.find((card) => card.id === id) ||
        state.coffee.find((card) => card.id === id)
      );
    },
    getSearchValue(state) {
      return state.searchValue;
    },
  },
};

export default cards;
