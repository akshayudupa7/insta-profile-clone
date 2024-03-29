import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { BsCameraReels } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
export default function index() {
  return (
    <div className='fixed top-0 border-r-2 border-gray-200 px-4'>
        <div>
        <FaInstagram style={{fontSize:"40px",marginTop:"40px",marginBottom:"50px"}}/>
        </div>
        <div>
        <IoMdHome style={{fontSize:"40px",marginTop:"40px",marginBottom:"50px"}}/>
        </div>
        <div>
        <IoSearchSharp style={{fontSize:"40px",marginTop:"40px",marginBottom:"50px"}} />
        </div>
        <div>
        <BsCameraReels  style={{fontSize:"40px",marginTop:"40px",marginBottom:"50px"}}/>
        </div>
        <div>
        <AiFillMessage  style={{fontSize:"40px",marginTop:"40px",marginBottom:"50px"}}/>
        </div>
        <div>
        <FaRegHeart style={{fontSize:"40px",marginTop:"40px",marginBottom:"50px"}}/>
        </div>
        <div>

        </div>


    </div>
  )
}
