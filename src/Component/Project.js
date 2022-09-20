import React from 'react'

const Project = () => {
  return (
    <div>
      <div className='container' id='project'>
        <h2 style={{ fontFamily: "Lora" }} className="text-center my-3"><i className="fa-solid fa-diagram-project mx-2"></i>Projects</h2>
        <div className="accordion" id="accordionExample">
          <div data-aos="fade-up" data-aos-duration="500">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                DressNality
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body d-flex flex-column">
                <strong>Website that let you customise the dress</strong> <br /> This webiste is designed with the help of HTML5/CSS and javascript and with the help of Bootstrap 5. In this project user can easily customise the dress before ordering any dress she wants according to her body type, hence Solving the major problem of customisation.
                <a className="btn btn-dark my-2 button" href="https://github.com/nikkk456/Dressnality" role="button" target='_blank'>Source Code</a>
              </div>
            </div>
          </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                NewsDroom
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body d-flex flex-column">
                <strong>Website which fetch the latest news of the day countryWise</strong> <br /> Its a project based on my learning in React JS And javascript, Bootstrap also helped me to Create this project successfully. You can fetch news category wise.
                <a className="btn btn-dark my-2 button" href="https://github.com/nikkk456/NewsDroom" target='_blank' role="button" >Source Code</a>
              </div>
            </div>
          </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                TravelMate
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body d-flex flex-column">
                <strong>Website that helps Travellor alot</strong> Website which help travellors to gain the info in one click like weather reports, Travelling routes, hotels and restaurants, dormitory and much more you can also hire a guide and you can also meetup with the fellow travellers not only this you can also share your videos, photos and your travel journey on the social media blog on this website. We created this website by Using the React JS and javascript and Bootstrap
                <a className="btn btn-dark btn-sm my-2 button" href="https://github.com/nikkk456/Travel_Mate" role="button" target='_blank' >Source Code</a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
