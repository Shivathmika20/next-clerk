import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
   
    <div className='bg-black p-4 text-white '>
     <div className='flex justify-between text-lg max-w-5xl  mx-auto'>
     <div>
        <Link href={"/"}>Home</Link>
      </div>
      <div className='flex gap-4'>
      <Link href={"/sign-up"}>SignUp</Link>
      <Link href={"/sign-in"}>SignIn</Link>
      </div>
     </div>
    </div>
  )
}
