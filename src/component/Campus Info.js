import React from 'react'
import '../Styling/Campus Info.css'
import gallery1 from '../images/gallery1.png'
import gallery2 from '../images/gallery2.png'
import gallery3 from '../images/gallery3.png'
import gallery4 from '../images/gallery4.png'
import arrow from '../images/arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery4} alt="" />
        </div>
        <button className='btn dark-btn'>See More here <img src={arrow} alt="" /></button>
    </div>
  )
}

export default Campus