
import { postData } from '@/services/handler/post'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import React, { FormEvent, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { Spinner } from '@nextui-org/spinner'

const AddForm = () => {
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        const request = {
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value,
            email: emailRef.current?.value,
            age: ageRef.current?.value
        }
        postData('/api/employee', request).then(data => {
            console.log('data?.message: ', data)
            if (data?.status === 200) {
                toast.success(data.message)
            } else {
                toast.error(data?.message ?? 'An error occured, please try again later.')
            }
        }).finally(() => setIsLoading(false)) // revalidate the cache
    }

    return (
        <form onSubmit={handleSubmit} method='post'>
            <Input ref={firstNameRef} type='text' label='First Name' radius='sm' className='mb-5' />
            <Input ref={lastNameRef} type='text' label='Last Name' radius='sm' className='mb-5' />
            <Input ref={emailRef} type='email' label='Email' radius='sm' className='mb-5' />
            <Input ref={ageRef} type='number' label='Age' radius='sm' className='mb-10' />
            <Button type='submit' className='w-full py-6 rounded-md font-medium' color='primary' radius='none'>
                {isLoading ? <Spinner color='current' size='sm' /> : 'Submit'}
            </Button>
        </form>
    )
}

export default AddForm