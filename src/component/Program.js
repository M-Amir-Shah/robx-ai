import React from 'react'
import '../Styling/Program.css'
import program1 from '../images/graduate1.png'
import program2 from '../images/graduate2.png'
import program3 from '../images/graduate3.png'
import graduate from '../images/graduate.png'
import master from '../images/master.png'
import post from '../images/post.png'


const Programs = () => {
  return (
    <div className='programs' >
        <div className="program">
            <img src={program1} alt="" />
            <div className="caption">
                <img src={graduate} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} alt="" />
            <div className="caption">
                <img src={master} alt="" />
                <p>Master Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program3} alt="" />
            <div className="caption">
                <img src={post} alt="" />
                <p>Post Graduation</p>
            </div>
        </div>

    </div>
  )
}

export default Programs