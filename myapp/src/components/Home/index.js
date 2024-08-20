import { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import './index.css'
class Home extends Component {


    render() {
        return (
            <div className='background'>
                <h1 className='home-heading'>HOME</h1>
                <Header />
                <div className='content'>
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
                    <div className="text-content">

                        <h1>Clothes That Get You Noticed</h1>
                        <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png' className='content-sm-img' />
                        <p>Fashion is a part of the daily air and it does not quite help and that it changes all over the time.Clothes have always been a marker of the era and we are in a revloution.Your fashion makes you have been seen and heard that way you are.</p>
                   <Link to='/products'>
                   
                        <button className='shopnow'>Shop Now</button>
                   </Link>
                   
                    </div>
                    <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png' className='content-md-img' />
                </div>
            </div>
        )
    }

}
export default Home







