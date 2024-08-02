import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

export default async function page() {
    const { userId } = auth()
    console.log(userId);
     if(!userId) return <div>Not signed in</div>

    //  const user=await currentUser()
    //  console.log(user);
  return (
    <div>
      This is Dashboard
    </div>
  )
}
