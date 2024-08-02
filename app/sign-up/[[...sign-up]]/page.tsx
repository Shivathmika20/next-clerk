import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function page() {
  return (
    <div className='flex justify-center items-center flex-col gap-6 mt-6'>
      <h1 className='font-bold text-lg'>This is Sign up page</h1>
      <SignUp/>
    </div>
  )
}
