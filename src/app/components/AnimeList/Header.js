import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) =>{
    return    <div className="p-4 justify-between flex items-center p-4">
    <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
    {linkHref && linkTitle ? 
    <Link href={linkHref} className="md:text-xl text-sm text-color-primary underline hover:text-color-accent transition-all">{linkTitle}</Link>
: null
}
    </div>
}

export default Header