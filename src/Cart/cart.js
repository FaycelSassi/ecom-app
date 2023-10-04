// Cart.js
import{ useEffect,useState } from "react";
import './cart.css'

const Cart = ({}) => {
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
    <div class="cart">
      <main>
      <div class="basket">
    <div class="basket-labels">
        <ul>
          <li class="item item-heading">Item</li>
          <li class="price">Price</li>
        </ul>
    </div>
    {cartItems.map((item, index) => (
      <div class="basket-product"key={index}>
      <div class="item">
        <div class="product-image">
          <img src={item.img} alt="Placholder Image 2" class="product-frame"/>
        </div>
        <div class="product-details">
          <h1><strong><span class="item-quantity"></span>{item.title} </strong> </h1>
        </div>
      </div>
      <div class="price">{item.newPrice}</div>
      <div class="remove">
        <button>Remove</button>
      </div>
    </div>))}
    </div>
    
    <aside>
      <div class="summary">
        <div class="summary-total-items">{cartItems.length} Items in your Bag</div>
        <div class="summary-subtotal">
          <div class="subtotal-title">Total</div>
          <div class="subtotal-value final-value" id="basket-subtotal">{totalPrice}</div>
        <div class="summary-checkout">
          <button class="checkout-cta">Go to Secure Checkout</button>
        </div>
      </div>
      </div>
    </aside>
    </main>
  </div>

  );
};

export default Cart;
