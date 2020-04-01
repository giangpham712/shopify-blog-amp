import React from 'react';
import _ from 'lodash'

export default function RelatedArticle({children, article}) {
  return (
    <div id="related-articles" className="m-b-lg">
      <p className="text-center text-md-lg m-t-xlg l-s-2x font-bold">RELATED POSTS</p>
      <div className="no-padding">
        <amp-carousel height="400"
                      layout="fixed-height"
                      type="carousel">
          {article.relatedArticles.map(relatedArticle => {
            const url = `/blogs/${article.blogHandle}/${relatedArticle.handle}`;
            return (
              <div className="carousel-slide" key={relatedArticle.handle}>
                <a href={url}>
                  <div className="fixed-container">
                    <amp-img className="contain" layout="fill" src={_.get(relatedArticle, 'image.src')} alt={relatedArticle.title}></amp-img>
                  </div>
                </a>
                <div className="no-padding m-b-lg">
                  <h3 className="m-t text-md-lg l-h m-b">
                    <a href={url} tabIndex="0">{relatedArticle.title}</a>
                  </h3>
                  <a href={url} className="to-article text-center b-b b-dark text-sm font-bold l-s-2x p-b-xs">
                    READ MORE <span className="icon icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            )
          })}
        </amp-carousel>
      </div>
      <style jsx>{`
        .carousel-slide {
          width: 50%;
          height: 400px;
        }
        
        .carousel-slide .fixed-container {
          height: 200px;
        }
        
        .carousel-slide h3 a {
          white-space: normal;
        }
        
        .amp-scrollable-carousel-slide {
          margin-left: 0;
          padding: 10px;
        }
      `}</style>
    </div>
  );
}
