

const AboutHero = () => {
  return (
    <div className='bg-[#59ab6e] h-[100vh] pt-20 mb-10'>
        <div className='container mx-auto flex justify-center items-center'>   
            <div className='w-2/3 text-white space-y-5'>
                <h1 className='text-4xl font-bold'>About Us</h1>
                <p className="text-[18px] w-[85%] font-[300] font-['Roboto', sans-serif]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
                   dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                   ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className='w-1/3'>
                <img src="/src/img/about-hero.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutHero
