import "../styles/Cart.css";
import add from "../img/add.png";
import substract from "../img/substract.png";
import shopping from '../img/shopping.png'

import { useEffect, useState } from "react";

export const Cart = ({ productArray, click }) => {
    const [toPay, setToPay] = useState(0);
    const [totalQuantity, setQuantity] = useState(0);

    useEffect(()=>{
        let newQuantity = 0;
        productArray.map(e => {
            newQuantity += e.quantity;
        })
        setQuantity(newQuantity);
    }, [productArray])

    useEffect(()=>{
        let newToPay = 0;
        productArray.map(e => {
            newToPay += (e.price * e.quantity);
        })
        setToPay(newToPay);
    }, [productArray])

  const products = productArray.map((e) => {
    if (e.quantity > 0) {
      return (
        <div className="cartProduct" id={e.name}>
          <div className="photo">{e.img}</div>
          <div className="name">
            <span>{e.name}</span>
          </div>
          <div className="subname">
            <span>{e.subname}</span>
          </div>
          <div className="price">
            <span>Price: {e.price}€</span>
          </div>
          <div className="quantity">
            <img
              src={substract}
              onClick={click}
              alt="substract"
              id="substract"
            ></img>
            <span>Quantity: {e.quantity}</span>
            <img src={add} alt="add" id="add" onClick={click}></img>
          </div>
        </div>
      );
    }
  });

  let bill = <div className="bill">
                <span>Without fees (only suppliers): {toPay}€ </span>
                <span>Without shipping: {toPay * 1.2}€ </span>
                <span>Shipping included: {totalQuantity > 4 ? 'Shipping is free!' : `${(toPay*1.2)+10}€` } </span>
                <button>Checkout</button>
            </div>
  let emptyCart = <div className="emptyCart">
                    <span>Your cart is empty. Add something to the cart.</span>
                  </div>
  

  return (
    <div className="CartDashboard">
      <div className="products">{products}</div>
      <div className="cart">
        <img src={shopping} alt="shopping"></img>
        <span>Total buy</span>
        <div className="totalPay">
            {totalQuantity > 0 ? bill : emptyCart}
        </div>
      </div>
    </div>
  );
};
