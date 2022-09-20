import React from 'react'

const Skills = () => {
  return (
    <div>
      <div className='container' id='skills'>
        <h2 style={{ fontFamily: "Lora" }} className="text-center my-2"><i className="fa-solid fa-gear mx-2"></i>Skills</h2>
        <div data-aos="fade-up" data-aos-duration="500">
        <div className='d-flex align-items-center justify-content-between flex-sm my-2'>
          <h5><i className="fa-brands fa-html5 mx-2"></i>HTML/CSS</h5>
          <div className="progress mx-2" style={{ width: "70%" }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}></div>
          </div>
        </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="500">
        <div className='d-flex align-items-center flex-sm justify-content-between my-2 '>
          <h5><i className="fa-brands fa-square-js mx-2"></i>Javascript</h5>
          <div className="progress mx-2" style={{ width: "70%" }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
          </div>
        </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="500">
        <div className='d-flex align-items-center flex-sm justify-content-between my-2 '>
          <h5><i className="fa-brands fa-react mx-2"></i>React JS</h5>
          <div className="progress mx-2" style={{ width: "70%" }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}></div>
          </div>
        </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="500">
        <div className='d-flex align-items-center flex-sm justify-content-between my-2 '>
          <h5><i className="fa-solid fa-c mx-2"></i>C++</h5>
          <div className="progress mx-2" style={{ width: "70%" }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
