import { Component } from 'react'
import AllProductsSection from '../AllProductsSection'
import PrimeDealsSection from '../PrimeDealsSection'
import Header from '../Header'
import './index.css'
import { Link } from 'react-router-dom'
const apistatusConstants={
    initial:'INITIAL',
    inProgress:'PROGRESS',
    success:'SUCCESS',
    failure:'FAILURE'
}

class Products extends Component {

state={
    apistatus:apistatusConstants.initial
}

    render() {
        return (
            <div className='background'>
                <h1 className='products-heading'>PRODUCTS</h1>
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
                   <PrimeDealsSection/>
                   <AllProductsSection/>
               
            </div>
        )
    }

}
export default Products







