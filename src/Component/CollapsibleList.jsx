import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io"


const CollapsibleList = ({title , children , margin}) => {


  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='overflow-hidden'>
        <button className="text-[22px] font-[200] font-['Roboto', sans-serif] hover:text-[#464646] transition-all duration-300 cursor-pointer" onClick={toggleOpen}>{title} <IoIosArrowDropdownCircle style={{marginLeft : margin}} className='inline-block'/></button>
        <div ref={contentRef} style={{ maxHeight: contentHeight }} className="transition-all duration-300 ease-in-out overflow-hidden">
            <div className="pt-1 text-[20px] font-[200] font-['Roboto', sans-serif]">
                {children}
            </div>
        </div>
    </div>
  )
}

export default CollapsibleList
