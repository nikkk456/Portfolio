import React from 'react'
import img1 from './Image/Training1.png'
import img2 from './Image/training2.png'

const Certificate = () => {
  return (
    <div>
      <div className='container' id='certificate'>
        <h2 style={{ fontFamily: "Lora" }} className="text-center my-3"><i className="fa-solid fa-certificate mx-2"></i>Certificates</h2>
        <div className='d-flex justify-content-around' style={{ width: "100%", backgroundSize:'cover' }}>
          <div data-aos="fade-right"  data-aos-duration="500">
          <img src={img1} className='mx-2 img-fluid rounded2'></img>
          </div>
          <div data-aos="fade-left"  data-aos-duration="500">
          <img src={img2} className='mx-2 img-fluid rounded2'></img>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Certificate
