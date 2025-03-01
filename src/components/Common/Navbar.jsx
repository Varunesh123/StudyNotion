import React from 'react';
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsChevronDown } from "react-icons/bs";
import { Link } from 'react-router-dom';
import logo from "../../assets/Logo/Logo-Full-Light.png";

function Navbar() {
  const matchRoute = (route) => {
    return matchPath({ path: route}, location.pathname)
  }
  return (
    <div className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
      location.pathname !== "/" ? "bg-richblack-800" : ""
    } transition-all duration-200`}>
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading='lazy'/>
        </Link>

        <nav className='hidden md:block'>
          <ul className='flex gap-x-6 text-richblack-25'>
            {
              NavbarLinks.map((link, index) => {
                <li key={index}>
                  {link.title === "Catalog" ? 
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown/>
                      <div>
                        <div>
                          {/* {loading ? (
                            <p className='text-center'>Loading...</p>
                          ) : sublinks.length ? (
                            
                          )} */}
                        </div>
                      </div>
                    </div> : 
                    <div></div>}
                </li>
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

