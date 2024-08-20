import { Component } from "react";
import { Vortex } from "react-loader-spinner";
import './index.css'
import Header from '../Header'
import { FaStar } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { Link,withRouter } from "react-router-dom";
import CartContext from "../../CartContext";
import ProductItem from "../ProductItem";
const apistatusConstants = {
    initial: 'INITIAL',
    in_progress: 'IN_PROGRESS',
    success: 'SUCCESS'
}

class ProductItemDetails extends Component {
    state = {
        apiStatus: apistatusConstants.initial,
        productDetails: {},
        quantity: 1
    }


    getProductDetails = async () => {
        this.setState({ apiStatus: apistatusConstants.in_progress })
        const { match } = this.props
        const { params } = match
        const { id } = params
        console.log(id)
        const options = {
            method: 'GET',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU'
            }
        }
        const response = await fetch(`https://apis.ccbp.in/products/${id}`, options)
        const responseData = await response.json()


        this.setState({ apiStatus: apistatusConstants.success, productDetails: responseData })
    }

    renderLoader = () => {
        return (
            <div className="loader-contaier">
                <Vortex />
            </div>
        )
    }
    componentDidMount() {
        this.getProductDetails()
    }

    increaseQuantity = () => {

        this.setState(prevState => ({ quantity: prevState.quantity + 1 }))

    }

    decreaseQuantity = () => {
        const { quantity } = this.state
        if (quantity > 1) {
            this.setState(prevState => ({ quantity: prevState.quantity - 1 }))
        }


    }
    renderDetails = () => {
        const { productDetails, quantity } = this.state
        const { id, image_url, title, style, price, description, brand, total_reviews, rating, availability, similar_products } = productDetails



        return (

            < CartContext.Consumer >
                {value => {
                    const { addItem } = value
                    const handleOnClick = () => {
                        addItem({ ...productDetails, quantity })
                    }
                    return (

                        <>
                            <div className="product-details-container">
                                <img src={image_url} className="product-image" />
                                <div className="details-text-content">
                                    <h1 className="product-title">{title}</h1>
                                    <p className="product-price">Rs {price}/-</p>
                                    <div className="align">
                                        <div className='rating'>
                                            <p className="rating-text">{rating}</p>
                                            <FaStar className="star-icon" />
                                        </div>
                                        <p className="reviews">{total_reviews} Reviews</p>
                                    </div>
                                    <p className="product-description">{description}</p>
                                    <div className="align2">
                                        <h1>Available:</h1>
                                        <p>{availability}</p>
                                    </div>
                                    <div className="align2">
                                        <h1>Brand:</h1>
                                        <p>{brand}</p>
                                    </div>
                                    <hr className="seperator" />
                                    <div className="increment-or-decrement">
                                        <CiSquareMinus className="icon" onClick={this.decreaseQuantity} />
                                        <p className="quantity">{quantity}</p>
                                        <CiSquarePlus className="icon" onClick={this.increaseQuantity} />
                                    </div>
                                    <button className="addBtn" onClick={handleOnClick}>ADD TO CART</button>
                                </div>
                            </div>
                            <ul className="similar">
                            {similar_products.map(eachProduct=><ProductItem product={eachProduct} key={eachProduct.id}/>)}
                            </ul>
                        </>
                    )


                }
                }
            </CartContext.Consumer>

        )

    }

    renderAllResults = () => {
        const { apiStatus } = this.state
        switch (apiStatus) {
            case apistatusConstants.in_progress:
                return this.renderLoader()
            case apistatusConstants.success:
                return this.renderDetails()
            default:
                return null
        }
    }

    render() {
        return (
            <div className="product-item-details-background">
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
                {this.renderAllResults()}
            </div>
        )
    }

}
export default  withRouter(ProductItemDetails)




