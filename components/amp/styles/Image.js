export default function Image({ children }) {
  return (
    <>
      <style jsx global>{`
        .fixed-container {
           position: relative;
           width: 100%;
           height: 400px;
         }
         
         amp-img.contain img {
           object-fit: contain;
         }
      `}</style>
    </>
  )
}
