import React from 'react'
import { Link } from 'react-scroll'
import profile from '../public/profile.jpg'

function About() {
  return (
    <div className='bg-white min-h-screen text-black my-12' id="about">
        <div>
            <p className='my-6 font-bold text-2xl'>About Me</p>
            <div className='flex flex-col sm:flex-row w-11/12 lg:w-8/12 m-auto border border-gray-200 h-[80%] rounded shadow-lg'>
              <img src={profile} alt="Profile" className="h-[480px] w-full sm:w-6/12 md:w-6/12"/>
              <div className='py-4 px-6'>
                <p className='text-gray-600 text-justify font-light text-sm leading-8 sm:leading-6 md:leading-8'>I am a software developer from Nairobi, Kenya. I have a Bachelors of Science degree in Computer Science from the University of Embu. I am very passionate about design and development of software products across a range of platforms. Software engineering allows me to design, develop, and implement new product. This software development processes enables me to gain new knowledge everyday while solving real life problems.</p>
                <p className='text-md font-bold sm:hidden lg:block pt-4 text-justify'>Skills</p>
                <ul className='font-light py-2 px-6 text-gray-600 list-disc text-sm leading-8 text-justify sm:hidden lg:block'>
                  <li>Profficient in developing DAPP using solidity and React.</li>
                  <li>Building robust and complex websites using Reactjs.</li>
                  <li>Designing and developing modern android applications.</li>
                  <li>Designing and developing of secure API's with Django.</li>
                </ul>
                <div className='flex flex-row pt-4 sm:pt-12 md:pt-4 justify-center'>
                  <Link to="resume" className='bg-slate-800 text-white mr-8 rounded-full shadow-lg py-2 px-6 text-sm mr-2 hover:cursor-pointer hover:opacity-50'>Resume</Link>
                  <Link to="contact" className='bg-[tomato] text-white text-sm py-2 px-6 rounded-full shadow hover:cursor-pointer hover:opacity-50'>Contact Me</Link>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About