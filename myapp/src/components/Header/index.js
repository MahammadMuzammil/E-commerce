import './index.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="header">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" className="logo" />
            <button className='logout-icon-btn'>
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png " className='logout-icon' />
            </button>
            <nav className='navbar'>
                <Link to='/' className='link-item'>
                    <p>Home</p>
                </Link>
                <Link to='/products' className='link-item'>
                    <p>Products</p>
                </Link>
                <Link to='/cart' className='link-item'>
                    <p>cart</p>
                </Link>
                <button className='logout-btn'>LogOut</button>
            </nav>
        </div>
    )


}
export default Header