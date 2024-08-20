import { Component } from 'react'
import './index.css'
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci"
import CartContext from '../../CartContext';
class CartItem extends Component {

    render() {
        const { cartItem } = this.props
        const { image_url, title, brand, quantity, price,
            id
        } = cartItem

        return (
            <CartContext.Consumer>
                {value => {
                    const { removeItem,increaseCartItemQuantity,decreaseCartItemQuantity,removeAll } = value
                    const handleOnRemove = () => {
                        removeItem(id)
                    }
                    const decreaseCartItem = () => {
                        decreaseCartItemQuantity(id)
                    }
                    const increaseCartItem = () => {
                        increaseCartItemQuantity(id)

                    }
                   
                    
                    return (

                        <li className='cart-item'>
                            <div className="cart-align">
                                <img src={image_url} className='cart-image' />
                                <div className="cart-align2-md">
                                    <p className='title cart-title'>{title}</p>
                                    <p className='brand cart-brand'>by {brand}</p>
                                </div>
                            </div>
                            <div className='align3'>
                                <div className="cart-align2-sm">
                                    <p className='title cart-title'>{title}</p>
                                    <p className='brand cart-brand'>by {brand}</p>
                                </div>
                                <div className="increment-or-decrement">
                                    <CiSquareMinus className="icon" onClick={decreaseCartItem} />
                                    <p className="quantity">{quantity}</p>
                                    <CiSquarePlus className="icon" onClick={increaseCartItem} />
                                </div>
                                <h1 className='cart-item-price'>Rs {price * quantity}/-</h1>
                                <CiCircleRemove className='remove-md' onClick={handleOnRemove} />
                            </div>
                            <CiCircleRemove className='remove-sm' onClick={handleOnRemove} />
                        </li>
                    )
                }}
            </CartContext.Consumer>
        )
    }

}

export default CartItem

