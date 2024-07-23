import React from 'react'

const Gallery = () => {
  return (
    <>
        <div className="gallery">
            <h1>Our Gallery</h1>
            <div className='items'>
                <div className="gallery-item"><img src='https://www.shutterstock.com/shutterstock/photos/1932042689/display_1500/stock-photo-businessman-using-mobile-smart-phone-business-global-internet-connection-application-technology-1932042689.jpg' alt=''/></div>
                <div className="gallery-item"><img src='https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/></div>
                <div className="gallery-item"><img src='' alt=''/></div>
                <div className="gallery-item"><img src='' alt=''/></div>
                <div className="gallery-item"><img src='' alt=''/></div>
                <div className="gallery-item"><img src='' alt=''/></div>
            </div>
        </div>
    </>
  )
}

export default Gallery