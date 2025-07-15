'use client'
import { FileMagnifyingGlass } from "@phosphor-icons/react"
import Link from "next/link"

const NotFound = () => {
  return <div className='min-h-screen max-w-xl  mx-auto flex justify-center items-center'>
  <div className='flex justify-center items-center  gap-4 flex-col'>
  <FileMagnifyingGlass size={45} className="text-color-primary"/>
    <h3 className='text-color-accent text-4xl font-bold'>
        Not Found
        </h3>
        <Link href="/" className="text-color-primary hover:text-color-accent underline">Kembali</Link>
      </div>
        </div>
}

export default NotFound