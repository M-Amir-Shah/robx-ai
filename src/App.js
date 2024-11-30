import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Program from './component/Program'
import Title from './component/Titles'
import About from './component/About'
import Campus from './component/Campus Info'
import Testimonial from './component/Testimonial'
import Contact from './component/Contact'
import Footer from './component/Footer'
//import VideoPlayer from './component/VideoPlayer/VideoPlayer'

const App = () => {

  const[playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer' />
        <Program/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
        <Testimonial/>
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact/>
        <Footer/>
      </div>
      {/* <VideoPlayer playState={playState} setPlayState={setPlayState}/> */}
    </div>
  )
}

export default App