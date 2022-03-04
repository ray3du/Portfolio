import React from 'react'

function Interests() {
  return (
    <div className='px-6 md:px-8 w-full'>
        <ul className='list-disc text-justify'>
            <li>
                <div className='flex flex-row justify-between'>
                    <div className="flex flex-col w-full mr-4">
                        <p className='text-[tomato] font-bold text-lg'>Music</p>
                        <p className='font-light py-2 w-full'>I love listening to music particularly pop music.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className='flex flex-row justify-between'>
                    <div className="flex flex-col w-full mr-4">
                        <p className='text-[tomato] font-bold text-lg'>Swimming</p>
                        <p className='font-light py-2 w-full'>I always try to find sometime when free to go swimming.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className='flex flex-row justify-between'>
                    <div className="flex flex-col w-full mr-4">
                        <p className='text-[tomato] font-bold text-lg'>Watching football</p>
                        <p className='font-light py-2 w-full'>I love watching the beautiful game.</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Interests