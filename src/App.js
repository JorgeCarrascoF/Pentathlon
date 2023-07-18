import { useState } from "react";
import "./App.css";

import { NavBar } from "./components/NavBar";
import { RouteSwitch } from "./components/RouteSwitch";

const products = [
  {
    name: "Nike",
    subname: "Air Jordan 1 Low OG",
    img: (
      <img
        alt="Nikes"
        src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
      ></img>
    ),
    quantity: 1,
    price: 50,
  },
  {
    name: "Adidas",
    subname: "Rivalry Low",
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
    subname: "Ripley Space",
    img: (
      <img
        alt="shoes"
        src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
      ></img>
    ),
    quantity: 3,
    price: 30,
  },
  {
    name: "Vans",
    subname: "Floral Old Skool",
    img: (
      <img
        alt="shoes"
        src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
      ></img>
    ),
    quantity: 0,
    price: 70,
  },
  {
    name: "Puma",
    subname: "Teveris NITRO Noughties",
    img: (
      <img
        alt="shoes"
        src="https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ></img>
    ),
    quantity: 0,
    price: 50,
  },
  {
    name: "Converse",
    subname: "Chuck Taylor All Star Cruise",
    img: (
      <img
        alt="shoes"
        src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80"
      ></img>
    ),
    quantity: 0,
    price: 60,
  },
  {
    name: "Rebook",
    subname: "Royal Complete Clean 2.0",
    img: (
      <img
        alt="shoes"
        src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ></img>
    ),
    quantity: 0,
    price: 35,
  },
  {
    name: "Joma",
    subname: "R. Viper 23",
    img: (
      <img
        alt="shoes"
        src="https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
      ></img>
    ),
    quantity: 0,
    price: 30,
  },
  {
    name: "Fila",
    subname: "Disruptor EXP junior",
    img: (
      <img
        alt="shoes"
        src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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

  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="webContent">
        <RouteSwitch
          productArray={productArray}
          click={handleClick}
        ></RouteSwitch>
      </div>
    </div>
  );
}

export default App;
