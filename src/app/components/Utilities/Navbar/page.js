import Link from "next/link"
import Inputsearch from "./inputsearch"

const Navbar = () =>{
    return <header className="bg-color-accent">
        <div className="flex md:flex-row flex-col md:items-center justify-between p-4 gap-2">
            <Link href="/" className="font-bold text-2xl">Soul Anime List</Link>
           <Inputsearch/>
        </div>
        </header>
}

export default Navbar