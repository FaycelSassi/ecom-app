import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Nav";
import products from "./db/data";
import Card from "./components/Card";
import Footer from "./Footer/footer";
import "./index.css";
import Home from "./Home/Home";
import Cart from "./Cart/cart";

function App() {
  let [receivedValue, setReceivedValue] = useState(0); // State to store the received value

  const handleInputValueChange = (value) => {
    receivedValue = value;
  };
  const [selectedCategory, setSelectedCategory] = useState({
    company: "",
    color: "",
    category: "",
    newPrice: "",
  });
  const [cartItems, setCartItems] = useState([]);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory({
      company: selectedCategory.company,
      color: event.target?.name?.includes("color") ? event.target.value : selectedCategory.color,
      category: event.target?.name?.includes("category") ? event.target.value : selectedCategory.category,
      newPrice: event.target?.name?.includes("newPrice") ? event.target.value : selectedCategory.newPrice
    });
  };


  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory({
      company: event.target?.name?.includes("company") ? event.target.value : selectedCategory.company,
      color: selectedCategory.color,
      category: selectedCategory.category,
      newPrice: selectedCategory.newPrice
    });
  };
  // ------------ Handle AddToCart -----------
  const handleAddToCart = (item) => {
    console.log(item)
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);

    // Store updated cart items in localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  // ------------ Handle RemoveFromCart -----------
  const handleRemoveFromCart = (itemToRemove) => {
    // Retrieve cart items from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Filter out the item to remove from the cartItems state
    const updatedCartItems = storedCartItems.filter((item) => item.title !== itemToRemove.title);

    console.log(updatedCartItems)

    // Update local storage with the updated cartItems
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    // Update the cartItems state with the filtered items
    setCartItems(updatedCartItems);
    window.location.reload();
  };





  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          (category === selected.category || selected.category === "") &&
          (color === selected.color || selected.color === "") &&
          (company === selected.company || selected.company === "") &&
          (newPrice === selected.newPrice || selected.newPrice === "")
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          
          onInputChange={handleInputValueChange}
          onAddToCart={() => handleAddToCart({ img, title, newPrice, receivedValue })}
        />

      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <div className="container">
        <Router>
          <Navigation query={query} handleInputChange={handleInputChange} />
          <Routes>
            <Route path="/" element={<Home handleChange={handleChange} handleClick={handleClick} result={result} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
