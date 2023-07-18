import '../styles/Product.css'
import add from '../img/add.png'
import substract from '../img/substract.png'

export const Product = ({title, subname, quantity, img, click}) => {

    return(
        <div className='Product' id={title}>
            <h3>{subname}</h3>
            <span>{title}</span>
            {img}
            <div className="quantity">
                <img src={substract} onClick={click} alt='substract' id='substract'></img>
                <span>{quantity}</span>
                <img src={add} alt='add' id='add' onClick={click}></img>
            </div>
        </div>
    )


}