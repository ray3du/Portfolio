import React, { useEffect, useState } from 'react'
import { FaAlignJustify, FaGithub, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-scroll'
import Typical from 'react-typical'
import pdf from '../public/CV_2022-03-04_Edwin_Ngugi.pdf'

function Home() {

    const [navbar, setNavBar] = useState("hidden")

  return (
    <div className='bg-slate-900 h-screen text-white relative' id='home'>
        <div className='py-8 flex flex-row justify-center items-center justify-between'>
            <p className='hidden md:block md:w-4/12 text-3xl font-bold'>Ray3du.com</p>
            {navbar === "hidden" ? 
                <div className='text-3xl md:hidden hover:cursor-pointer hover:opacity-50 ml-4' onClick={() => setNavBar("")}>
                    <FaAlignJustify />
                </div>
                : <div className='hidden text-3xl ml-4' onClick={() => setNavBar("")}>
                    <FaAlignJustify />
                </div>
            }
        </div>
        <div className={'md:flex md:flex-row md:items-start md:justify-end md:h-[50px] md:justify-evenly md:absolute md:right-0 md:w-8/12 flex flex-col items-center justify-center leading-8 bg-slate-500 md:bg-transparent sm:text-white h-screen relative -mt-16 ' + navbar}>
            <input type="submit" value="X" className='md:hidden absolute top-4 right-6 text-3xl hover:cursor-pointer hover:opacity-50' onClick={() => setNavBar("hidden")}/>
            <Link to="home" className='text-md text-red-500 font-bold hover:opacity-50 pb-6'>Home</Link>
            <Link to="about" spy={true} smooth={true} duration={500} className='pb-6 text-md hover:opacity-50 hover:cursor-pointer'>About Me</Link>
            <Link to="resume" spy={true} smooth={true} duration={500} className='pb-6 text-md hover:opacity-50  hover:cursor-pointer'>Resume</Link>
            <Link to="contact" spy={true} smooth={true} duration={500} className='text-md hover:opacity-50  hover:cursor-pointer'>Contact</Link>
        </div>
        {navbar === "hidden" ? 
        <div className='flex flex-col py-6 md:flex-row md:justify-between  w-7/12 md:w-7/12 m-auto'>
            <div className="flex flex-col justify-between mt-8 md:mt-20 w-full">
                <p className='text-2xl'>Hi I'm Edwin <span className='text-red-500'>(ray3du)</span></p>
                <div>
                <Typical
                    className='text-xl sm:text-4xl my-4'
                    steps={[
                        'Web Developer', 1000, 
                        'Full Stack Developer', 1000,
                        'Blockchain Developer', 1000,
                        'MERN Stack Developer', 1000,
                    ]}
                    loop={Infinity}
                    wrapper="p"
                />
                </div>
                <p>Take a dive into my coding journey.</p>
                <div className='flex flex-row my-8 justify-center'>
                    <Link to="contact" spy={true} smooth={true} duration={500} className='border border-white rounded-lg shadow py-2 px-6 md:px-16 text-xs md:text-sm mr-2 hover:cursor-pointer hover:opacity-50' >Hire Me</Link>
                    <a href={pdf} className='bg-[tomato] text-xs md:text-sm py-2 px-2 md:px-6 rounded-lg shadow hover:cursor-pointer hover:opacity-50' download="Edwin Ngugi CV.pdf" target="_blank">Download Resume</a>
                </div>
                <div className="flex flex-row text-white justify-center mb-4">
                    <a href="https://github.com/ray3du" target="_blank" className='mr-4 hover:cursor-pointer hover:opacity-50 text-xl'><FaGithub /></a>
                    <a href="https://twitter.com/ray_3du" target="_blank" className='mr-4 hover:cursor-pointer hover:opacity-50 text-xl'><FaTwitter /></a>
                </div>
            </div>
            <div className=''>
                {/* <p>Image</p> */}
            </div>
        </div>
        : null
        }
    </div>
  )
}

export default Home