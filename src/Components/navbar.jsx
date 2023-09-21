// jsx for react component

import React from 'react';
import {Link } from 'react-router-dom';
import { ShoppingCart,UserCircle } from 'phosphor-react';
import "./navbar.css";


export const Navbar = () => {
  return (
    <nav id="desktop-nav">
      <Link className="link" to='/'>Ecom</Link>
      <div>
        <ul class="nav-links">
          <li><Link className="link" to='/Cart'><ShoppingCart size={32}></ShoppingCart>Cart</Link></li>
          <li><Link className="link" to='/Account'><UserCircle size={32}></UserCircle>Account</Link></li>
        </ul>
      </div>
    </nav>
    
  )
}
