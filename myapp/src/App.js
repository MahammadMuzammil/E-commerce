import { Route, Switch } from 'react-router-dom'
import Products from './components/products'
import Cart from './components/cart'
import Home from './components/Home'
import ProductItemDetails from './components/ProductItemDetails'
import NotFound from './components/NotFound'
import CartContext from './CartContext'
import { Component } from 'react'
class App extends Component {
  state = { cartList: [] }
  addItem = (product) => {

    console.log(product)
    this.setState(prevState => {
      const isCartItemPresent = !!prevState.cartList.find(eachCart => eachCart.id === product.id)
      const updatedCartList = prevState.cartList.map(eachCart => {
        if (eachCart.id === product.id) {
          return { ...eachCart, quantity: eachCart.quantity + product.quantity }
        }
        else {
          return eachCart
        }
      })
      if (isCartItemPresent) {
        return {
          cartList: updatedCartList
        }
      }
      else {
        return {
          cartList: [...prevState.cartList, product]
        }
      }
    })
  }
  removeItem = (id) => {
    this.setState(prevState => ({ cartList: prevState.cartList.filter(eachCart => eachCart.id !== id) }))
  }

  increaseCartItemQuantity = (cartItemId) => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachCartItem => {
        if (eachCartItem.id === cartItemId) {
          return { ...eachCartItem, quantity: eachCartItem.quantity + 1 }
        } else {
          return eachCartItem
        }
      })
    }))
  }

  decreaseCartItemQuantity = (cartItemId) => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachCartItem => {
        if (eachCartItem.id === cartItemId && eachCartItem.quantity > 1) {

          return { ...eachCartItem, quantity: eachCartItem.quantity - 1 }
        } else {
          return eachCartItem
        }
      })
    }))
  }
  removeAll = () => {
    this.setState({ cartList: [] })
  }
  render() {
    const { cartList } = this.state
    console.log(cartList)
    return (

      <CartContext.Provider value={{ cartList, addItem: this.addItem, removeItem: this.removeItem, increaseCartItemQuantity: this.increaseCartItemQuantity, decreaseCartItemQuantity: this.decreaseCartItemQuantity, removeAll: this.removeAll }}>

        <Switch>

          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/productItemDetails/:id' component={ProductItemDetails} />
          <Route path='/notfound' component={NotFound} />
        </Switch>
      </CartContext.Provider>
    )

  }

}
export default App






