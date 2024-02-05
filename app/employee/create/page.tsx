'use client'
import { AddForm } from '@/components'
import Alert from '@/components/Toaster'
import { Card } from '@nextui-org/card'
import { Link } from '@nextui-org/link'
import { semanticColors } from '@nextui-org/theme'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { FaCircleArrowLeft } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'

const Page = () => {

    const router = useRouter()

    useEffect(() => {
        toast.remove()
    }, [])

    return (
        <>
            <Alert />
            <div className="flex min-h-screen items-center justify-center">
                <div className='md:w-1/3 w-1/2'>
                    <Card className='py-10 px-5 rounded-md'>
                        <div className="flex items-center mb-5 gap-5">
                            <Link onPress={router.back} className='cursor-pointer'>
                                <FaCircleArrowLeft size={20} color={semanticColors.dark.foreground[500]} />
                            </Link>
                            <p className='text-lg font-semibold'>Add Employee Detail</p>
                        </div>
                        <AddForm />
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Page