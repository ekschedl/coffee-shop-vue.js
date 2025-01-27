import { v4 as uuidv4 } from "uuid";

const cards = {
  state: {
    goods: [
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        price: "10.73",
        image: "coffee-1.jpg",
      },
      {
        id: uuidv4(),
        name: "Presto Coffee Beans 1kg",
        price: "15.99",
        image: "coffee-2.jpg",
      },
      {
        id: uuidv4(),
        name: "AROMISTICO Coffee 1kg",
        price: "6.99",
        image: "coffee-3.jpg",
      },
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        price: "10.73",
        image: "coffee-1.jpg",
      },
      {
        id: uuidv4(),
        name: "Presto Coffee Beans 1kg",
        price: "15.99",
        image: "coffee-2.jpg",
      },
      {
        id: uuidv4(),
        name: "AROMISTICO Coffee 1kg",
        price: "6.99",
        image: "coffee-3.jpg",
      },
    ],
    bestsellers: [
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        price: "10.73",
        image: "coffee-1.jpg",
      },
      {
        id: uuidv4(),
        name: "Presto Coffee Beans 1kg",
        price: "15.99",
        image: "coffee-2.jpg",
      },
      {
        id: uuidv4(),
        name: "AROMISTICO Coffee 1kg",
        price: "6.99",
        image: "coffee-3.jpg",
      },
    ],
    coffee: [
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        price: "10.73",
        image: "coffee-1.jpg",
      },
      {
        id: uuidv4(),
        name: "Presto Coffee Beans 1kg",
        price: "15.99",
        image: "coffee-2.jpg",
      },
      {
        id: uuidv4(),
        name: "AROMISTICO Coffee 1kg",
        price: "6.99",
        image: "coffee-3.jpg",
      },
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        price: "10.73",
        image: "coffee-1.jpg",
      },
      {
        id: uuidv4(),
        name: "Presto Coffee Beans 1kg",
        price: "15.99",
        image: "coffee-2.jpg",
      },
      {
        id: uuidv4(),
        name: "AROMISTICO Coffee 1kg",
        price: "6.99",
        image: "coffee-3.jpg",
      },
    ],
  },
  getters: {
    getGoodsCard(state) {
      return {
        goods: state.goods,
      };
    },
    getBestsellersCard(state) {
      return {
        bestsellers: state.bestsellers,
      };
    },
    getCoffeeCard(state) {
      return {
        coffee: state.coffee,
      };
    },
    getProductById: (state) => (id) => {
      return (
        state.goods.find((card) => card.id === id) ||
        state.bestsellers.find((card) => card.id === id) ||
        state.coffee.find((card) => card.id === id)
      );
    },
  },
};

export default cards;
