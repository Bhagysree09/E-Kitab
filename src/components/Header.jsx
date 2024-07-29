import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-slate-900 p-4">
    <div className="max-w-[1240px]  py-[20px] flex  justify-between border-black mx-auto items-center">
      <div className=" font-bold text-3xl text-white">
        <Link to="/" >LOGO</Link>
      </div>

      {
      toggle ?
      
      
      (
        <AiOutlineClose
          onClick={() => setToggle(!toggle)}
          className="text-3xl md:hidden block text-white"
        />
      )
      
     : 
     
     (
      <AiOutlineMenu
        onClick={() => setToggle(!toggle)}
        className="text-3xl md:hidden block text-white"
      />
    ) }

      <ul className="text-xl font-semibold hidden md:flex gap-10 text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>

        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        </ul>



        {/* /*Responsive menu*/ }
        <ul className={`duration-300 w-full h-screen md:hidden fixed bg-slate-400 text-xl text-white top-[105px]
         ${toggle ? 'left-[0]': 'left-[100%]'}`}>
        <li className="p-5">
          <Link to="/">Home</Link>
        </li>
        <li className="p-5">
          <Link to="/about">About</Link>
        </li>
        <li className="p-5">
          <Link to="/resources">Resources</Link>
        </li>

        <li className="p-5">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="p-5">
          <Link to="/contact">Contact</Link>
        </li>
        </ul>

</div>
</div>
  )
}

export default Header;

