import { Component } from 'react'
import Header from '../Header'
import './index.css'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem'
import CartContext from '../../CartContext'
class Products extends Component {

    state = {
        itemsList: []
    }

    renderResults = () => {
        return (
            <CartContext.Consumer>
                {value => {
                    const { cartList, removeAll } = value
                    let amount = 0
                    for (let obj of cartList) {
                        amount += obj.quantity * obj.price
                    }
                    const handleOnClick = () => {
                        removeAll()
                    }



                    return (
                        <>
                            <div className='cart-header'>
                                <h1>My Cart</h1>
                                <button onClick={handleOnClick} className='remove-btn'>
                                    <p >Remove All</p>
                                </button>
                            </div>
                            {cartList.length === 0 ? <div className='content'>
                                <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png' className='cart-img' />
                            </div> : <ul className='cart-items-container'>
                                {cartList.map(eachCartItem => <CartItem cartItem={eachCartItem} key={eachCartItem.id} />)}
                                <div className="order-container">
                                    <div className="order-text">

                                        <h1 className='order'>Order Total:</h1>
                                        <h1>Rs  {amount}/-</h1>
                                    </div>
                                    <p>{cartList.length} Items in cart</p>
                                    <button className='checkout'>Checkout</button>
                                </div>
                            </ul>}

                        </>

                    )
                }}

            </CartContext.Consumer>
        )

    }

    render() {


        return (
            <div className='background'>
                <h1 className='products-heading'>CART</h1>
                <Header />
                <div className='links-container'>
                    <Link to='/'>
                        <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png' />
                    </Link>
                    <Link to='/products'>
                        <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png' />
                    </Link>
                    <Link to='/cart'>
                        <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png' />
                    </Link>
                </div>


                {this.renderResults()}



            </div>
        )
    }

}
export default Products







