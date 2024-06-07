import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro'
import Service from './components/Service'
import About from './components/About'
import Faq from './components/Faq'
import Footer from './components/Footer'

import "./style/landingPage.css"

function App() {
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
  );
}

export default App;
