import React from "react";
import HeaderText from "../../genral/HeaderText";
import Skill from "./skill";

function SkillList() {
    return (
        <div className="p-6 bg-[#4f4f4f]">
            <div>
                <HeaderText text="skills" />
            </div>
            <div className="p-6">
                <div className="mt-8">
                    
                    {/* <p className="uppercase text-green-prim text-lg font-semibold italic">
                        TECHNICAL SKILLS <span className="text-gray-300">()</span>
                    </p> 
                     <p className='mt-2 text-gray-300 text-lg font-semibold italic'>
                <span className='text-green-prim'>&lt;</span>Web development <span className='text-green-prim'>/&gt;</span></p>
            <p className='text-green-prim text-lg font-semibold italic'>
            &lt;<span className='text-gray-300'>front-end</span>&gt;</p> */}
                    <div className="mt-2 p-4 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-10 md:gap-8  ">
                        <Skill
                            img="https://www.svgrepo.com/show/353925/javascript.svg"
                            text="JavaScript"
                        />
                        <Skill
                            img="https://www.svgrepo.com/show/353940/jquery.svg"
                            text="Jquery"
                        />
                        <Skill
                            img="https://www.svgrepo.com/show/374032/reactjs.svg"
                            text="ReactJs"
                        />
                        <Skill
                            img="https://www.svgrepo.com/show/452185/css-3.svg"
                            text="Css"
                        />
                        <Skill
                            img="https://www.svgrepo.com/show/452228/html-5.svg"
                            text="HTML5"
                        />
                        <Skill
                            img="https://www.svgrepo.com/show/354478/typescript-icon.svg"
                            text="TypeScript"
                        />
                        <Skill
                            img="https://www.svgrepo.com/show/452184/csharp.svg"
                            text=".net Core"
                        />
                        <Skill
                            img="https://www.svgrepo.com/show/376367/express.svg"
                            text="Express js"
                        />
                        <Skill
                            img="https://www.svgrepo.com/show/376337/node-js.svg"
                            text="Node Js"
                        />
                        <Skill img="/chakraui-custom.svg" text="Chakraui" />
                        <Skill
                            img="https://www.svgrepo.com/show/374118/tailwind.svg"
                            text="tailwind"
                        />
                        <Skill
                            img="https://www.svgrepo.com/show/353498/bootstrap.svg"
                            text="Bootstrap"
                        />
                        <Skill
                            img="https://cdn.worldvectorlogo.com/logos/prisma-3.svg"
                            text="prisma"
                        />
                        <Skill
                            img="https://www.svgrepo.com/show/439233/mysql.svg"
                            text="mySql"
                        />
                        <Skill
                            img="https://www.svgrepo.com/show/473725/microsoftsqlserver.svg"
                            text="microsoft sql server"
                        />
                        <Skill img='https://www.svgrepo.com/show/475631/android-color.svg' text='Android'/>
                    </div>
                    {/* <p className='text-green-prim text-lg font-semibold italic'>&lt;<span className='text-gray-300'>front-end</span>
            /&gt;
            </p>
             <p className='mt-2 text-gray-300 text-lg font-semibold italic'>
                <span className='text-green-prim'>&lt;</span>Ui framework<span className='text-green-prim'>/&gt;</span></p>
            <div className='mt-2 grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 sm:gap-2 md:gap-8 p-4 rounded border-2 border-green-prim'>
                
            </div>
            <p className='mt-2 text-gray-300 text-lg font-semibold italic'>
                <span className='text-green-prim'>Select</span> * <span className='text-green-prim'>from</span> DB</p>
            <div className='mt-2 grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 sm:gap-2 md:gap-8  p-4 rounded border-2 border-green-prim'>
            
            </div>

            <p className='mt-2 text-gray-300 text-lg font-semibold italic'>
                <span className='text-green-prim'>function</span> backend =( <span className='text-green-prim'>server-side</span>)=&#x3E; &#x7B;</p>
            <div className='mt-2 grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 sm:gap-2 md:gap-8 p-4 rounded border-2 border-green-prim'>
            <Skill img='https://www.svgrepo.com/show/452184/csharp.svg' text='.net Core'/>
            <Skill img='https://www.svgrepo.com/show/376367/express.svg' text='Express js'/>
            <Skill img='https://www.svgrepo.com/show/376337/node-js.svg' text='Node Js'/>
            </div>
            <p className='text-gray-300 text-lg font-semibold italic'>&#x7D;</p>
            <p className='mt-2 text-gray-300 text-lg font-semibold italic'>Mobile</p>
            <div className='grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 sm:gap-2 md:gap-8 p-4 rounded border-2 border-green-prim'>
            
            </div> */}
                </div>
            </div>

            <div className="mt-6  text-gray-300">
                {/* <h2 className="text-2xl"></h2> */}
                <HeaderText text='other-skills'/>
                <ul className="ml-8 mt-4 list-disc italic">
                    <li>
                        <p>Critical thinking & Problem Solving.</p>
                    </li>
                    <li>
                        <p>Communications Skills.</p>
                    </li>
                    <li>
                        <p>Ability to work effectively in groups and teams.</p>
                    </li>
                    <li>
                        <p>Fast Learning.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SkillList;
