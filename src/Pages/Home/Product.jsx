import React from 'react'

export const Product = (props) => {
    const { productName,productPrice,productDesc} = props.data;
    return(
         <div class="details-container">
            <h2 class="experience-sub-title">{productName}</h2>
            <div class="article-container">
            <article>
                <div>
                <h3>{productPrice}</h3>
                <p>{productDesc}</p>
                </div>
            </article>
            </div>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                
              >
                Add To Cart
              </button>
            </div>
        </div>
)
}
