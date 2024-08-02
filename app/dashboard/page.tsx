import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

export default async function page() {
    const { userId } = auth()
    const user=await currentUser()
    // console.log(userId);
     if(!userId || !user)
       return <div className='text-center mt-4'>Not signed in</div>

    
  return (

    <div className='text-center p-12'>
     <span className='text-lg'> Welcome to Dashboard {user.firstName}</span>
     <h2 className='mt-3 font-bold'>Your Details</h2>
     <div className='bg-slate-200 w-fit  mx-auto mt-6 p-6'>
      <p>Name: {user.username}</p>
      <p>Email: {user.emailAddresses[0].emailAddress}</p>
     
     </div>
      
    </div>
  )
}
