import React from 'react'

const Education = () => {
    return (
        <div>
            <div className='container'>
                <h2 style={{ fontFamily: "Lora" }} className="text-center my-1"><i className="fa-solid fa-graduation-cap mx-2"></i>Education</h2>
                <div>
                    <div data-aos="fade-up" data-aos-duration="500">
                        <div className='my-4'>
                            <h5 className='my-1'><i className="fa-solid fa-user-graduate mx-2"></i>B.tech (2020 - pursuing)</h5>
                            <h6>University Institute of engineering and technology, Kurukshetra, Haryana</h6>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500">
                        <div className='my-4'>
                            <h5 className='my-1'><i className="fa-solid fa-school mx-2"></i>Higher Secondary Education (2019)</h5>
                            <h6>Dev Samaj Vidya Niketan, Gurgaon, Haryana</h6>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500">
                        <div className='my-4'>
                            <h5 className='my-1'><i className="fa-solid fa-school mx-2"></i>Secondary Education (2017)</h5>
                            <h6>Dev Samaj Vidya Niketan, Gurgaon, Haryana</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
