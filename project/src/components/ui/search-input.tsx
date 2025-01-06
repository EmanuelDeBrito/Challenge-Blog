"use client"

import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChangeEvent } from "react"

type Props = {
    placeholder: string,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ placeholder, value, onChange }: Props) => {
    return(
        <div className="flex items-center gap-5 h-[65px] w-full px-8 bg-[#202024] text-[#AFABB6] border-2 border-[#17171A] rounded-lg transition-all ease-in-out has-[:focus]:border-[#E07B67]">
            <FontAwesomeIcon 
                icon={faSearch}
                className="size-6 text-[#E07B67]"
            />            
            <input 
                className="flex-1 bg-transparent text-lg outline-none border-0"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}