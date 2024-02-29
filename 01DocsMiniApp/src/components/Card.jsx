import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

import {motion} from "framer-motion"

const Card = ({data , reference}) => {

    return(
        <>
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={.1} 
        dragTransition={{bounceStiffness: 100, bounceDamping: 30}}
        className="relative card w-56 h-64 rounded-[45px] text-white bg-zinc-700 px-8 py-10 overflow-hidden m-4">
            <FaRegFileAlt />
            <p className="text-sm leading-tight  mt-6 font-semibold ">{data.desc}</p>
            <div className="footer absolute bottom-0 w-full py-3 left-0   ">
                <div className="flex items-center justify-between mb-3  px-8 ">
                    <h4>{data.filesize}</h4>
                    <span className="w-6  h-6  bg-zinc-600 rounded-full flex items-center justify-center">
                    {data.close ? <IoIosClose /> : <MdOutlineFileDownload size="{20}" color='#ffffff'/>  }
                    
                    </span>
                </div>

                {
                    data.tag.isOpen && (
                        <div className={`tag w-full py-4  ${data.tagColor === 
                        "blue" ? "bg-blue-600": "bg-green-600"} flex items-center h-30 justify-center`}>
                        <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
                    </div>
                    )
                }
                
          
            </div>
            
            
        </motion.div>
        </>
    )
}

export default Card;