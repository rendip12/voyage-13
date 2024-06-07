import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Intro from '../components/Intro'
import About from '../components/About'
import Service from '../components/Service'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
    {/* intro start */}
    <div className='myBG'>
    <NavigationBar />
    <Intro/>
    </div>
{/* intro end */}


    {/* about start*/}
    <div className='about'>
      <About/>
    </div>
    {/* about start*/}

    {/* service start */}
    <div className='service'>
      <Service/>
    </div>
    {/* service end */}

    {/* FAQ START */}
    <div className='faq'>
    <Faq/>
    </div>
    {/* FAQ START */}
    <div className='footer'>
    <Footer/>
    </div>

   </div>
  )
}
