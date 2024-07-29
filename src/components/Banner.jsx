import React from 'react'
import { ReactTyped } from 'react-typed'

function Banner() {
  return (
    <div className='bg-slate-900 h-screen w-full py-[100px]'>

      <div className='max-w-[1240px] mx-auto text-center  my-[100px]'>
        <div className='text-xl md:text-3xl text-white font-bold mb-2'>
          Learn with Us
        </div>

        <h2 className='text-3xl md:text-6xl text-slate-300 font-bold md:p-[24px]'>
          Grow With Us!
        </h2>

        <div className='text-xl md:text-5xl font-bold md:p-[24px] text-gray-400 ' >
          Learn
<ReactTyped
className='pl-3 text-white'
strings={["Full Stack Development", "UI/UX Designing", "IoT", "Cyber Security"]}

typeSpeed={120}
loop={true}
backSpeed={120}
/>
</div>

<button className='p-3 mt-4 rounded-lg md:text-xl text-2xl bg-white text-black'>Get Started</button>
          



    



        </div>

      
    </div>
  )
}

export default Banner
