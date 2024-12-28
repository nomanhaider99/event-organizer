import { UserTypes } from '@/types/user'
import React from 'react'
import Button from '../Button'

interface UserDetailsProps {
    user: UserTypes
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <div className='w-full flex flex-col justify-between items-center'>
        <div className='w-full flex items-center gap-2'>
            <div className='w-1/2'>
                <Button
                    content='Cancel'
                    secondary
                 />
            </div>
            <div className='w-1/2'>
                <Button
                    content='Delete'
                 />
            </div>
        </div>
    </div>
  )
}

export default UserDetails