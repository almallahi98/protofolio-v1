import React, { useRef } from "react";
import "../../../index.css";
import Linkedin from '../../../assetes/linkedin-svgrepo-com.svg'
import Github from '../../../assetes/git-svgrepo-com.svg'
import Hamberger from '../../../assetes/menu-burger-horizontal-svgrepo-com.svg';
import Close from '../../../assetes/close-svgrepo-com.svg'

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

    <div className="px-4 absolute top-0 right-0 left-0">
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
          <a href="/">
            <div className="flex items-center">
              <img src={Linkedin} alt='linkedin' className="w-7 h-7" />
              <p className="uppercase ml-1 font-semibold">linledin</p>
            </div>
          </a>
          <a href="/">
            <div className="flex items-center">
              <img src={Github} alt='github' className="w-8 h8" />
              <p className="uppercase ml-1 font-semibold">github</p>
            </div>
          </a>
          <div className="border-2 border-green-prim rounded px-2 items-center">
            <p className="uppercase font-semibold pt-1">contact me</p>
          </div>
        </div>
        <div className="flex w-10 h-10 justify-end md:hidden lg:hidden xl:hidden 2xl:hidden"
         onClick={e=>{
          mobilShow(e.currentTarget);
          }}>
          <img src={Hamberger} alt=''/>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-2/3  bg-gray-400 text-center text-lg py-2 italic hidden" ref={mobilMenu}>
          <div className=""><a href="/">About</a></div>
          <div className=""><a href="/">Skills</a></div>
          <div className=""><a href="/">Project</a></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
