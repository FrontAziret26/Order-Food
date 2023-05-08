import { v4 } from "uuid";

export const backdropElement= document.getElementById('backdrop')
export const modalElement= document.getElementById('modal')



export const product = [
  {
    title: "Sushi ",
    description: "Finest fish and veggies",
    price: 22.99,
    id: v4(),
  },
  {
    title: "Pizza ",
    description: "A german specialty!",
    price: 16.00,
    id:v4()
  },
  {
    title: "Barbecue ",
    description: "American, raw, meaty",
    price: 12.99,
    id: v4(),
  },
  {
    title: "Green Bowl ",
    description: "Healthy...and green...",
    price: 19.99,
    id: v4(),
  },
];



export const DUMMY_ITEMS = [
  {
    id: 1,
    title: "Sushi",
    amount: 1,
    price: 22.99,
  },
  // {
  //   id: 2,
  //   title: "Pizza",
  //   amount: 6,
  //   price: 16.0,
  // },
  // {
  //   id: 3,
  //   title: "Barbecue",
  //   amount: 4,
  //   price: 12.99,
  // },
  // {
  //   id: 4,
  //   title: "Green Bowl",
  //   amount: 13,
  //   price: 19.99,
  // },
];