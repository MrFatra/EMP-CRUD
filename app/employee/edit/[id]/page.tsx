'use client'
import { EditEmployee } from '@/components'
import Alert from '@/components/Toaster'
import { Card, CardHeader } from '@nextui-org/card'
import { Link } from '@nextui-org/link'
import { semanticColors } from '@nextui-org/theme'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { FaCircleArrowLeft } from 'react-icons/fa6'

const Page = () => {
    const params = useParams()
    const router = useRouter()
    const { id } = params

    useEffect(() => {
        toast.remove()
    }, [])

    return (
        typeof id === 'string' &&
        <>
            <Alert />
            <div className="flex flex-col items-center justify-center min-h-screen ">
                <Card className='py-10 px-5 md:w-1/3 w-1/2'>
                    <CardHeader className='flex mb-5 gap-5'>
                        <Link onPress={router.back} className='cursor-pointer'>
                            <FaCircleArrowLeft size={20} color={semanticColors.dark.foreground[500]} />
                        </Link>
                        <p className='text-lg font-semibold'>Edit Employee</p>
                    </CardHeader>
                    <EditEmployee id={String(id)} />
                </Card>
            </div>
        </>
    )
}

export default Page