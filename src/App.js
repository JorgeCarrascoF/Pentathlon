import { useState } from "react";
import "./App.css";

import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Product } from "./components/Product";

const products = [
  {
    name: "Nike",
    img: (
      <img
        alt="Nikes"
        src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
      ></img>
    ),
    quantity: 0,
    price: 50,
  },
  {
    name: "Adidas",
    img: (
      <img
        alt="shoes"
        src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1179&q=80"
      ></img>
    ),
    quantity: 0,
    price: 45,
  },
  {
    name: "Tenth",
    img: (
      <img
        alt="shoes"
        src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1179&q=80"
      ></img>
    ),
    quantity: 0,
    price: 30,
  },
  {
    name: "Vans",
    img: (
      <img
        alt="shoes"
        src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1179&q=80"
      ></img>
    ),
    quantity: 0,
    price: 70,
  },
  {
    name: "Puma",
    img: (
      <img
        alt="shoes"
        src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1179&q=80"
      ></img>
    ),
    quantity: 0,
    price: 50,
  },
  {
    name: "Converse",
    img: (
      <img
        alt="shoes"
        src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1179&q=80"
      ></img>
    ),
    quantity: 0,
    price: 60,
  },
  {
    name: "Rebook",
    img: (
      <img
        alt="shoes"
        src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1179&q=80"
      ></img>
    ),
    quantity: 0,
    price: 35,
  },
  {
    name: "Joma",
    img: (
      <img
        alt="shoes"
        src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1179&q=80"
      ></img>
    ),
    quantity: 0,
    price: 30,
  },
  {
    name: "Fila",
    img: (
      <img
        alt="shoes"
        src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1179&q=80"
      ></img>
    ),
    quantity: 0,
    price: 20,
  },
];

function App() {
  const [productArray, setProductArray] = useState([...products]);

  const handleClick = (e) => {
    const id = e.target.parentElement.parentElement.id;
    let pos = products.map((i) => i.name).indexOf(id);
    if (e.target.id === "add") {
      products[pos].quantity++;
    } else {
      if (products[pos].quantity > 0) {
        products[pos].quantity--;
      }
    }
    setProductArray([...products]);
  };

  const array = productArray.map((e) => {
    return (
      <Product
        title={e.name}
        quantity={e.quantity}
        img={e.img}
        click={handleClick}
      ></Product>
    );
  });

  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="webContent">
        <Home></Home>
      </div>
      {/* <div className='productDashboard'>
        {array}
      </div> */}
    </div>
  );
}

export default App;
