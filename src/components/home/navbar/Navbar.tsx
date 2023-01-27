import React, { useRef } from "react";
import "../../../index.css";

function Navbar() {
    const mobilMenu = useRef() as React.MutableRefObject<HTMLDivElement>;
    const mobilShow=()=>{
        if(mobilMenu.current != null)
        {
            mobilMenu.current.classList.toggle('hidden');
        }
    }
  return (
    
    <div className="px-4 absolute top-0 right-0 left-0">
      <div className="flex items-center justify-between space-x-10">
        <div className="flex items-center">
          <a href="/">
            <div className="sm:flex=col px-4 py-2 md:flex">
              <p className="italic uppercase text-gray-800 pr-1">mohammed</p>
              <p className="font-semibold italic uppercase text-gray-800">
                Al Mallahi
              </p>
            </div>
          </a>
          <div
            className="hidden justify-between space-x-8
                    font-semibold text-gray-300 italic md:flex"
          >
            <a href="/" className="hover:text-gray-100">
              home
            </a>
            <a href="/home" className="hover:text-gray-100">
              home
            </a>
            <a href="/ok" className="hover:text-gray-100">
              home
            </a>
          </div>
        </div>
        <div className="flex w-10 h-10 justify-end md:hidden" onClick={mobilShow}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_429_11066)">
              <path
                d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
                stroke="#292929"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_429_11066">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.000915527)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex justify-end hidden" ref={mobilMenu}>
            <div className="w-2/3  bg-gray-400 text-center text-lg py-2 italic">
            <div className=""><a href="/">home</a></div>
            <div className=""><a href="/">home</a></div>
            <div className=""><a href="/">home</a></div>
            </div>
      </div>
    </div>
  );
}

export default Navbar;
