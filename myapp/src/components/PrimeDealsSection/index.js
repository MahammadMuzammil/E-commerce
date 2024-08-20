import { Component } from 'react'
import './index.css'
import { BallTriangle} from 'react-loader-spinner'
import ProductItem from '../ProductItem'
const apistatusConstants = {
    initial: 'INITIAL',
    inProgress: 'IN_PROGRESS',
    success: 'SUCCESS',

}

class PrimeDealsSection extends Component {

    state = {
        apiStatus: apistatusConstants.initial,
        productsList: []
    }

    getResults = async () => {
        this.setState({ apiStatus: apistatusConstants.inProgress })
        const options = {
            method: 'GET',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU'
            }
        }
        const response = await fetch('https://apis.ccbp.in/prime-deals', options)
        const responseData = await response.json()
        const { prime_deals } = responseData
        console.log(prime_deals)
        this.setState({ productsList: prime_deals,apiStatus:apistatusConstants.success})
    }


    componentDidMount() {
        this.getResults()
    }


    renderLoader = () => {
        return (
            <div>
                <BallTriangle />
            </div>
        )
    }

    renderProducts = () => {
        const { productsList } = this.state
        return (
            <ul className='prime-products-container'>

                {productsList.map(eachProduct => <ProductItem product={eachProduct} key={eachProduct.id} />)}
            </ul>

        )
    }

    renderResults = () => {
        const { apiStatus } = this.state
        switch (apiStatus) {
            case apistatusConstants.inProgress:
                return this.renderLoader()
            case apistatusConstants.success:
                return this.renderProducts()
            default:
                return null
        }
    }

    render() {

        return (
            <div className='prime-products-container'>
                {this.renderResults()}
            </div>
        )

    }
}


export default PrimeDealsSection