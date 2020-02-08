export default function Blog({ children }) {
  return (
    <>
      <style jsx global>{`
        .blog-body a {
            border-bottom: 0.06em solid rgba(0, 0, 0, 0.5)
        }
        
        .blog-body a:hover {
            border-bottom: 0.06em solid rgba(237, 51, 118, 0.6)
        }
        
        .blog-body hr {
            background: #333;
            width: 150px;
            margin: 35px auto 0px;
            height: 2px
        }
        
        .blog-body h2,
        .blog-body .h2 {
            margin-top: 1em
        }
        
        .blog-body h2.subheadline,
        .blog-body .subheadline.h2 {
            margin-top: 10px;
            font-size: 28px;
            line-height: 32px
        }
        
        .blog-body p,
        .blog-body .p-tag,
        ol {
            font-family: 'Avenir Next Regular', 'Times New Roman', serif;
            text-align: left;
            line-height: 162%;
            font-size: 18px;
            color: rgba(0, 0, 0, 0.8)
        }
        
        @media (max-width: 480px) {
            .blog-body p,
            .blog-body .p-tag,
            ol {
                font-size: 17px
            }
        }
        
        .blog-content {
            background: #fff;
            padding: 5px 0;
            border: 0px solid
        }
        
        .blog-header {
            margin-bottom: 0px;
        }
        
        .blog-header h1,
        .blog-header .h1 {
            margin-bottom: 0px
        }
        
        .read-more {
            cursor: pointer;
            font-size: 12px;
            line-height: 12px;
            letter-spacing: .2em
        }
        
        #blog-all a.btn-default {
            font-weight: 400
        }
        
        #blog-all a.btn-default.active {
            color: #ed3376
        }
        
        #blog-all .grid__item {
            padding-left: 15px;
            padding-right: 15px
        }
        
        #blog-cover .tagged-tittle {
            max-width: calc(100% - 120px)
        }
        
        .blog-feature-image {
            padding-top: 55%;
            background-size: cover
        }
        
        .recent-blog-title {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3
        }
        
        .recent-read-more {
            bottom: 4px;
            left: calc(33.3333% + 8px)
        }
        
        @media screen and (max-width: 768px) {
            .recent-blog-title {
                padding: 0 8px;
                -webkit-line-clamp: 2
            }
            .recent-read-more {
                left: calc(33.3333% + 16px)
            }
        }
        
        @media screen and (max-width: 480px) {
            .recent-blog-title {
                -webkit-line-clamp: 4
            }
        }
        
        .section-header {
            text-align: center;
            border-bottom: 0px
        }
        
        .blog-image {
            margin: 0 auto 40px;
            display: block;
            cursor: pointer
        }
        
        .blog-header h1,
        .blog-header .h1 {
            font-size: 50px;
            line-height: 50px
        }
        
        .blog-header h2,
        .blog-header .h2 {
            font-size: 35px;
            line-height: 35px
        }
        
        .blog-header time {
            font-size: 19px;
            line-height: 19px
        }
        
        @media (max-width: 768px) {
            .blog-content h2,
            .blog-content .h2 {
                border: 0px solid
            }
        }
        
        @media (max-width: 550px) {
            .blog-body h2.subheadline,
            .blog-body .subheadline.h2 {
                margin: 10px 0 10px;
                padding: 0 10px;
                font-size: 20px;
                line-height: 24px
            }
            .blog-header h1,
            .blog-header .h1 {
                font-size: 36px;
                line-height: 36px;
                margin: 0
            }
        }
        
        @media (max-width: 414px) {
            .blog-image {
                padding: 0
            }
            .section-header h1,
            .section-header .h1 {
                font-size: 36px
            }
        }
        
        header:after,
        header:before {
            content: '';
            display: block;
            width: 100%;
            clear: both
        }
        
        @media screen and (max-width: 768px) {
            #blog-all .b-r,
            #blog-cover .b-r,
            .blog-pictures.b-r {
                border-width: 0
            }
        }
        
        #blogSection .productGrid {
            height: auto
        }
      `}</style>
    </>
  )
}
