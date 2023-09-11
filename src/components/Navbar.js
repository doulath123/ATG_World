import React from 'react'
import {FaSearch} from "react-icons/fa"
import {BiSolidSquare,BiSolidCircle} from "react-icons/bi"
import {GoTriangleDown} from "react-icons/go"
import {TbTriangleInvertedFilled} from "react-icons/tb"
import logo from "./Image/Main_logo.png"

function Navbar() {
  return <>
   <div className=" container  d-lg-none" style={{backgroundColor:"rgba(248, 249, 250, 1)",width:"100%", height:"48px"}}>
    <div className="d-flex justify-content-end align-items-center">
      <div className='d-flex justify-content-between align-items-center py-4' style={{width:"80px", height:"10px", top:"7px"}}>
      <BiSolidSquare style={{color:"rgba(134, 142, 150, 1)"}}/>
      <BiSolidCircle style={{color:"rgba(134, 142, 150, 1)"}}/>
      <div className="cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#signUpModal"><a href="#"><TbTriangleInvertedFilled style={{color:"rgba(134, 142, 150, 1)"}}/></a></div>
      </div>
      
      
      
    </div>
   </div>


 <nav className="container bg-white d-none d-lg-block" >
      <div className="d-flex justify-content-between align-items-center py-4">
        <div className="d-none d-lg-block">
          <img className="img-fluid " src={logo} alt="" />
        </div>
        <div
          style={{ transform: "translateX(-25px)" }}
          className="d-none d-lg-block"
        >
          <form action="#" method="POST">
            <div className="button-input position-relative ">
              <input
                style={{ borderRadius: "37px", width: "142%", backgroundColor:"rgba(242, 242, 242, 1)" }}
                type="search"
                placeholder="Search for your favorite groups in ATG"
                className="form-control shadow-none px-4 py-2 ps-5"
              />
                
              <FaSearch style={{ top: "22px", left: "23px", color:"rgba(122, 122, 122, 1)" }} className='fs-6 position-absolute translate-middle'/>
              
            </div>
          </form>
        </div>
        <div className="d-none d-lg-block">
          <h6
            className="cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#signUpModal"
          >
            Create account. <a href="#" style={{textDecoration:"none"}}> It’s free!<GoTriangleDown style={{ color: "black" }}/></a>
          </h6>
        </div>









      </div>
    </nav>
  
  </>
}

export default Navbar
