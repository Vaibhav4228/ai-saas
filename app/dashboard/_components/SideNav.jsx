import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { LibraryBig, LineChart, MessagesSquare, Shield } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {
    const menuList = [
        {
            id: 1,
            name: 'my forms',
            icon: LibraryBig,
            path: '/dashboard'
        },
        {
            id: 1, 
            name: 'Responses',
            icon: MessagesSquare,
            path: '/dashboard/responses'
        },
        {
            id: 1, 
            name: 'Analytics',
            icon: LineChart,
            path: '/dashboard/analytics'
        },
        {
            id: 1, 
            name: 'Upgrade',
            icon: Shield,
            path: '/dashboard/upgrade'
        }
    ]

    const path = usePathname();
    useEffect (()=> {

    }, [path])
    return (
        <div className='h-screen shadow-md border'>
            <div className='p-5'>
                {menuList.map((menu, index) => {
                    return (
                    <h2 key={index} className={`flex items-center gap-3 p-4 mb-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer
                        ${path == menu.path && 'bg-primary text-white' }
                    `}>
                            <menu.icon />
                            {menu.name}
                        </h2>
                    )
                })}
            </div>
            <div className='fixed bottom-7 p-6 w-64'>
              <Button className= "w-full"> + Create Form</Button>  

              <div className='my-7'>
                <Progress value= {33}/>
                <h2 className='text-sm mt-2 text-gray-600' > <strong> 2  </strong> Out of <strong>3</strong> Files Created</h2>

                <h2 className='text-xs mt-2 text-gray-600' >  Upgrade Your Plan for  Unlimited AI form Build </h2>
              </div>
            </div>
        </div>
    )
}


export default SideNav
