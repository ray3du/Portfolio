import { Link } from 'react-scroll'
import { FaAngleDoubleUp } from 'react-icons/fa'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Resume from './components/Resume'

function App() {
  return (
    <div className="App relative" id='home'>
      <Home/>
      <About/>
      <Resume />
      <Contact />
      <Link to='home' spy={true} smooth={true} duration={500} className='bg-[tomato] h-14 w-[47px] fixed right-0 bottom-2 hover:cursor-pointer hover:opacity-75'>
        <div className="flex justify-center items-center mt-4 text-white font-bold">
          <FaAngleDoubleUp/>
        </div>
      </Link>
    </div>
  )
}

export default App
