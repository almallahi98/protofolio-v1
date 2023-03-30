import React, { useRef } from "react";
import "../../../index.css";


import Hamberger from '../../../assetes/menu-burger-horizontal-svgrepo-com.svg';
import Close from '../../../assetes/close-svgrepo-com.svg'
import Linkedin from "./Linkedin";
import Git from "./Git";


function Navbar() {
  const mobilMenu = useRef() as React.MutableRefObject<HTMLDivElement>;
  const mobilShow = (e:HTMLDivElement):void => {
    
    if (mobilMenu.current != null) {
      mobilMenu.current.classList.toggle('hidden');
      if(e.children[0].getAttribute('src')!== Hamberger){
      e.children[0].setAttribute('src',Hamberger)}
      else
      {
        e.children[0].setAttribute('src',Close);
      }
    }
  }
  return (

    <div className="px-4 absolute top-0 right-0 left-0 md:mx-10">
      <div className="flex items-center justify-between space-x-16">
        <div className="flex items-center space-x-20">
          <a href="/">
            <div className="sm:flex=col px-4 py-2 md:flex">
              <p className="italic uppercase text-gray-300 pr-1">mohammed</p>
              <p className="font-semibold italic uppercase text-green-prim">
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

        <div className="hidden justify-between space-x-4 text-green-prim p-2 md:flex">
        <Linkedin/>
        <Git/>
          {/* <div className="border-2 border-green-prim rounded px-2 items-center">
            <p className="uppercase font-semibold pt-1">contact me</p>
          </div> */}
        </div>
        <div className="flex w-10 h-10 justify-end md:hidden lg:hidden xl:hidden 2xl:hidden"
         onClick={e=>{
          mobilShow(e.currentTarget);
          }}>
          <img src={Hamberger} alt=''/>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-2/3 py-2 bg-gray-prim text-center text-lg italic rounded hidden" ref={mobilMenu}>
          <div className="text-gray-300 border-b py-2"><a href="/">About</a></div>
          <div className="text-gray-300 border-b py-2"><a href="/">Skills</a></div>
          <div className="text-gray-300 border-b py-2"><a href="/">Project</a></div>
          <div className="text-gray-300 border-b py-2 items-center"><Linkedin/></div>
          <div className="text-gray-300 border-b py-2 items-center"><Git/></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
