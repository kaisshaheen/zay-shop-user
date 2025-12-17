import { useEffect, useState } from "react";
import { FaChevronLeft , FaChevronRight } from "react-icons/fa6";


const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    
       const nextDiv = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
      };
    
      const prevDiv = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
      };
    
      useEffect(()=>{
        setInterval(()=>nextDiv() , 7000)
      },[])
  return (
    <div className=' bg-[#efefef] overflow-hidden w-full h-[100vh] flex items-center px-4'>
            <div className="flex w-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              <div className=' w-full flex-shrink-0 flex justify-center items-center h-[100vh] px-2'>
                <button onClick={prevDiv}><FaChevronLeft className="text-[#83b38f] text-5xl font-[900] hover:text-[#59ab6e] transition-all duration-500 mr-10"/></button>
                <div className='w-1/2 space-y-3'>
                  <h1 className="font-['Roboto', sans-serif] text-5xl font-[200] text-[#59ab6e]"><strong className="font-[500]">Zay</strong> eCommerce</h1>
                  <h3 className="font-['Roboto', sans-serif] text-4xl w-[90%] font-[300]">Tiny and Perfect eCommerce Template</h3>
                  <p className="font-['Roboto', sans-serif] text-[20px] font-[300] w-[90%]">
                    Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). 
                    This template is 100% free provided by <a className="underline text-[#59ab6e]" rel="sponsored"  href="https://templatemo.com" target="_blank">TemplateMo</a> website. 
                    Image credits go to <a className="underline text-[#59ab6e]" rel="sponsored"  href="https://stories.freepik.com/" target="_blank"> Freepik Stories</a>,
                    <a className="underline text-[#59ab6e]" rel="sponsored"  href="https://unsplash.com/" target="_blank"> Unsplash</a> and
                    <a className="underline text-[#59ab6e]" rel="sponsored"  href="https://icons8.com/" target="_blank"> Icons 8</a>.                 
                  </p>
                </div>
                <div className='w-1/2'>
                  <img src="/img/banner_img_01.jpg" alt="hero" />
                </div>
                <button onClick={nextDiv}><FaChevronRight className="text-[#83b38f] text-5xl font-[900] hover:text-[#59ab6e] transition-all duration-500"/></button>         
              </div>
              <div className=' w-full flex-shrink-0 flex justify-center items-center h-[100vh] px-2'>
                <button onClick={prevDiv}><FaChevronLeft className="text-[#83b38f] text-5xl font-[900] hover:text-[#59ab6e] transition-all duration-500 mr-20"/></button>
                <div className='w-1/2 space-y-3'>
                  <h1 className="font-['Roboto', sans-serif] text-5xl font-[200]">Proident occaecat</h1>
                  <h3 className="font-['Roboto', sans-serif] text-3xl font-[300]">Aliquip ex ea commodo consequat</h3>
                  <p className="font-['Roboto', sans-serif] text-[20px] font-[300]">
                    You are permitted to use this Zay CSS template for your commercial websites. 
                    You are <strong>not permitted</strong> to re-distribute the template ZIP file in any kind of template 
                    collection websites.
                  </p>
                </div>
                <div className='w-1/2'>
                  <img src="/img/banner_img_02.jpg" alt="hero" />
                </div> 
                <button onClick={nextDiv}><FaChevronRight className="text-[#83b38f] text-5xl font-[900] hover:text-[#59ab6e] transition-all duration-500"/></button>        
              </div>
              <div className=' w-full flex-shrink-0  flex justify-center items-center h-[100vh] px-2'>
                <button onClick={prevDiv}><FaChevronLeft className="text-[#83b38f] text-5xl font-[900] hover:text-[#59ab6e] transition-all duration-500 mr-20"/></button>
                <div className='w-1/2 space-y-3'>
                  <h1 className="font-['Roboto', sans-serif] text-5xl font-[200]">Repr in voluptate</h1>
                  <h3 className="font-['Roboto', sans-serif] text-3xl font-[300]">AUllamco laboris nisi ut</h3>
                  <p className="font-['Roboto', sans-serif] text-[20px] font-[300]">
                    We bring you 100% free CSS templates for your websites. 
                    If you wish to support TemplateMo, please make a small contribution 
                    via PayPal or tell your friends about our website. Thank you.              
                  </p>
                </div>
                <div className='w-1/2'>
                  <img src="/img/banner_img_03.jpg" alt="hero" />
                </div>  
                <button onClick={nextDiv}><FaChevronRight className="text-[#83b38f] text-5xl font-[900] hover:text-[#59ab6e] transition-all duration-500"/></button>
              </div>
            </div>
          </div>
  )
}

export default Hero
