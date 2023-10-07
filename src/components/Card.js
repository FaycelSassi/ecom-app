import { BsFillBagFill } from "react-icons/bs";
import { useState, useEffect } from "react";


export const Card = ({ img, title, star, reviews, prevPrice, newPrice,
  onInputChange,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1); // Initialize quantity with a default value of 1

  const handleQuantityChange = (event) => {
    let parsed = parseInt(event.target.value)
    setQuantity(parsed);
    onInputChange(parsed)
  };
<<<<<<< HEAD
  const sendValue= (quant)=>{
    onInputChange(quant);
    onAddToCart();
  }
  
=======

>>>>>>> 30950cede9065549c80f1a7e11b2c8ea90ac5fdf
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
                  onInput={handleQuantityChange}
                  className="quantity-input"
                />
                <button onClick={onAddToCart}><BsFillBagFill className="bag-icon" /></button>
              </div>

            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
