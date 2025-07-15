'use client'

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"


const Inputsearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = () => {
        if (event.key === 'Enter' || event.type === 'click'){
            event.preventDefault()
            const keyword = searchRef.current.value
            router.push(`/search/${keyword}`)
        }
    }

    

return <div className="relative">
 <input onKeyDown={handleSearch} ref={searchRef} placeholder="Cari Anime......" className="p-2 rounded w-full bg-white"/> <button onClick={handleSearch} className="absolute top-2 end-2 cursor-pointer">
 <MagnifyingGlass size={24} />
</button>
</div>
}
export default Inputsearch