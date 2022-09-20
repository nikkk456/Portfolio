import React from 'react'
import img from './Image/img.jpg'

const Div1 = () => {
  return (
    <div style={{ backgroundColor: "rgb(224 211 227)", fontFamily: "'Tiro Devanagari Hindi', serif" }}>
      <div className='container' >
        <div className='d-flex align-item-center flex-sm'>
          <div data-aos="fade-right" data-aos-duration="500">
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <img src={img} className=" float-left profile img-fluid sm-image" />
              <h6 className='text-center' style={{ margin: "1%" }}>mishranp3@gmail.com<br />9899372406</h6>
            </div>
          </div>
          <div className=' d-flex flex-column align-items-center justify-content-start ' style={{ marginLeft: "3%" }}>
            <div data-aos="fade-up" data-aos-duration="500">
              <p style={{ fontSize: "1.1rem", marginTop: "8%" }}>
              <h1 style={{ fontFamily: "Lora" }}>Nikhil Mishra</h1>
                In Search of an IT internship where I can use my strong educational background and specialized
                training to add value to the firm. Proficiency in range of Computer system, language and associated
                tools, good communication skills and team player.
              </p>
              <div className='d-flex justify-content-start'>
                <a className="btn btn-dark mx-2" href="https://www.linkedin.com/in/nikhil-mishra-59904411b/" target="_blank" role="button"><i className="fa-brands fa-linkedin-in mx-1"></i>LinkedIn</a>
                <a className="btn btn-dark" href="https://github.com/nikkk456" target="_blank" role="button"><i className="fa-brands fa-github mx-1"></i>Github</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <hr style={{ border: "2px solid black" }} />
    </div>
  )
}

export default Div1
