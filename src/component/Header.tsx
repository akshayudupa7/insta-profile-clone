import React from 'react'
import { IoIosHome } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
export default function Header() {
  return (
    <div>
        <div className=''>
           Instgram
        </div>
        <div className=''>
          <input type="text" placeholder='search'/>
        </div>
        <div className=''>
        <IoIosHome />
        <AiFillMessage />
        <FaRegHeart />

        </div>
    </div>
  )
}
