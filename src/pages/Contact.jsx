import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='bg-[#e9eef5]'>
        <div className="container mx-auto flex flex-col justify-center gap-4 items-center font-['Roboto', sans-serif] py-24">
            <h1 className="text-5xl font-[200]">Contact Us</h1>
            <p className="text-[18px] text-center w-[55%]">
              Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
              Lorem ipsum dolor sit amet.it amet.
            </p>
        </div>
      </div>
      <div className='container mx-auto '>
        <form className='mt-10'>
          <div className='flex flex-wrap justify-center items-center gap-2'>
            <div className='w-1/4'>
              <label className="block mb-2 text-[18px] font-[300] font-['Roboto', sans-serif]" htmlFor="name">Name</label>
              <input className='w-full border border-gray-300 p-2' id='name' type="text" placeholder='Name'/>
            </div>
            <div className='w-1/4'>
              <label className="block mb-2 text-[18px] font-[300] font-['Roboto', sans-serif]" htmlFor="name">Email</label>
              <input className='w-full border border-gray-300 p-2' id='name' type="text" placeholder='Email'/>
          </div>
          <div className='w-1/2'>
            <label className="block mb-2 text-[18px] font-[300] font-['Roboto', sans-serif]" htmlFor="name">Subject</label>
            <input className='w-full border border-gray-300 p-2' id='name' type="text" placeholder='Subject'/>
          </div>
          <div className='w-1/2'>
            <label className="block mb-2 text-[18px] font-[300] font-['Roboto', sans-serif]" htmlFor="name">Message</label>
            <textarea className='w-full border border-gray-300 p-2' id='name' rows="10" type="text" placeholder='Message'></textarea>
          </div>
          </div>
          <div className='text-center my-7'>
            <button className='bg-[#59ab6e] text-white text-2xl px-4 py-2 rounded-lg'>Lets Talk</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact
