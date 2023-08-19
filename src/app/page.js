"use client";

import Image from 'next/image'
import { useState } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { BathroomIcon, BedroomIcon, DollarIcon, EyeIcon, Facebook, FaxIcon, FlowerIcon, GooglePlus, HomeIcon, Instagram, Linkedin, MapIcon, PhoneIcon, QuoteIcon, Shield, SizeIcon, StackIcon, Twitter, Youtube } from './icons';
import InputField from './components/InputField';
import { Carousel } from '@material-tailwind/react';


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};



export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [paginationItem, setItem] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(6);

  const control = useAnimation();
  const controlList = useAnimation();
  const [ref, inView] = useInView();
  const [listRef, inViewList] = useInView();

  const housingItems = [
    {
      id: 1,
      image: '/items-1.jpg',
    },
    {
      id: 2,
      image: '/items-2.jpg',
    },
    {
      id: 3,
      image: '/items-3.jpg',
    },
    {
      id: 4,
      image: '/items-4.jpg',
    },
    {
      id: 5,
      image: '/items-4.jpg',
    },
    {
      id: 6,
      image: '/items-6.jpg',
    }
  ];

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }

    if (inViewList) {
      controlList.start("visible");
    } else {
      controlList.start("hidden");
    }

  }, [control, inView, inViewList, controlList]);


  const openBurger = () => {
    setIsOpen(!isOpen)
  }

  const increasePagination = (number) => {
    if (number < 3) {
      const incrementNumber = number + 1;
      setItem(incrementNumber);
      setCardFlipped(!cardFlipped)
    }
  }

  const decreasePagination = (number) => {
    if (number > 1) {
      const decrementNumber = number - 1;
      setItem(decrementNumber);
      setCardFlipped(!cardFlipped);
    }
  }


  return (
    <div className='w-full flex flex-col h-full'>

      {/** Header Bar */}
      <div className='w-full h-full flex flex-col flex-grow'>
        <div className='lg:fixed md:fixed relative w-full flex flex-col justify-center header-bg' style={{ alignItems: 'center' }}>
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  }
                  {isOpen &&
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                      <div className="custom-select w-1/3">
                        <select className='w-full' style={{ borderRadius: '5px 0px 0px 5px' }}>
                          <option value="option1">Any</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                          <option value="option4">Option 4</option>
                        </select>
                      </div>
                      <div className="custom-select w-3/5">
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



      {/*** BODY SECTION ***/}

      <div className='w-full h-full flex flex-col bg-white lg:py-10 md:py-10 p-5 lg:absolute md:absolute body-top' style={{ alignItems: 'center' }}>

        <div className='lg:w-3/4 md:w-3/4 w-full flex flex-col'>
          <span className='lg:text-2xl md:text-2xl text-sm font-black capitalize mb-2'>
            minimum living cost takes care of everything
          </span>

          <div className='flex lg:w-2/12 md:w-2/12 w-4/12 border border-b-2' style={{ borderColor: '#F4511E' }} />

          <motion.div className='my-10 flex flex-row w-full' ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
          >

            <div className='w-1/4 lg:flex md:flex hidden image-bg' style={{ borderRadius: '50px 0px', height: '400px' }} />

            <div className='lg:w-3/4 md:w-3/4 w-full lg:ml-10 md:ml-10 lg:my-10 md:my-10 flex flex-row flex-wrap'>

              {/*** COST DATA ITEMS ***/}

              <div className='lg:w-1/3 md:w-1/3 w-1/2 flex flex-col flex-grow mb-3 items-center'>
                <div className='flex justify-center w-max p-1 bg-white rounded-md' style={{ boxShadow: '0px 12px 19px 0px rgba(0, 0, 0, 0.15)' }}>
                  <DollarIcon />
                </div>
                <span className='lg:text-sm md:text-sm text-xs font-semibold capitalize my-3'>Pay as Little
                  as <br /> possible!</span>
              </div>

              <div className='lg:w-1/3 md:w-1/3 w-1/2 flex flex-col mb-3 items-center text-center'>
                <div className='flex justify-center w-max p-1 bg-white rounded-md' style={{ boxShadow: '0px 12px 19px 0px rgba(0, 0, 0, 0.15)' }}>
                  <HomeIcon />
                </div>
                <span className='lg:text-sm md:text-sm text-xs font-semibold capitalize my-3'>Enjoy wisdom
                  of community!</span>
              </div>

              <div className='lg:w-1/3 md:w-1/3 w-1/2 flex flex-col mb-3 items-center text-center'>
                <div className='flex justify-center w-max p-1 bg-white rounded-md' style={{ boxShadow: '0px 12px 19px 0px rgba(0, 0, 0, 0.15)' }}>
                  <StackIcon />
                </div>
                <span className='lg:text-sm md:text-sm text-xs font-semibold capitalize my-3'>Let&apos;s somebody else <br />
                  take care of Landlord!</span>
              </div>


              <div className='lg:w-1/3 md:w-1/3 w-1/2 flex flex-col items-center text-center'>
                <div className='flex justify-center w-max p-1 bg-white rounded-md' style={{ boxShadow: '0px 12px 19px 0px rgba(0, 0, 0, 0.15)' }}>
                  <FlowerIcon />
                </div>
                <span className='lg:text-sm md:text-sm text-xs font-semibold capitalize my-3'>Enjoy peaceful
                  Environment!</span>
              </div>

              <div className='lg:w-1/3 md:w-1/3 w-1/2 flex flex-col items-center text-center'>
                <div className='flex justify-center w-max p-1 bg-white rounded-md' style={{ boxShadow: '0px 12px 19px 0px rgba(0, 0, 0, 0.15)' }}>
                  <Shield />
                </div>
                <span className='lg:text-sm md:text-sm text-xs font-semibold capitalize my-3'>Stay Safe!
                  Save Money!</span>
              </div>

              <div className='lg:w-1/3 md:w-1/3 w-1/2 flex flex-col items-center text-center'>
                <div className='flex justify-center w-max p-1 bg-white rounded-md' style={{ boxShadow: '0px 12px 19px 0px rgba(0, 0, 0, 0.15)' }}>
                  <EyeIcon />
                </div>
                <span className='lg:text-sm md:text-sm text-xs font-semibold capitalize my-3'>Pay for what
                  you use !</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>


      <div className='w-full flex flex-col flex-grow bg-gray-200 lg:py-10 md:py-10 p-5 lg:absolute md:absolute properties-top' style={{ alignItems: 'center' }}>
        <div className='lg:w-3/4 md:w-3/4 w-full flex flex-col'>
          <div className='w-full flex'>
            <div className='w-full flex flex-col'>
              <span className='lg:text-2xl md:text-2xl text-sm font-black capitalize mb-2'>
                list of properties
              </span>
              <div className='flex lg:w-1/12 md:w-1/12 w-2/12 border border-b-2' style={{ borderColor: '#F4511E' }} />
            </div>
          </div>

          <div className='my-5 flex flex-row w-full flex-wrap'>

            {housingItems.slice(start, end).map((item, index) => (
              <motion.div className={`lg:flex md:flex hidden flex-grow mr-10 my-3 bg-white rounded-lg ${cardFlipped ? 'card-flipped' : 'non-card-flipped'}`}
                style={{ boxShadow: '0px 34px 36px 0px rgba(0, 0, 0, 0.13)' }} key={index}
                ref={listRef}
                variants={boxVariant}
                initial="hidden"
                animate={controlList}
              >
                <div className={`flex flex-col ${cardFlipped ? 'rotate-card' : 'non-rotate-card'}`} style={{ width: '329.7px' }}>
                  <Image
                    src={item.image}
                    alt="Items-logo"
                    className="dark:invert rounded-t-lg"
                    width={329.7}
                    height={283}
                    priority
                  />

                  <div className='my-4 w-full px-3 flex flex-col'>
                    <span className='font-black text-sm capitalize'>2578 Folsom street, san francisco, CA, 94110</span>
                    <div className='my-4 flex flex-col'>
                      <span className='text-xs' style={{ color: '#818181' }}>Private Room</span>
                      <span className='text-base font-semibold' style={{ color: '#F4511E' }}>$1200/month</span>
                    </div>
                  </div>

                  <div className='w-full border-t -mt-2 flex'>
                    <div className='flex flex-grow p-3 border-r justify-center'>
                      <div className='flex flex-col justify-center'>
                        <BedroomIcon />
                      </div>
                      <div className='flex flex-col mx-2 justify-center'>
                        <span className='flex mx-2 text-sm font-semibold'>4</span>
                      </div>
                    </div>
                    <div className='flex flex-grow p-3 border-r justify-center'>
                      <div className='flex flex-col justify-center'>
                        <BathroomIcon />
                      </div>
                      <div className='flex flex-col mx-2 justify-center'>
                        <span className='flex mx-2 text-sm font-semibold'>2</span>
                      </div>
                    </div>
                    <div className='flex flex-grow p-3 border-r justify-center'>
                      <div className='flex flex-col justify-center'>
                        <SizeIcon />
                      </div>
                      <div className='flex flex-col mx-2 justify-center'>
                        <span className='flex mx-2 text-sm font-semibold'>2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}




            {/*** FOR MOBILE SCREENS ***/}

            {housingItems.map((item, index) => (
              <div className={`lg:hidden md:hidden flex flex-grow mr-14 -ml-1 my-3 bg-white rounded-lg ${cardFlipped ? 'card-flipped' : 'non-card-flipped'}`}
                style={{ boxShadow: '0px 34px 36px 0px rgba(0, 0, 0, 0.13)' }} key={`${index}-1`}
              >
                <div className={`flex flex-col ${cardFlipped ? 'rotate-card' : 'non-rotate-card'}`} style={{ width: '329.7px' }}>
                  <Image
                    src={item.image}
                    alt="Items-logo"
                    className="dark:invert rounded-t-lg"
                    width={329.7}
                    height={283}
                    priority
                  />

                  <div className='my-4 w-full px-3 flex flex-col'>
                    <span className='font-black text-sm capitalize'>2578 Folsom street, san francisco, CA, 94110</span>
                    <div className='my-4 flex flex-col'>
                      <span className='text-xs' style={{ color: '#818181' }}>Private Room</span>
                      <span className='text-base font-semibold' style={{ color: '#F4511E' }}>$1200/month</span>
                    </div>
                  </div>

                  <div className='w-full border-t -mt-2 flex'>
                    <div className='flex flex-grow p-3 border-r justify-center'>
                      <div className='flex flex-col justify-center'>
                        <BedroomIcon />
                      </div>
                      <div className='flex flex-col mx-2 justify-center'>
                        <span className='flex mx-2 text-sm font-semibold'>4</span>
                      </div>
                    </div>
                    <div className='flex flex-grow p-3 border-r justify-center'>
                      <div className='flex flex-col justify-center'>
                        <BathroomIcon />
                      </div>
                      <div className='flex flex-col mx-2 justify-center'>
                        <span className='flex mx-2 text-sm font-semibold'>2</span>
                      </div>
                    </div>
                    <div className='flex flex-grow p-3 border-r justify-center'>
                      <div className='flex flex-col justify-center'>
                        <SizeIcon />
                      </div>
                      <div className='flex flex-col mx-2 justify-center'>
                        <span className='flex mx-2 text-sm font-semibold'>2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}


            <div className='flex w-full my-7 justify-center'>
              <div className={`w-max p-3 flex flex-col justify-center ${paginationItem === 1 ? 'bg-disabled' : 'bg-white cursor-pointer text-flame'}`}
                onClick={() => decreasePagination(paginationItem)}>
                <span className='text-sm font-black'>Prev</span>
              </div>
              <div className={`w-max py-3 px-3 border ${paginationItem === 1 ? 'bg-flame text-white' : 'bg-white text-flame'}`}>
                <span className='text-sm font-black'>1</span>
              </div>
              <div className={`w-max py-3 px-3 border ${paginationItem === 2 ? 'bg-flame text-white' : 'bg-white text-flame'}`}>
                <span className='text-sm font-black'>2</span>
              </div>
              <div className={`w-max py-3 px-3 border ${paginationItem === 3 ? 'bg-flame text-white' : 'bg-white text-flame'}`}>
                <span className='text-sm font-black'>3</span>
              </div>
              <div className={`w-max p-3 flex flex-col justify-center ${paginationItem === 3 ? 'bg-disabled' : 'bg-white cursor-pointer text-flame'}`}
                onClick={() => increasePagination(paginationItem)}>
                <span className='text-sm font-black'>Next</span>
              </div>
            </div>

          </div>

        </div>
      </div>



      <div className='w-full flex flex-col flex-grow bg-white lg:py-10 md:py-10 p-5 lg:absolute md:absolute more-data' style={{ alignItems: 'center' }}>
        <div className='lg:w-3/4 md:w-3/4 w-full flex flex-col'>
          <div className='w-full flex lg:py-5 md:py-5'>
            <div className='w-max flex flex-col'>
              <Image
                src="/9f6505153b32bd3b444979b691a4ed6f.jpg"
                alt="Flexible Leases"
                className="dark:invert lg:flex md:flex hidden"
                width={250}
                height={334}
                style={{ borderRadius: '20px' }}
                priority
              />
              <Image
                src="/7eb95e09f92ebab98ed925ba5026cc52.jpg"
                alt="Monthly House Cleaning"
                className="dark:invert my-2 lg:flex md:flex hidden"
                width={212}
                height={285}
                style={{ borderRadius: '20px' }}
                priority
              />
            </div>
            <div className='w-max flex flex-col'>
              <Image
                src="/c42022124af09f248749ab4364b1e61f.jpg"
                alt="Flexible Leases"
                className="dark:invert mx-2 lg:flex md:flex hidden"
                width={250}
                height={334}
                style={{ borderRadius: '20px' }}
                priority
              />
              <Image
                src="/9aa4a08d0267c89e61eef63089339b0f.jpg"
                alt="Monthly House Cleaning"
                className="dark:invert my-2 mx-3 lg:flex md:flex hidden"
                width={338}
                height={356}
                style={{ borderRadius: '20px' }}
                priority
              />
            </div>
            <div className='w-max flex flex-col'>
              <div
                className="flex w-full justify-center"
                style={{ margin: 0, alignItems: 'center', minHeight: '70vh', position: 'relative' }}
              >
                <div className="w-3/4 flex flex-col justify-center items-center">
                  <span className='lg:text-4xl md:text-3xl text-xl font-black'>Flexibility and options to suit your lifestyle.</span>
                  <span className='text-lg my-4'>You need it? We got it.
                    We make finding your next home easy, comfortable, and simple.
                    From our happiness guarantee to our selective roommate finder option.
                    We provide you the flexibility that you most desire.</span>
                  <div className='flex my-4 w-max py-3 px-5 cursor-pointer bg-flame rounded-md justify-center'>
                    <span className='text-base text-white'>
                      Search Rooms
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col">
            <p className='lg:text-xl md:text-xl text-base mt-5 font-black text-center mb-3'>
              Your property with us and be Confident that Your Room will be Filled Out!
            </p>
            <div className='w-full flex flex-col my-3 p-6 rounded-md' style={{ boxShadow: '0px 4px 63px 0px rgba(0, 0, 0, 0.15)' }}>
              <p className='lg:text-xl md:text-xl text-base font-black text-flame mb-5 text-center'>Add A New Property</p>
              <div className='w-full flex my-3 flex-col justify-center'>
                <div className='w-full flex lg:flex-row md:flex-row flex-col'>
                  <InputField inputClass="flex flex-grow p-3 rounded-md mx-4 bg-gray-200" placeholder="Enter Name" label="Name" />
                  <InputField inputClass="flex flex-grow p-3 rounded-md mx-4 bg-gray-200" class="lg:flex md:flex hidden" placeholder="Enter Address" label="Address" />
                  <div className='my-3 lg:hidden md:hidden'>
                    <InputField inputClass="flex flex-grow p-3 rounded-md mx-4 bg-gray-200" placeholder="Enter Address" label="Address" />
                  </div>
                  <InputField inputClass="flex flex-grow p-3 rounded-md mx-4 bg-gray-200" placeholder="Enter Unit" label="Unit Number" />
                </div>
                <div className='w-full flex lg:flex-row md:flex-row flex-col lg:my-4 md:my-4'>
                  <InputField inputClass="flex flex-grow p-3 rounded-md mx-4 bg-gray-200" class="lg:flex md:flex hidden" placeholder="Enter City" label="City" />
                  <div className='my-3 lg:hidden md:hidden'>
                    <InputField inputClass="flex flex-grow p-3 rounded-md mx-4 bg-gray-200" placeholder="Enter City" label="City" />
                  </div>
                  <InputField inputClass="flex flex-grow p-3 rounded-md mx-4 bg-gray-200" placeholder="Enter State" label="State" />
                  <div className='my-3 lg:hidden md:hidden'>
                    <InputField inputClass="flex flex-grow p-3 rounded-md mx-4 bg-gray-200" placeholder="Enter Room Type" label="Room Type" />
                  </div>
                  <InputField inputClass="flex flex-grow p-3 rounded-md mx-4 bg-gray-200" class="lg:flex md:flex hidden" placeholder="Enter Room Type" label="Room Type" />
                </div>
                <div className='lg:w-1/3 md:w-1/3 w-full flex flex-row'>
                  <InputField inputClass="flex flex-grow p-3 rounded-md mx-4 bg-gray-200" placeholder="Enter Price" label="Price" />
                </div>
                <div className='w-full flex flex-row mt-10 justify-center'>
                  <div className='flex lg:w-1/3 md:w-1/3 w-full py-3 px-5 cursor-pointer bg-flame rounded-md justify-center'>
                    <span className='text-base text-white'>
                      Add New Property
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full flex lg:my-10 md:my-10 my-5 rounded-md' style={{
            backgroundColor: 'rgba(244, 81, 30, 0.07)'
          }}>
            <Carousel className="rounded-xl" autoplay loop>
              <div className='w-full p-5 flex flex-col h-full'>
                <QuoteIcon className="ml-20" />
                <div className='w-full flex flex-row items-center justify-center'>
                  <div className='lg:w-1/2 md:w-1/2 w-full flex flex-col my-4'>
                    <p className='text-lg'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam interdum nisl et nunc facilisis, a commodo eros mollis.
                      Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo.
                      Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
                    </p>
                    <div className='my-4 flex w-full justify-center rounded-full'>
                      <Image
                        src="/avatar.jpg"
                        alt="Avatar"
                        className="dark:invert my-2 rounded-full"
                        width={61}
                        height={61}
                        priority
                      />
                      <div className="flex flex-col mx-3">
                        <p className='text-sm font-black mt-4' style={{ color: '#F4511E' }}>
                          Harry Wilson
                        </p>
                        <p className='text-sm'>
                          Property Owner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full p-5 flex flex-col h-full'>
                <QuoteIcon className="ml-20" />
                <div className='w-full flex flex-row items-center justify-center'>
                  <div className='lg:w-1/2 md:w-1/2 w-full flex flex-col my-4'>
                    <p className='text-lg'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam interdum nisl et nunc facilisis, a commodo eros mollis.
                      Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo.
                      Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
                    </p>
                    <div className='my-4 flex w-full justify-center rounded-full'>
                      <Image
                        src="/avatar.jpg"
                        alt="Avatar"
                        className="dark:invert my-2 rounded-full"
                        width={61}
                        height={61}
                        priority
                      />
                      <div className="flex flex-col mx-3">
                        <p className='text-sm font-black mt-4' style={{ color: '#F4511E' }}>
                          Harry Wilson
                        </p>
                        <p className='text-sm'>
                          Property Owner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full p-5 flex flex-col h-full'>
                <QuoteIcon className="ml-20" />
                <div className='w-full flex flex-row items-center justify-center'>
                  <div className='lg:w-1/2 md:w-1/2 w-full justify-center flex flex-col my-4'>
                    <p className='text-lg'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam interdum nisl et nunc facilisis, a commodo eros mollis.
                      Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo.
                      Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
                    </p>
                    <div className='my-4 flex w-full justify-center rounded-full'>
                      <Image
                        src="/avatar.jpg"
                        alt="Avatar"
                        className="dark:invert my-2 rounded-full"
                        width={61}
                        height={61}
                        priority
                      />
                      <div className="flex flex-col mx-3">
                        <p className='text-sm font-black mt-4' style={{ color: '#F4511E' }}>
                          Harry Wilson
                        </p>
                        <p className='text-sm'>
                          Property Owner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>


          <div className='w-full flex flex-col lg:my-10 md:my-10 my-5'>
            <div className='w-full border border-3' style={{ borderColor: '#F4511E' }} />
            <div className='w-full lg:p-3 md:p-3 my-9 flex'>
              <div className='lg:flex md:flex hidden w-1/2' style={{ height: '118px' }}>
                <Image
                  src="/logo.png"
                  alt="Home Logo"
                  className="dark:invert mt-10"
                  width={200}
                  height={124}
                  priority
                />
              </div>
              <div className='flex flex-grow flex-col lg:items-end md:items-end'>
                <div className='flex flex-row pt-10'>
                  <MapIcon />
                  <p className='text-sm flex mx-3 my-1'>
                    345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                  </p>
                </div>
                <div className='flex flex-row w-full lg:justify-end md:justify-end my-4'>
                  <div className='flex w-1/2 items-center lg:pl-2 md:pl-2'>
                    <PhoneIcon />
                    <p className='text-sm flex mx-3 my-1'>
                      (123) 456-7890
                    </p>
                  </div>
                  <div className='flex'>
                    <FaxIcon />
                    <p className='text-sm flex mx-3 my-1'>
                      (123) 456-7890
                    </p>
                  </div>
                </div>
                <div className='flex flex-row justify-start lg:-ml-2 md:-ml-2 my-4'>
                  <p className='text-sm lg:flex md:flex hidden mr-3 my-1'>
                    Social Media
                  </p>
                  <Facebook className='lg:mx-3 md:mx-3 ml-1 mr-3' />
                  <Twitter className='mx-3' />
                  <Linkedin className='mx-3' />
                  <Youtube className='mx-3' />
                  <Instagram className='mx-3' />
                  <GooglePlus className='ml-3 mr-8' />
                </div>
              </div>
            </div>

            <div className='w-full flex justify-center my-3'>
              <Image
                src="/github.png"
                alt="Avatar"
                className="dark:invert my-2 rounded-full lg:flex md:flex hidden"
                width={61}
                height={61}
                priority
              />
              <Image
                src="/github.png"
                alt="Avatar"
                className="dark:invert my-2 rounded-full lg:hidden md:hidden flex"
                width={38}
                height={31}
                priority
              />
              <div className='flex flex-col justify-center mx-4'>
                <p className='text-sm font-black underline my-1'>
                  <a href="https://github.com/princeemeka965/rentals-agency" target="_blank">@princeemeka965/rentals-agency</a></p>
              </div>
            </div>

            <div className='w-full lg:flex md:flex hidden justify-center mt-5'>
              Copyright © {new Date().getFullYear()}
              <a href="https://github.com/princeemeka965" className='mx-1 underline font-bold' target="_blank">@princeemeka965</a>. All rights reserved
            </div>

            <div className='w-full lg:hidden md:hidden flex justify-center mt-5 text-sm'>
              Copyright © {new Date().getFullYear()} <a href="https://github.com/princeemeka965" className='mx-1 underline font-bold' target="_blank">@princeemeka965</a>
            </div>

          </div>


        </div>
      </div>

    </div>
  )
}
