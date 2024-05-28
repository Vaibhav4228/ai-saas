import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { Button } from "@/components/ui/button"
import CreateForm from './_components/CreateForm'

const Dashboard = () => {
  return (
    <div className='p-10'>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-3xl'> Dashboard</h2>
        <CreateForm/>
       
      </div>
    </div>
  )
}

export default Dashboard
