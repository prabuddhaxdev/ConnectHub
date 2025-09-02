import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-indigo-500'>ConnectHub</h1>
      <Button>Hello</Button>
      <UserButton/>
      <ModeToggle/>
    </div>

  )
}

export default Page