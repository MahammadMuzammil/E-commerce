import { Component } from "react";
import Filters from '../Filters'
import './index.css'
import { BallTriangle } from "react-loader-spinner";
import { BsFilterRight } from "react-icons/bs";
import ProductItem from "../ProductItem";
const apistatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    in_progress: 'PROGRESS'
}

const categoryOptions = [
    {
        name: 'Clothing',
        categoryId: '1',
    },
    {
        name: 'Electronics',
        categoryId: '2',
    },
    {
        name: 'Appliances',
        categoryId: '3',
    },
    {
        name: 'Grocery',
        categoryId: '4',
    },
    {
        name: 'Toys',
        categoryId: '5',
    },
]

const sortbyOptions = [
    {
        optionId: 'PRICE_HIGH',
        displayText: 'Price (High-Low)',
    },
    {
        optionId: 'PRICE_LOW',
        displayText: 'Price (Low-High)',
    },
]

const ratingsList = [
    {
        ratingId: '4',
        imageUrl:
            'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
    },
    {
        ratingId: '3',
        imageUrl:
            'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
    },
    {
        ratingId: '2',
        imageUrl:
            'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
    },
    {
        ratingId: '1',
        imageUrl:
            'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
    },
]

class AllProductsSection extends Component {
    state = {
        apiStatus: apistatusConstants.initial,
        activeCategoryId: '',
        activeRatingId: '',
        activeSortOptionId: '',
        searchinput: '',
        productsList: []
    }




    renderAllResults = () => {
        const { apiStatus } = this.state

        switch (apiStatus) {
            case apistatusConstants.in_progress:
                return this.renderLoader()
            case apistatusConstants.success:
                return this.renderProducts()
            default:
                return null

        }

    }

    changeSortOption = (e) => {
        this.setState({ activeSortOptionId: e.target.value },this.getProducts)
    }
    changeActiveCategory = (Id) => {
        this.setState({ activeCategoryId: Id }, this.getProducts)
    }
    changeActiveRating = (id) => {
        this.setState({ activeRatingId: id }, this.getProducts)

    }
    changeSearchInput = (newSearchinput) => {
        this.setState({ searchinput: newSearchinput },this.getProducts)
    }
renderNoProductsView=()=>{
    return(
        <div className="no-products-view">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png " className="no-products"/>
            <h1>No Products Found</h1>
            <p>We couldn't find any products</p>
        </div>
    )
}
    renderProducts = () => {
        const { productsList ,activeSortOptionId} = this.state
        console.log(activeSortOptionId)
        return (
            <div className="container">

                <div className="productsHeader">
                     <h1 className="all-products" >All Products</h1>
                    <div className="sort">
                        <BsFilterRight className="sort-icon" />
                        <p>Sort by</p>
                        <select className="sort-options" onChange={this.changeSortOption} value={activeSortOptionId} >
                            {sortbyOptions.map(eachOption => <option key={eachOption.optionId} value={eachOption.optionId}>{eachOption.displayText}</option>)}

                        </select>
                    </div>
                </div>
                {productsList.length===0 ? this.renderNoProductsView() :<ul className="products-container">
                    {productsList.map(eachProduct => <ProductItem product={eachProduct} key={eachProduct.id} />)}
                </ul>}
                

            </div>
        )
    }

    getProducts = async () => {
        const { activeCategoryId, activeRatingId, activeSortOptionId, searchinput } = this.state
        console.log(this.state)
        this.setState({ apiStatus: apistatusConstants.in_progress })

        const options = {
            method: 'GET',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU'
            }
        }
        const response = await fetch(`https://apis.ccbp.in/products?sort_by=${activeSortOptionId}&category=${activeCategoryId}&title_search=${searchinput}&rating=${activeRatingId}`, options)
        
        const resposeData = await response.json()
        console.log(resposeData)
        const { products } = resposeData
        this.setState({ apiStatus: apistatusConstants.success, productsList: products })


    }

    componentDidMount() {
        this.getProducts()
    }


    renderLoader = () => {
        return (
            <div className="loader-contaier">
                <BallTriangle />
            </div>
        )
    }
    render() {
        const { activeCategoryId, activeRatingId } = this.state
        console.log(activeCategoryId)
        console.log(activeRatingId)
        return (
            <div className="filter-allproducts">
                <Filters categoryOptions={categoryOptions} activeCategoryId={activeCategoryId} activeRatingId={activeRatingId} ratingsList={ratingsList} changeActiveCategory={this.changeActiveCategory} changeActiveRating={this.changeActiveRating} changeSearchInput={this.changeSearchInput} />
                {this.renderAllResults()}

            </div>
        )
    }

}
export default AllProductsSection







