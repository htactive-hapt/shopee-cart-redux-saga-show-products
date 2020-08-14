import React from 'react';
import PropTypes from 'prop-types'

const ProductList = ({ products }) => (
  <div className='product-list'>
    {products && products.map(product => (
      <div className='product' key={product.id}>
        <div>
          <img className='product-image' onClick={() => console.log(product.id)} src={product.image} alt={product.title} />
        </div>
        <div onClick={() => console.log(product.id)} style={{ marginTop: 30 }}>
          <span className='product-price' style={{ color: '#ee4d2d' }}>$ {product.price} </span>
          <span className='product-name'>{product.title}</span>
          <span className='add-to-cart fa fa-shopping-cart' onClick={(event) => { event.stopPropagation(); console.log(product.id, 'nè') }} style={{ marginTop: -10 }}></span>
        </div>
      </div>
    ))}
  </div>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProductList;
