import React from 'react'

function Programming() {
  return (
    <div className='px-6 md:px-8 w-full my-12 md:m-2'>
        <ul className='list-disc text-justify px-4 text-lg font-bold w-11/12'>
            <li className='text-[tomato]'>
                Javascript
                <div className="w-full bg-[tomato] rounded-full h-4 dark:bg-[tomato]">
                    <div className="bg-slate-800 h-4 my-2 rounded-full" style={{width: '95%'}}></div>
                </div>
            </li>
            <li className='text-[tomato] mt-2'>
                React
                <div className="w-full bg-[tomato] rounded-full h-4 dark:bg-[tomato]">
                    <div className="bg-slate-800 h-4 my-2 rounded-full" style={{width: '95%'}}></div>
                </div>
            </li>
            <li className='text-[tomato] mt-2'>
                Nodejs
                <div className="w-full bg-[tomato] rounded-full h-4 dark:bg-[tomato]">
                    <div className="bg-slate-800 h-4 my-2 rounded-full" style={{width: '75%'}}></div>
                </div>
            </li>
            <li className='text-[tomato] mt-2'>
                Django
                <div className="w-full bg-[tomato] rounded-full h-4 dark:bg-[tomato]">
                    <div className="bg-slate-800 h-4 my-2 rounded-full" style={{width: '75%'}}></div>
                </div>
            </li>
            <li className='text-[tomato] mt-2'>
                Solidity
                <div className="w-full bg-[tomato] rounded-full h-4 dark:bg-[tomato]">
                    <div className="bg-slate-800 h-4 my-2 rounded-full" style={{width: '95%'}}></div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Programming