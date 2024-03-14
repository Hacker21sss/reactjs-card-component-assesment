import React from 'react';
import image from "../image/img12.png";
import imag from "../image/Vector.svg";
import img from "../image/Vector2.svg";
import im from "../image/Vector 3.svg";
import menu from "../image/Menu.svg";
import "../component/Card.css";


const Card = () => {
  return (
    <div className="container flex items-center justify-center h-screen bg-black">
      <div className=" container2 w-[866px] bg-white h-[350px] overflow-hidden text-black font-inter justify-center">
        <div className='container3 flex items-center justify-center h-screen'>
          <div className="container4 absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[508px] h-[214px] border border-black rounded-3xl bg-custom-white-b shadow-2xl">
            <div className='container5 absolute w-[16px] h-[2px] top-[24px] left-[451px]'>
              <div className=''><img src={menu} alt="" /></div>
            </div>
            <div className='container6 absolute w-[103px] h-[22px] left-[187px] top-[41px] shadow-md border rounded-lg bg-custom-white-d'>
              <div className='container7  justify-center w-[71px] h-[13px] top-[46px] left-[209px] ml-4 mt-1 '>
                <p className='para font-semibold leading-13 tracking-tighter text-center font-custom text-custom-orange text-[11px] '>After Effects</p>
              </div>
            </div>
            <div className='heading'>
              <h1 className='container8 absolute w-[216px] h-[48px] top-[74px] left-[187px] leading-[24.25px] text-3xl font-semibold tracking-tighter font-Montserrat text-[25px] text-custom-blue font-custom'>Animation in UI Design (Part 2)</h1>
            </div>
            <div className='container9 absolute w-[109px] h-[18px] left-[185px] top-[150px]'>
              <div><img className='absolute' src={img} alt="" /></div>
              <div><p className='name text-custom-blue1 font-custom text-xs font-semibold leading-[13.41px] tracking-tighter ml-5 pt-0.5  '>vishal pulikottil</p></div>
            </div>
            <div className='container10 absolute w-[90px] h-[15px] left-[308px] top-[152px] '>
              <div><img className='absolute ' src={im} alt="" /></div>
              <div><p className='name2 text-custom-blue1 font-custom text-xs font-semibold leading-[13.41px] tracking-tighter ml-5 '>15 minutes</p></div>
            </div>
            <div>
              <div className="container11 absolute top-[16px] left-[4px] w-[155px] h-[181px] border border-solid border-gray-100 rounded-3xl bg-custom-white-c">
                <div><img className=' absolute top-[20px] left-[10px] h-[118px] w-[140px]   ' src={image} alt=""/></div>
                <div className=" float-right w-[31px] h-[31px]  rounded-full mr-2 mt-1.5 bg-custom-white drop-shadow-lg">
                  <div className='ml-2.5 pt-2.5 items-center '><img className='absolute' src={imag} alt="" /></div>
                </div>
              </div>
              <div className='absolute h-[4px] w-[119px] top-[166px] left-[25px] rounded-xl bg-custom-white-e '>
                <div className=' h-[4px] w-[64px] top-[166px] left-[25px] bg-custom-blue2 rounded-xl  '></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;