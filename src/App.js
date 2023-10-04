import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Nav";
import products from "./db/data";
import Card from "./components/Card";
import Footer from "./Footer/footer";
import "./index.css";
import Home from "./Home/Home";
import Cart from "./Cart/cart";

function App() {


  const [selectedCategory, setSelectedCategory] = useState({
    company: "",
    color: "",
    category: "",
    newPrice: ""
  });

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
          (category === selected.category || selected.category == "") &&
          (color === selected.color || selected.color == "") &&
          (company === selected.company || selected.company == "") &&
          // company === selected ||
          (newPrice === selected.newPrice || selected.newPrice == "")
        // (title.includes(query) || query == "")
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
            <Route path="/" element={<Home handleChange={handleChange} handleClick={handleClick} result={result}/>} />
            <Route path="/cart" element={<Cart />} />
          </Routes>     
        <Footer />
        </Router>
      </div>
</>
  );
}

export default App;
