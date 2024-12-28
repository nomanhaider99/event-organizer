import { UsersTable } from '@/components/ui/Invoices'
import React from 'react'

const page = () => {
  return (
    <div className='w-[80vw] flex flex-col justify-between px-4 py-4 gap-4'>
        <div className='text-xl'>Manage Users</div>
        <div className='w-full'>
            <UsersTable />
        </div>
    </div>
  )
}

export default page