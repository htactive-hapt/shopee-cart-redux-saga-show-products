import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from './components/ProductList'
import Header from './components/Header'
import './App.css'
import { fetchProducts } from './actions/index'

class App extends Component {
  componentWillMount() {
    this.props.fetchProducts()
  }

  render() {
    const {
      isProductsLoading,
      products,
    } = this.props

    if (isProductsLoading) {
      return <h2>Loading...</h2>
    }

    return (
      <div>
        <Header />
        <br />
        <br />
        <ProductList
          products={products}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isProductsLoading: state.product.isLoading,
  products: state.product.products,
})

const mapDispatchToProps = {
  fetchProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)