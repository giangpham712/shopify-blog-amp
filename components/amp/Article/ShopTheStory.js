import React from 'react';
import _ from 'lodash'

export default function ShopTheStory({children, article}) {
  return(
    <div id="shop-the-story">
      <p className="text-center text-md-lg m-t-xlg l-s-2x font-bold">SHOP THE STORY</p>
      <div className="no-padding">
        <amp-carousel height="350"
                      layout="fixed-height"
                      type="carousel">
          {article.shopTheStoryProducts.map(product => {
            const url = `/products/${product.handle}`;
            return (
              <div className="carousel-slide" key={product.handle}>
                <a href={url}>
                  <div className="fixed-container">
                    <amp-img className="contain" layout="fill" src={_.get(product, 'image.src')} alt={product.title}></amp-img>
                  </div>
                </a>
                <div className="product-bottom">
                  <span className="text-center m-t-sm flex j-c-center caption_text">
                    <a href={url}>
                      <span>{product.title}</span>
                    </a>
                  </span>
                </div>
                <div className="text-center m-t-md">
                  <div className="submit-btn-container">
                    <a href="" className="btn btn-secondary w-full">ADD TO TOTE</a>
                  </div>
                </div>
              </div>
            )
          })}
        </amp-carousel>
      </div>
      <style jsx>{`
        .carousel-slide {
          width: 50%;
          height: 350px;
        }
        
        .carousel-slide .fixed-container {
          height: 200px;
        }
        
        .carousel-slide .product-bottom a span {
          white-space: normal;
        }
        
        .amp-scrollable-carousel-slide {
          margin-left: 0;
          padding: 10px;
        }
        
        .btn-secondary {
          background: #f38189;
         }
      `}</style>
    </div>
  )
}
