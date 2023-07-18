import { useEffect, useState } from "react";
import "./App.css";

import { NavBar } from "./components/NavBar";
import { RouteSwitch } from "./components/RouteSwitch";

const products = [
  {
    name: "Nike",
    subname: "Air Jordan 1 Low OG",
    img: (
      <div className="img" style={{backgroundImage: `url(https://images.pexels.com/photos/10963373/pexels-photo-10963373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}></div>
    ),
    quantity: 0,
    price: 50,
  },
  {
    name: "Adidas",
    subname: "Rivalry Low",
    img: (
      <div className="img" style={{backgroundImage: `url(https://images.pexels.com/photos/12010216/pexels-photo-12010216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}></div>
    ),
    quantity: 0,
    price: 45,
  },
  {
    name: "Tenth",
    subname: "Ripley Space",
    img: (
      <div className="img" style={{backgroundImage: `url(https://images.pexels.com/photos/2404959/pexels-photo-2404959.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}></div>
    ),
    quantity: 0,
    price: 30,
  },
  {
    name: "Vans",
    subname: "Floral Old Skool",
    img: (
      <div className="img" style={{backgroundImage: `url(https://images.pexels.com/photos/5517156/pexels-photo-5517156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}></div>

    ),
    quantity: 0,
    price: 70,
  },
  {
    name: "Puma",
    subname: "Teveris NITRO Noughties",
    img: (
      <div className="img" style={{backgroundImage: `url(https://images.pexels.com/photos/6744427/pexels-photo-6744427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}></div>

    ),
    quantity: 0,
    price: 50,
  },
  {
    name: "Converse",
    subname: "Chuck Taylor All Star",
    img: (
      <div className="img" style={{backgroundImage: `url(https://images.pexels.com/photos/8603470/pexels-photo-8603470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}></div>

    ),
    quantity: 0,
    price: 60,
  },
  {
    name: "Rebook",
    subname: "Royal Complete Clean 2.0",
    img: (
      <div className="img" style={{backgroundImage: `url(https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80)`}}></div>

    ),
    quantity: 0,
    price: 35,
  },
  {
    name: "Joma",
    subname: "R. Viper 23",
    img: (
      <div className="img" style={{backgroundImage: `url(https://images.pexels.com/photos/4296075/pexels-photo-4296075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}></div>

    ),
    quantity: 0,
    price: 30,
  },
  {
    name: "Fila",
    subname: "Disruptor EXP junior",
    img: (
      <div className="img" style={{backgroundImage: `url(https://images.pexels.com/photos/1461048/pexels-photo-1461048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}></div>
    ),
    quantity: 0,
    price: 20,
  }
];

function App() {
  const [productArray, setProductArray] = useState([...products]);
  const [totalPurchase, setTotalPurchase] = useState(0);

  useEffect(()=>{
    let newTotal = 0;
    productArray.map(e => {
      newTotal += e.quantity;
    })
    setTotalPurchase(newTotal);
  }, [productArray])


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
      <NavBar total={totalPurchase}></NavBar>
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
