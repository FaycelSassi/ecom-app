import React from 'react'
import './Home.css' 
import { Products } from '../../Products'
import {Product} from './Product'

export const Home = () => {
  return (
    <section id="BestSelling">
      <div id="slideshow">
      <ul class="slides">
        <input type="radio" name="radio-btn" id="img-1" checked/>
        <li class="slide-container">
        <div class="slide">
          <img src="http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg" alt='img-1'/>
            </div>
        </li>

        <input type="radio" name="radio-btn" id="img-2" />
        <li class="slide-container">
            <div class="slide">
              <img src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg" alt='img-2'/>
            </div>
        </li>

        <input type="radio" name="radio-btn" id="img-3" />
        <li class="slide-container">
            <div class="slide">
              <img src="http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg" alt='img-3'/>
            </div>
        </li>


        <input type="radio" name="radio-btn" id="img-4" />
        <li class="slide-container">
            <div class="slide">
              <img src="http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg" alt='img-4'/>
            </div>
        
        </li>

        <input type="radio" name="radio-btn" id="img-5" />
        <li class="slide-container">
            <div class="slide">
              <img src="http://farm9.staticflickr.com/8195/8098750703_797e102da2_z.jpg" alt='img-5'/>
            </div>
        </li>

        <li class="nav-dots">
          <label for="img-1" class="nav-dot" id="img-dot-1"></label>
          <label for="img-2" class="nav-dot" id="img-dot-2"></label>
          <label for="img-3" class="nav-dot" id="img-dot-3"></label>
          <label for="img-4" class="nav-dot" id="img-dot-4"></label>
          <label for="img-5" class="nav-dot" id="img-dot-5"></label>
        </li>
    </ul>
    </div>
      <div id="section-container">
        <p class="section__text__p1">Browse Our</p>
        <h1 class="title">Best Selling Products</h1>
        <div class="experience-details-container">
          <div class="about-containers">
              {""}
              {Products.map((product)=>(<Product data={product}/>))

              }
            
          </div>
        </div>
      </div>
    </section>
    
  )
}
