import '../styles/Cart.css'
import add from '../img/add.png'
import substract from '../img/substract.png'

export const Cart = ({productArray, click}) => {

    const products = productArray.map(e => {
        if(e.quantity > 0){
            return(
                <div className="cartProduct">
                    <div className='photo'>{e.img}</div>
                    <div className='name'><span>{e.name}</span></div>
                    <div className='subname'><span>{e.subname}</span></div>
                    <div className='price'><span>Price: {e.price}€</span></div>
                    <div className='quantity'>
                        <img src={substract} onClick={click} alt='substract' id='substract'></img>
                        <span>Quantity: {e.quantity}</span></div>
                        <img src={add} alt='add' id='add' onClick={click}></img>
                    </div>
            )
        }
    })

    return(
        <div className="CartDashboard">
            <div className="products">{products}</div>
            <div className='cart'></div>
        </div>
    )
}