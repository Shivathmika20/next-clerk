import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/nextjs'
import { auth, User } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

export default async function Header() {

  const {userId}=auth()
  return (
   
    <div className='bg-black p-4 text-white '>
     <div className='flex justify-between  max-w-5xl  mx-auto'>
     <div>
        <Link href={"/"}>Home</Link>
      </div>
     
      
      <div className='flex gap-4'>
        {userId ? 
        <div className='flex items-center gap-4'>
          <Link href='/dashboard' className=''>Dashboard</Link>
          <UserButton/>
        </div> :
        <div className='flex gap-4'>
          <Link href='/sign-up'>SignUp</Link>
          <Link href="/sign-in">SignIn</Link>
        </div> 
        }
      
      </div>
     </div>
    </div>
  )
}
