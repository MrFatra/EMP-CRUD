'use client'
import { ListEmployees } from '@/components'
import Alert from '@/components/Toaster'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

const Page = () => {

    useEffect(() => {
        toast.remove()
    }, [])

    return (
        <>
            <Alert />
            <div className="flex flex-col min-h-screen items-center px-10">
                <div className='text-2xl font-bold my-10'>Employee List</div>
                <ListEmployees />
            </div>
        </>
    )
}

export default Page