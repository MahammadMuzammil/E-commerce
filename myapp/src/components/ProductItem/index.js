import './index.css'
import {Link} from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
const ProductItem = (props) => {
    const { product } = props

    const { image_url, title, brand, price, rating,id } = product
    return (
        <Link to = {`/productItemDetails/${id}`} className='link-item'>
        <li className='product-item'>
            <img src={image_url} className="product-img" />
            <p className='title'>{title}</p>
            <p className='brand'>by {brand}</p>
            <div className='price-rating'>
                <p className='price'>Rs {price}/-</p>
                <div className='rating'>
                    <p>{rating}</p>
                    <FaStar />
                </div>
            </div>
        </li>
        </Link>
    )

}
export default ProductItem