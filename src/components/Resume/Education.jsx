import React from 'react'

function Education() {
  return (
    <div className='px-6 md:px-8 w-full'>
        <ul className='list-disc text-justify'>
            <li>
                <div className='flex flex-row justify-between'>
                    <div className="flex flex-col w-full mr-4">
                        <p className='text-[tomato] font-bold text-lg'>University of Embu, Embu Kenya</p>
                        <p className='font-light py-2 w-full'>Bachelor of Science in Computer Science</p>
                    </div>
                    <p className='bg-[tomato] mt-2 text-white text-sm sm:text-xs md:text-sm px-1 text-center rounded-full h-[25px] sm:h-[20px] md:h-[25px] w-4/12 items-end'>2017-2021</p>
                </div>
            </li>
            <li>
                <div className='flex flex-row justify-between mt-2 md:mt-4'>
                    <div className="flex flex-col w-full mr-4">
                        <p className='text-[tomato] font-bold text-lg'>St Charles Lwanga, Murang'a Kenya</p>
                        <p className='font-light py-2 w-full'>Attained Kenya Certificate of Primary Education (KCSE)</p>
                    </div>
                    <p className='bg-[tomato] mt-2 text-white text-sm sm:text-xs md:text-sm px-1 text-center rounded-full h-[25px] sm:h-[20px] md:h-[25px] w-4/12 items-end'>2013-2016</p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Education