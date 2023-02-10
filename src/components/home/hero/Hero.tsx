import React from "react";
import HeaderText from "../../genral/HeaderText";

function Hero() {
    return (
        // h-screen
        <div className="pb-2">
            {/* grid sm:grid-cols-1 md:grid-cols-2 */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                    <p className="my-4 text-gray-300 font-semibold">Hellow, i am</p>
                    <p className="my-3 text-green-prim text-5xl font-bold">
                        &lt;Mohammed
                    </p>
                    <p className="text-green-prim text-5xl font-bold flex items-center">Al Mallahi 
                    {/* <img src="/data/saudi-arabia.png" alt='ksa' className="w-10 h-10 mx-1"/> */}
                     /&gt;</p>
                    <p className=" my-5 text-gray-300 font-semibold">
                        FULLSTACK DEVELOPER
                    </p>
                    <p className="my -5 text-gray-300 font-semibold text-xl capitalize">
                        Senior functional analyst
                    </p>
                    <div className="my-6 flex">
                        <div className="flex items-center text-gray-300">
                            <div className="pr-2">
                                <p className="text-6xl font-extrabold mx-2">5</p>
                            </div>
                            <div>
                                <p className="uppercase font-medium">years of experience</p>
                            </div>
                        </div>
                        <div className="flex items-center text-gray-300">
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
                            <p className="text-green-prim font-extrabold font-mono underline">
                                project
                            </p>
                        </div>
                        <div className="w-2/4 bg-[#4f4f4f] mx-2 p-2 rounded shadow-xl">
                            <p className="text-gray-300 text-lg capitalize font-extrabold font-mono">
                                fullstack developer
                            </p>
                            <p className="text-green-prim font-extrabold font-mono underline">
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
