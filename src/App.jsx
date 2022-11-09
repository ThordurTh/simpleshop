import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // props sent down to Product, the button calls a function there which calls addToCart function
  function addToCart(data) {
    // takes the data
    if (cart.find((entry) => entry.id === data.id)) {
      // loops through the cart to see if an id in the cart matches the one that was clicked
      setCart((oldCart) =>
        oldCart.map((entry) => {
          // loops through the existing cart and checks if
          if (entry.id !== data.id) {
            return entry;
          }
          const copy = { ...entry };
          copy.amount = copy.amount + 1;
          return copy;
        })
      );
    } else {
      setCart((oldCart) => oldCart.concat({ ...data, amount: 1 }));
    }
  }

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <Header />
      <ProductList products={products} addToCart={addToCart} />
      <Basket products={products} cart={cart} />
    </div>
  );
}

export default App;
