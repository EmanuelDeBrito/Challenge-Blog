"use client"

import { Blog } from "@/types/blog"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faHeart as faHeartFilled } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

type Props = {
    data: Blog
}

export const BlogItem = ({ data }: Props) => { 
    const [liked, setLiked] = useState(false);

    const handleLikeButton = () => {
        setLiked(!liked);
    }
    
    return(
        <div className="flex flex-col p-10 bg-[#17171A] border border-gray-600 rounded-lg transition-all hover:border-[#E07B67]">
            <div className="flex-1 flex justify-between items-center mb-[25px]">
                <div className="text-[#E07B67]">{data.data}</div>

                <FontAwesomeIcon 
                    icon={liked === true ? faHeartFilled : faHeart}
                    className={`size-6 text-[#E07B67] transition-all ease-in-out duration-400 cursor-pointer`}
                    onClick={handleLikeButton}
                    onMouseOver={() => setLiked(true)}   
                    onMouseLeave={() => setLiked(false)}             
                />
            </div>

            <div className="text-xl text-white font-bold">{data.title}</div>

            <div className="mt-4 text-[#AFABB6]">{data.description}</div>
        </div>
    )
}