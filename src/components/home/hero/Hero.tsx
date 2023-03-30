import React from "react";
import HeaderText from "../../genral/HeaderText";

function Hero() {
    return (
        // h-screen
        <div className="pb-2">
            {/* grid sm:grid-cols-1 md:grid-cols-2 */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                    {/* <p className="my-4 text-gray-300 font-semibold font-FuzzyBubbles">Hellow, i am</p> */}
                    <p className="text-blue-prim 
                    text-5xl
                    md:text-8xl
                    font-Ubuntu
                    flex items-center">&lt;Mohammed Al Mallahi 
                    /&gt;</p>
                    <p className=" my-5 text-gray-300 font-semibold">
                        
                    </p>
                    <p className="my -5 text-gray-300 font-semibold text-xl capitalize">
                        Senior functional analyst 
                        <span className="text-transparent bg-clip-text ml-2 font-bold bg-gradient-to-b from-gray-dark-prime to-blue-prim">
                            FULLSTACK DEVELOPER</span>
                    </p>
                    <div className="my-6 flex font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-dark-prime to-blue-prim">
                        <div className="flex items-center">
                            <div className="pr-2">
                                <p className="text-6xl">5</p>
                            </div>
                            <div>
                                <p className="uppercase font-medium">years of experience</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="pr-2">
                                <p className="text-6xl font-extrabold mx-2">5</p>
                            </div>
                            <div>
                                <p className="uppercase font-medium">years of experience</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative md:order-1 bg-cover bg-center min-h-[500px]"
                style={{backgroundImage:`url('/data/Untitled-1.png')`}}
                >
                    <img src="/data/saudi-arabia.png" alt="5" className="absolute bottom-5 right-5 w-28 h-28"/>
                    
                    
                </div>
            </div>
            <div className="mt-2 p-8 grid sm:grid-cols-1 md:grid-cols-2">
                <div className="">
                    <HeaderText text="AboutMe" />
                    <p className="text-gray-300">
                        highly motivated and passioned with programming and problem-solving
                        with a strong understanding of technology and theory phases of the
                        project life cycle. attention to details I'm also a self-learner
                        this way I keep my skills up and my aims high, and ready to face the
                        new challenge.
                    </p>
                </div>
                <div className="py-6">
                    {/* about me section */}
                    <div className="flex ">
                        <div className="w-2/4 bg-[#4f4f4f] mx-2 p-2 rounded shadow-xl">
                            <p className="text-gray-300 text-lg capitalize font-extrabold font-mono">
                                fullstack developer
                            </p>
                            <p className="text-blue-prim font-extrabold font-mono underline">
                                project
                            </p>
                        </div>
                        <div className="w-2/4 bg-[#4f4f4f] mx-2 p-2 rounded shadow-xl">
                            <p className="text-gray-300 text-lg capitalize font-extrabold font-mono">
                                fullstack developer
                            </p>
                            <p className="text-blue-prim font-extrabold font-mono underline">
                                project
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
