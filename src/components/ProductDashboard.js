import { Product } from "./Product"
import '../styles/ProductDashboard.css'

export const ProductDashboard = ({productArray, click}) => {


    const array = productArray.map((e) => {
        return (
          <Product
            title={e.name}
            subname= {e.subname}
            quantity={e.quantity}
            img={e.img}
            click={click}
          ></Product>
        );
      });

    return(
        <div className="ProductDashboard">
            {array}
        </div>
    )
}