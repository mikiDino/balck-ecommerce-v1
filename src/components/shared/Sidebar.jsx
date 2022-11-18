import React from 'react'
import {RiHome6Line, RiPercentLine, RiNotificationLine, RiSettings3Line} from 'react-icons/ri';
import {HiOutlineChartPie, HiOutlineMail, HiOutlineLogout} from 'react-icons/hi';


function Sidebar(props) {
    const {showMenu} = props;


  return (
    <div className={`bg-[#1f1d2b] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}>
        <div className="">

            <ul className='pl-4'>
            <li>
                <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">Logo</h1>
            </li>

            {/* home icon */}
            <li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl flex items-center'>
                <a href="" className='bg-[#ec7c6a] p-4 block rounded-xl text-white'>
                    <RiHome6Line className='text-2xl'/>
                </a>
            </li>
            
            {/*  */}
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl flex items-center group transition-colors'>
                <a href="" className='group-hover:bg-[#ec7c6a] p-4 block rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
                    <RiPercentLine className='text-2xl'/>
                </a>
            </li>

            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl flex items-center group transition-colors'>
                <a href="" className='group-hover:bg-[#ec7c6a] p-4 block rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
                    <HiOutlineChartPie className='text-2xl'/>
                </a>
            </li>

            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl flex items-center group transition-colors'>
                <a href="" className='group-hover:bg-[#ec7c6a] p-4 block rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
                    <HiOutlineMail className='text-2xl'/>
                </a>
            </li>

            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl flex items-center group transition-colors'>
                <a href="" className='group-hover:bg-[#ec7c6a] p-4 block rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
                    <RiNotificationLine className='text-2xl'/>
                </a>
            </li>

            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl flex items-center group transition-colors'>
                <a href="" className='group-hover:bg-[#ec7c6a] p-4 block rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
                    <RiSettings3Line className='text-2xl'/>
                </a>
            </li>
            </ul>

        </div>

        <div className="pl-4">
            
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl flex items-center group transition-colors'>
                <a href="" className='group-hover:bg-[#ec7c6a] p-4 block rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
                    <HiOutlineLogout className='text-2xl'/>
                </a>
            </li>
        </div>
    </div>
  )
}

export default Sidebar