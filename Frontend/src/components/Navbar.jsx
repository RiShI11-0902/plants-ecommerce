import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bag, user } from "../assets";
// import { Link, NavLink } from "react-router-dom";
import { GrCart } from "react-icons/gr";
// import { useSelector } from "react-redux"
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { logoutUserAsync } from "../store/slice";
// import {logo} from '../images/index'
const Navbar = () => {
  const [toggle, setToggle] = useState(true)
  const selectUser = useSelector(state => state.auth.loggedInUser)
  const [isOpen, setIsOpen] = useState(false)
  const options = ["Settings", "Sell Plants", "Logout",]
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const show = () => {
  //   if ( isOpen ) {
  //     setIsOpen( false )
  //   }
  //   setIsOpen(true );
  // }

  return (
    <>

      <div className="navbar flex items-center space-x-0 w-full mx-auto md:space-x-40 my-8">
        <div className="left  w-full flex items-center justify-evenly flex-row">
          <div className="logo font-extrabold ml-5 text-3xl ">
            Plant Com
          </div>
          <div>
            <ul className="sm:flex space-x-5 font-bold hidden md:block md:flex md:items-center md:flex-row">
              <li className="cursor-pointer"> <a href="/">Home</a></li>
              <Link to={"/products"} className="cursor-pointer" >Plants</Link>
              <li className="cursor-pointer">Plot & Planters</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <div className="text-green-950 text-2xl font-extrabold cursor-pointer  flex flex-row space-x-4" >

            </div>
            {
              selectUser ?
                <div className="flex flex-row space-x-5">
                  <p>{selectUser.name} </p>
                  <img onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)} src={user} className="w-10" alt="" /> <br />
                  <div className="flex absolute top-20 right-44 text-lg font-semibold cursor-pointer flex-col">
                    {
                      isOpen ?
                        options.map((i) => {
                          return <div>
                            <p className="" onClick={() => dispatch(logoutUserAsync())}>{i}</p>
                          </div>
                        })
                        : " "
                    }
                  </div>
                </div>
                : <button className='bg-green-500 p-2.5 px-5 rounded-full' onClick={() => navigate("/login")}>Sign in</button>
            }
          </div>
        </div>



        <div className="right-mobile  sm:block md:hidden xl:hidden 2xl:hidden ">
          <div className="nav-items my-4">
            {
              toggle ? (
                ""
              ) :
                <div className=" absolute bg-slate-500 w-full top-14 left-0 ">
                  <div className="nav-items my-4">
                    <ul className="flex flex-col space-y-5 items-center font-bold">
                      <li className="cursor-pointer"> <a href="/">Home</a></li>
                      <li>Everything's</li>
                      <Link to={"/products"} className="cursor-pointer" >Plants</Link>
                      <li>Flowers</li>
                      <li >Contact</li>
                    </ul>
                    <div>
                      {
                        selectUser ?
                          <span className="text-green-950 text-2xl font-extrabold"> Hello, {selectUser.name}</span>
                          : <button className='bg-green-500 p-2.5 px-5 rounded-full' onClick={() => navigate("/login")}>Sign in</button>
                      }
                    </div>
                  </div>
                </div>
            }
          </div>
        </div>


        <div className="md:hidden">
          {
            toggle ? <GiHamburgerMenu onClick={() => setToggle(false)} /> : <AiOutlineClose onClick={() => setToggle(true)} />
          }
        </div>

      </div >
    </>
  );
};

export default Navbar;
