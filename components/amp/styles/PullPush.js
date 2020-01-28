export default function Grid({ children }) {
  return (
    <>
      <style jsx global>{`
        [class*="push--"] {
            position: relative
        }
        
        .push--one-whole {
            left: 100%
        }
        
        .push--one-half {
            left: 50%
        }
        
        .push--one-third {
            left: 33.333%
        }
        
        .push--two-thirds {
            left: 66.666%
        }
        
        .push--one-quarter {
            left: 25%
        }
        
        .push--two-quarters {
            left: 50%
        }
        
        .push--three-quarters {
            left: 75%
        }
        
        .push--one-fifth {
            left: 20%
        }
        
        .push--two-fifths {
            left: 40%
        }
        
        .push--three-fifths {
            left: 60%
        }
        
        .push--four-fifths {
            left: 80%
        }
        
        .push--one-sixth {
            left: 16.666%
        }
        
        .push--two-sixths {
            left: 33.333%
        }
        
        .push--three-sixths {
            left: 50%
        }
        
        .push--four-sixths {
            left: 66.666%
        }
        
        .push--five-sixths {
            left: 83.333%
        }
        
        .push--one-eighth {
            left: 12.5%
        }
        
        .push--two-eighths {
            left: 25%
        }
        
        .push--three-eighths {
            left: 37.5%
        }
        
        .push--four-eighths {
            left: 50%
        }
        
        .push--five-eighths {
            left: 62.5%
        }
        
        .push--six-eighths {
            left: 75%
        }
        
        .push--seven-eighths {
            left: 87.5%
        }
        
        .push--one-tenth {
            left: 10%
        }
        
        .push--two-tenths {
            left: 20%
        }
        
        .push--three-tenths {
            left: 30%
        }
        
        .push--four-tenths {
            left: 40%
        }
        
        .push--five-tenths {
            left: 50%
        }
        
        .push--six-tenths {
            left: 60%
        }
        
        .push--seven-tenths {
            left: 70%
        }
        
        .push--eight-tenths {
            left: 80%
        }
        
        .push--nine-tenths {
            left: 90%
        }
        
        .push--one-twelfth {
            left: 8.333%
        }
        
        .push--two-twelfths {
            left: 16.666%
        }
        
        .push--three-twelfths {
            left: 25%
        }
        
        .push--four-twelfths {
            left: 33.333%
        }
        
        .push--five-twelfths {
            left: 41.666%
        }
        
        .push--six-twelfths {
            left: 50%
        }
        
        .push--seven-twelfths {
            left: 58.333%
        }
        
        .push--eight-twelfths {
            left: 66.666%
        }
        
        .push--nine-twelfths {
            left: 75%
        }
        
        .push--ten-twelfths {
            left: 83.333%
        }
        
        .push--eleven-twelfths {
            left: 91.666%
        }
        
        [class*="pull--"] {
            position: relative
        }
        
        .pull--one-whole {
            right: 100%
        }
        
        .pull--one-half {
            right: 50%
        }
        
        .pull--one-third {
            right: 33.333%
        }
        
        .pull--two-thirds {
            right: 66.666%
        }
        
        .pull--one-quarter {
            right: 25%
        }
        
        .pull--two-quarters {
            right: 50%
        }
        
        .pull--three-quarters {
            right: 75%
        }
        
        .pull--one-fifth {
            right: 20%
        }
        
        .pull--two-fifths {
            right: 40%
        }
        
        .pull--three-fifths {
            right: 60%
        }
        
        .pull--four-fifths {
            right: 80%
        }
        
        .pull--one-sixth {
            right: 16.666%
        }
        
        .pull--two-sixths {
            right: 33.333%
        }
        
        .pull--three-sixths {
            right: 50%
        }
        
        .pull--four-sixths {
            right: 66.666%
        }
        
        .pull--five-sixths {
            right: 83.333%
        }
        
        .pull--one-eighth {
            right: 12.5%
        }
        
        .pull--two-eighths {
            right: 25%
        }
        
        .pull--three-eighths {
            right: 37.5%
        }
        
        .pull--four-eighths {
            right: 50%
        }
        
        .pull--five-eighths {
            right: 62.5%
        }
        
        .pull--six-eighths {
            right: 75%
        }
        
        .pull--seven-eighths {
            right: 87.5%
        }
        
        .pull--one-tenth {
            right: 10%
        }
        
        .pull--two-tenths {
            right: 20%
        }
        
        .pull--three-tenths {
            right: 30%
        }
        
        .pull--four-tenths {
            right: 40%
        }
        
        .pull--five-tenths {
            right: 50%
        }
        
        .pull--six-tenths {
            right: 60%
        }
        
        .pull--seven-tenths {
            right: 70%
        }
        
        .pull--eight-tenths {
            right: 80%
        }
        
        .pull--nine-tenths {
            right: 90%
        }
        
        .pull--one-twelfth {
            right: 8.333%
        }
        
        .pull--two-twelfths {
            right: 16.666%
        }
        
        .pull--three-twelfths {
            right: 25%
        }
        
        .pull--four-twelfths {
            right: 33.333%
        }
        
        .pull--five-twelfths {
            right: 41.666%
        }
        
        .pull--six-twelfths {
            right: 50%
        }
        
        .pull--seven-twelfths {
            right: 58.333%
        }
        
        .pull--eight-twelfths {
            right: 66.666%
        }
        
        .pull--nine-twelfths {
            right: 75%
        }
        
        .pull--ten-twelfths {
            right: 83.333%
        }
        
        .pull--eleven-twelfths {
            right: 91.666%
        }
      `}</style>
    </>
  )
}
