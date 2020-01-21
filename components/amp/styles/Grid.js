export default function Grid({ children }) {
  return (
    <>
      <style jsx global>{`
        .grid,
        .grid--rev,
        .grid--full,
        .grid-uniform {
            *zoom: 1
        }
        
        .grid:after,
        .grid--rev:after,
        .grid--full:after,
        .grid-uniform:after {
            content: '';
            display: table;
            clear: both
        }
        
        .grid__item.clear {
            clear: both
        }
        
        .grid,
        .grid--rev,
        .grid--full,
        .grid-uniform {
            list-style: none;
            margin: 0;
            padding: 0;
            margin-left: -16px;
            margin-right: -16px
        }
        
        @media (max-width: 768px) {
            .grid,
            .grid--rev,
            .grid--full,
            .grid-uniform {
                margin-left: -8px;
                margin-right: -8px
            }
        }
        
        .grid__item {
            box-sizing: border-box;
            float: left;
            min-height: 1px;
            padding-left: 16px;
            padding-right: 16px;
            vertical-align: top;
            width: 100%
        }
        
        @media (max-width: 768px) {
            .grid__item {
                padding-left: 8px;
                padding-right: 8px
            }
        }
        
        .grid--rev {
            direction: rtl;
            text-align: left
        }
        
        .grid--rev>.grid__item {
            direction: ltr;
            text-align: left;
            float: right
        }
        
        .grid--full {
            margin-left: 0
        }
        
        .grid--full>.grid__item {
            padding-left: 0
        }
        
        .one-whole {
            width: 100%
        }
        
        .one-half {
            width: 50%
        }
        
        .one-third {
            width: 33.333%
        }
        
        .two-thirds {
            width: 66.666%
        }
        
        .one-quarter {
            width: 25%
        }
        
        .two-quarters {
            width: 50%
        }
        
        .three-quarters {
            width: 75%
        }
        
        .one-fifth {
            width: 20%
        }
        
        .two-fifths {
            width: 40%
        }
        
        .three-fifths {
            width: 60%
        }
        
        .four-fifths {
            width: 80%
        }
        
        .one-sixth {
            width: 16.666%
        }
        
        .two-sixths {
            width: 33.333%
        }
        
        .three-sixths {
            width: 50%
        }
        
        .four-sixths {
            width: 66.666%
        }
        
        .five-sixths {
            width: 83.333%
        }
        
        .one-eighth {
            width: 12.5%
        }
        
        .two-eighths {
            width: 25%
        }
        
        .three-eighths {
            width: 37.5%
        }
        
        .four-eighths {
            width: 50%
        }
        
        .five-eighths {
            width: 62.5%
        }
        
        .six-eighths {
            width: 75%
        }
        
        .seven-eighths {
            width: 87.5%
        }
        
        .one-tenth {
            width: 10%
        }
        
        .two-tenths {
            width: 20%
        }
        
        .three-tenths {
            width: 30%
        }
        
        .four-tenths {
            width: 40%
        }
        
        .five-tenths {
            width: 50%
        }
        
        .six-tenths {
            width: 60%
        }
        
        .seven-tenths {
            width: 70%
        }
        
        .eight-tenths {
            width: 80%
        }
        
        .nine-tenths {
            width: 90%
        }
        
        .one-twelfth {
            width: 8.333%
        }
        
        .two-twelfths {
            width: 16.666%
        }
        
        .three-twelfths {
            width: 25%
        }
        
        .four-twelfths {
            width: 33.333%
        }
        
        .five-twelfths {
            width: 41.666%
        }
        
        .six-twelfths {
            width: 50%
        }
        
        .seven-twelfths {
            width: 58.333%
        }
        
        .eight-twelfths {
            width: 66.666%
        }
        
        .nine-twelfths {
            width: 75%
        }
        
        .ten-twelfths {
            width: 83.333%
        }
        
        .eleven-twelfths {
            width: 91.666%
        }
      `}</style>
    </>
  )
}
