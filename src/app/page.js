import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full flex flex-col h-full'>

      {/** Header Bar */}
      <div className='fixed w-full flex flex-col justify-center header-bg' style={{ alignItems: 'center' }}>
        <div className='w-3/4 flex flex-col p-3'>
          <div className='w-full flex p-3 border-b' style={{ zIndex: 5 }}>
            <div className='flex w-1/3'>
              <Image
                src="/925e51894be0ee13492b7c749ae59965.png"
                alt="Home Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </div>
            {/** Nav Bar */}
            <div className='flex flex-row -mb-2'>
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
          </div>

          <div className='w-full my-10 flex flex-row' style={{ zIndex: 5 }}>
            <div className='flex w-1/2 flex-col justify-center pt-10'>
              <span className='text-5xl font-black capitalize text-white leading-snug'>
                The most affortable place to stay in the san franciso bay area
              </span>
            </div>

            <div className='flex w-1/2 flex-col justify-center pt-5'>
              
              <div className='flex map-bg h-96 mx-8 rounded-md' />

              <div className='my-4 flex'>
                <div className='w-full bg-white rounded-md mx-8 p-3' style={{ border: '1px solid rgba(0, 0, 0, 0.20)' }}></div>
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
