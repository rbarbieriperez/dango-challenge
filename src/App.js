import React from 'react';
import './App.css';
import Header from './components/header/header';
import HighlightedProducts from './components/highlighted-products/highlighted-products';
import FeaturedCollection from './components/featured-collection/featured-collection';
import productImage1 from './assets/product-image-1.svg';
import productImage2 from './assets/product-image-2.svg';
import productImage3 from './assets/product-image-3.svg';
import { products } from './utils/products.js';
import Cart from './components/cart/cart.jsx';

const highlightedProducts = [
  {
    image: productImage1,
    title: 'Lorem ipsum dolor sit amet adsf',
    description: 'Nunc porttitor tortor metus, nec sagittis lectus accumsan quis. Aenean euismod mollis tempor.',
    id: 0
  },
  {
    image: productImage2,
    title: 'Lorem ipsum dolor sit amet',
    description: 'Nunc porttitor tortor metus, nec sagittis lectus accumsan quis. Aenean euismod mollis tempor.',
    id: 1
  },
  {
    image: productImage3,
    title: 'Lorem ipsum dolor sit amet',
    description: 'Nunc porttitor tortor metus, nec sagittis lectus accumsan quis. Aenean euismod mollis tempor.',
    id: 2
  }
];


function App() {
  const [productsInCart, setProductsInCart] = React.useState([]);
  const [openCart, setOpenCart] = React.useState(false);

  /**
   * Add product id to the list of products in the cart
   * @param {Number} productId
   */
  const addProductToCard = (productId) => {
    setProductsInCart((prev) => [...prev, productId]);
    setOpenCart(true);
  }

  /**
   * Close the cart
   */
  const handleCartClose = () => {
    setOpenCart(false);
  }

  /**
   * Delete cart item from products in the cart list
   * @param {Number} index
   *
   */
  const handleDeleteCartItem = (index) => {
    console.log(index);
    setProductsInCart((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  }

  React.useEffect(() => {
    console.log(productsInCart);
  }, [productsInCart]);

  return <>
    <Header openCart={() => setOpenCart(true)}/>
    <HighlightedProducts products={highlightedProducts}/>
    <FeaturedCollection productSelected={addProductToCard} products={products}/>

    <Cart onDeleteItem={handleDeleteCartItem} onClose={handleCartClose} visible={openCart} products={products} productsInCart={productsInCart}/>
  </>;
}

export default App;
