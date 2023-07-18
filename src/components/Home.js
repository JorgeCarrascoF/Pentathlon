import "../styles/Home.css";

import arrowLeft from "../img/arrow-left.png";
import arrowRight from "../img/arrow-right.png";
import { useEffect, useState } from "react";

const sportImgs = [
  <img
    alt="bike"
    src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ></img>,
  <img
    alt="surf"
    src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ></img>,
  <img
    alt="basket"
    src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2090&q=80"
  ></img>,
  <img
    alt="running"
    src="https://images.unsplash.com/photo-1530143311094-34d807799e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  ></img>,
  <img
    alt="swimming"
    src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ></img>,
  <img
    alt="yoga"
    src="https://images.unsplash.com/photo-1484452330304-377cdeb05340?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  ></img>,
  <img
    alt="tennis"
    src="https://images.unsplash.com/flagged/photo-1576972405668-2d020a01cbfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
  ></img>,
];
const LENGTH = Object.keys(sportImgs).length;

// same number of bullets as LENGTH
const bullets = [
  <div className="circle"></div>,
  <div className="circle"></div>,
  <div className="circle"></div>,
  <div className="circle"></div>,
  <div className="circle"></div>,
  <div className="circle"></div>,
  <div className="circle"></div>,
];

export const Home = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [bulletArray, setBulletArray] = useState(bullets);

  const handleClick = (e) => {
    let newIndex;
    if (e.target.id === "left") {
      imgIndex === 0 ? newIndex = LENGTH : newIndex = (imgIndex - 1) % LENGTH;
    } else {
      newIndex = (imgIndex + 1) % LENGTH;
    }
    setImgIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (imgIndex + 1) % LENGTH;
      setImgIndex(newIndex);
    }, 10000);
    return () => clearInterval(interval);
  }, [imgIndex]);

  useEffect(()=>{
    let newBullets = [...bullets];
    newBullets[Math.abs(imgIndex)] = <div className="circle selected"></div>
    setBulletArray(newBullets);
  }, [imgIndex])

  return (
    <div className="Home">
      <div className="gallery">
        <button onClick={handleClick} id="left">
          <img src={arrowLeft} alt="arrowLeft"></img>
        </button>
        {sportImgs[Math.abs(imgIndex)]}
        <button onClick={handleClick} id="right">
          <img src={arrowRight} alt="arrowRight"></img>
        </button>
      </div>
      <div className="bullets">{bulletArray}</div>
    </div>
  );
};
