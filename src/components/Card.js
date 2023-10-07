import { BsFillBagFill } from "react-icons/bs";
import { useState } from "react";


const Card = ({ img, title, star, reviews, prevPrice, newPrice,onInputChange, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1); // Initialize quantity with a default value of 1

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
  };
  const sendValue= (quant)=>{
    onInputChange(quant);
    onAddToCart();
  }
  
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <div className="card-actions">
              <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="quantity-input"
                />
                <button onClick={() => sendValue(quantity)}><BsFillBagFill className="bag-icon" /></button>
              </div>
              
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
