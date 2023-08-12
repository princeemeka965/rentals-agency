"use client";

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const openBurger = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='w-full flex flex-col h-full'>

      {/** Header Bar */}
      <div className='fixed w-full flex flex-col justify-center header-bg' style={{ alignItems: 'center' }}>
        <div className='lg:w-3/4 md:w-3/4 w-full flex flex-col p-3'>
          <div className='w-full flex p-3 border-b' style={{ zIndex: 5 }}>
            <div className='flex lg:w-1/3 md:w-1/3 w-full'>
              <Image
                src="/925e51894be0ee13492b7c749ae59965.png"
                alt="Home Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </div>


            {/** Nav Bar For Larger Screens*/}
            <div className='lg:flex md:flex hidden flex-row -mb-2'>
              <div className='w-max flex flex-col px-10 justify-center'>
                <span className='text-base text-white pt-2'>Home</span>
              </div>
              <div className='w-max flex flex-col px-10 justify-center'>
                <span className='text-base text-white pt-2'>Landlord</span>
              </div>
              <div className='w-max flex flex-col px-10 justify-center'>
                <span className='text-base text-white pt-2'>Tenants</span>
              </div>
              <div className='w-max flex flex-col px-10 justify-center'>
                <span className='text-base text-white pt-2'>Contact Us</span>
              </div>
            </div>


            {/** Nav Bar For Smaller Screens*/}
            <button onClick={openBurger} className={!isOpen ? 'text-white lg:hidden md:hidden' : 'text-black lg:hidden md:hidden'} style={{ zIndex: 9 }}>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {!isOpen &&
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                }
                {isOpen &&
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                }
              </svg>
            </button>

            {isOpen &&
              <div className={`${isOpen ? 'overlayer' : ''} lg:hidden md:hidden`}>
                <aside className={`rightSidebar ${isOpen ? 'animate-left' : 'animate-right'}`}>
                  <div className='flex flex-col w-full my-10 p-3'>
                    <div className='flex p-3 my-3'>
                      <span className='text-sm'>Home</span>
                    </div>
                    <div className='flex p-3'>
                      <span className='text-sm'>LandLord</span>
                    </div>
                    <div className='flex p-3 my-3'>
                      <span className='text-sm'>Tenants</span>
                    </div>
                    <div className='flex p-3'>
                      <span className='text-sm'>Contact Us</span>
                    </div>
                  </div>
                </aside>
              </div>
            }
          </div>

          <div className='w-full my-10 flex lg:flex-row md:flex-row flex-col' style={{ zIndex: 2 }}>
            <div className='flex lg:w-1/2 md:w-1/2 w-full flex-col justify-center lg:pt-10 md:pt-10'>
              <span className='lg:text-5xl md:text-5xl text-xl font-black capitalize text-white lg:leading-snug md:leading-snug'>
                The most affordable place to stay in the san franciso bay area
              </span>
            </div>

            <div className='flex lg:w-1/2 md:w-1/2 w-full flex-col justify-center pt-5'>

              <div className='lg:flex md:flex hidden map-bg h-96 mx-8 rounded-md' />

              <div className='my-4 flex'>
                <div className='w-full bg-white rounded-md lg:mx-8 md:mx-8 p-3' style={{ border: '1px solid rgba(0, 0, 0, 0.20)' }}>
                  <div className='w-full flex flex-row' style={{ backgroundColor: '#F9F9F9' }}>
                    <div class="custom-select w-1/3">
                      <select className='w-full' style={{ borderRadius: '5px 0px 0px 5px' }}>
                        <option value="option1">Any</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option4">Option 4</option>
                      </select>
                    </div>
                    <div class="custom-select w-3/5">
                      <select className='w-full'>
                        <option value="option1">Neighborhood</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option4">Option 4</option>
                      </select>
                    </div>
                    <div className='flex flex-col justify-center flex-grow search-btn px-1'>
                      <Image
                        src="/search-icon.svg"
                        alt="Home Logo"
                        className="dark:invert"
                        width={20}
                        height={20}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>


        </div>

        <div className='absolute w-full p-5 h-full' style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.51) 100%)' }}></div>
      </div>


    </div>
    /* <Image
      src="/next.svg"
      alt="Vercel Logo"
      className="dark:invert"
      width={100}
      height={24}
      priority
  /> */
  )
}
