// Cart.js
import{ useEffect,useState } from "react";
import './cart.css'

const Cart = ({onRemoveFromCart }) => {
  const [cartItems, setCartItems] = useState([]);
// Calculate the total price using reduce and convert strings to numbers
const totalPrice = cartItems.reduce((total, item) => {
  const itemPrice = parseFloat(item.newPrice); // Convert string to float
  return total + itemPrice;
}, 0);
  useEffect(() => {
    // Retrieve cart items from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);
  return (
    <div className="cart">
      <main>
      <div className="basket">
    <div className="basket-labels">
        <ul>
          <li className="item item-heading">Item</li>
          <li className="price">Price</li>
        </ul>
    </div>
    {cartItems.map((item, index) => (
      <div className="basket-product"key={index}>
      <div className="item">
        <div className="product-image">
          <img src={item.img} alt="Placholder  2" className="product-frame"/>
        </div>
        <div className="product-details">
          <h1><strong><span className="item-quantity"></span>{item.title} </strong> </h1>
        </div>
      </div>
      <div className="price">{item.newPrice}</div>
      <div className="remove">
        <button onClick={() => onRemoveFromCart(item)}>Remove</button>
      </div>
    </div>))}
    </div>
    
    <aside>
      <div className="summary">
        <div className="summary-total-items">{cartItems.length} Items in your Bag</div>
        <div className="summary-subtotal">
          <div className="subtotal-title">Total</div>
          <div className="subtotal-value final-value" id="basket-subtotal">{totalPrice}</div>
        <div className="summary-checkout">
          <button className="checkout-cta">Go to Secure Checkout</button>
        </div>
      </div>
      </div>
    </aside>
    </main>
  </div>

  );
};

export default Cart;
