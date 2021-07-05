import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
//
// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
//
// Contexts
import { ProductContext } from "./contexts/ProductContext.js";
import { CartContext } from "./contexts/CartContext.js";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  console.log("cart", cart);

  const addItem = item => {
    setCart([...cart, { ...item, id: Date.now() }]);
  };

  const removeItem = removeKey => {
    setCart(
      cart.filter(function(item) {
        return item.id !== removeKey;
      })
    );
  };

  //   const removeFromCart = item => {
  //     setCart({ ...cart, item: undefined });
  //   };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{ cart, removeItem }}>
        <div className="App">
          <Navigation />
          {/* Routes */}
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={ShoppingCart} />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
