import React from 'react'

const Experience = () => {
  return (
    <div>
      <div className='container' id='experience'>
        <h2 style={{ fontFamily: "Lora" }} className="text-center my-3"><i className="fa-solid fa-paperclip mx-2"></i>Experience</h2>
        <div data-aos="fade-up" data-aos-duration="500">
        <div>
          <h5><i className="fa-solid fa-desktop mx-2"></i>Web Development Training </h5>
          <p>completed an 8-week online training on Web Development. The
            training consisted of HTML & CSS, Bootstrap, SQL, and PHP modules.
            In the final assessment, I scored 75% marks </p>
        </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="500">
        <div>
          <h5><i className="fa-brands fa-react mx-2"></i>React Training </h5>
          <p>completed a 6-week online training on React. The training consisted of
            Introduction, Tic Tac Toe Game, Box Office App, Chat Application, Custom Backend, and Assignment & Summary
            modules.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
