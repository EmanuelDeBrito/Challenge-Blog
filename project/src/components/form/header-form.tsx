"use client"

import { useState } from "react";
import { SearchInput } from "../ui/search-input"

export const HeaderForm = () => {
    const [search, setSearch] = useState('');

    return(
        <>
            <SearchInput 
                placeholder="Pesquisar no blog"     
                value={search}
                onChange={e => setSearch(e.target.value)}       
            />        
        </>
    )
}