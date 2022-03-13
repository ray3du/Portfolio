import React, { useState } from 'react'
import { FaAward, FaDesktop, FaToolbox, FaUserGraduate } from 'react-icons/fa'
import Education from './Resume/Education'
import Interests from './Resume/Interests'
import Programming from './Resume/Programming'
import Work from './Resume/Work'

function Resume() {
    const [choice, setChoice] = useState(1)

    return (
    <div className='bg-white min-h-full my-8' id='resume'>
        <div>
            <p className='pt-8 font-bold text-2xl'>Resume</p>
            <p className='pt-4'>My formal details</p>
            <div className='w-4/12 m-auto py-2'>
                <hr/>
            </div>
            <div className='flex flex-col sm:flex-row w-11/12 lg:w-8/12 m-auto'>
                <div className='flex flex-row mb-6 pb-4 md:pb-0 md:mb-0 border border-gray-2 mt-8 shadow-lg'>
                    <div className='flex flex-col justify-between py-4 px-1 leading-10  bg-slate-800 w-[25px] text-white'>
                        <span className='mt-5'><i><FaUserGraduate/></i></span>
                        <span className=''><i><FaToolbox/></i></span>
                        <span className='mb-2'><i><FaDesktop/></i></span>
                        <span className='mb-5'><i><FaAward/></i></span>
                    </div>
                    <div className=' flex flex-col items-start mr-6 ml-2 leading-10 py-6 pl-2 pr-6 min-h-[90%]'>
                        {choice == 1 ? 
                            <input type="submit" value="Education" className='mb-4 hover:cursor-pointer bg-slate-800 text-white w-full -ml-4 rounded-tr-full rounded-br-full hover:opacity-50' onClick={() => setChoice(1)} />
                        :   <input type="submit" value="Education" className='mb-4 hover:cursor-pointer' onClick={() => setChoice(1)} />        
                        }
                        {choice == 2 ?
                            <input type="submit" value="Work History" className='mb-4  hover:cursor-pointer bg-slate-800 text-white w-full -ml-4 rounded-tr-full rounded-br-full hover:opacity-50' onClick={() => setChoice(2)} />
                        :   <input type="submit" value="Work History" className='mb-4  hover:cursor-pointer' onClick={() => setChoice(2)} />                        
                        }
                        {choice == 3 ?
                            <input type="submit" value="Programming skills" className='mb-4  hover:cursor-pointer bg-slate-800 text-white w-full -ml-4 rounded-tr-full rounded-br-full hover:opacity-50 px-6' onClick={() => setChoice(3)}/>
                        :   <input type="submit" value="Programming skills" className='mb-4  hover:cursor-pointer' onClick={() => setChoice(3)}/>
                        }
                        {choice == 4 ?
                            <input type="submit" value="Interests" className=' hover:cursor-pointer bg-slate-800 text-white w-full -ml-4 rounded-tr-full rounded-br-full hover:opacity-50' onClick={() => setChoice(4)}/>
                        :   <input type="submit" value="Interests" className=' hover:cursor-pointer' onClick={() => setChoice(4)}/>
                        }   
                    </div>
                </div>
                <div className="min-h-full">
                {choice == 1 ? 
                        <Education />
                    : choice == 2 ?
                        <Work />
                    : choice == 3 ?
                        <Programming />
                    : choice == 4 ?
                        <Interests />
                    :
                        null
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume