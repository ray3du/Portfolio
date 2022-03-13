import React from 'react'

function Work() {
  return (
    <div className='px-6 md:px-8 ml-2 w-full my-12 md:m-2'>
        <ul className='list-disc text-justify'>
            <li>
                <div className='flex flex-row justify-between'>
                    <div className="flex flex-col w-full mr-4">
                        <p className='text-[tomato] font-bold text-lg'>POSTAL CORPORATION OF KENYA, Nairobi — ICT Intern</p>
                        <ul className='list-disc text-justify font-light text-sm md:text-xs leading-4 md:leading-8'>
                            <li>Maintained the IT assets and consumables databases for Nairobi and Nationwide, and updated the database whenever there's a change.</li>
                            <li>Regular servicing and maintenance of ICT equipment, which included: firmware updates and installation of new applications.</li>
                            <li>Operated an IT help desk rendering prompt, professional, and friendly assistance to the staff.</li>
                            <li>Aided in analyzing SIEM data and designing policy creation for Identity services, Switches, Routers, IDS, and Next Generation Threat Protection systems.</li>
                        </ul>
                    </div>
                    <p className='bg-[tomato] mt-2 text-white text-sm sm:text-xs md:text-sm px-1 text-center rounded-full h-[25px] sm:h-[20px] md:h-[25px] w-4/12 items-end'>2021-2021</p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Work