import { useGetEmployeeById } from '@/services/handler/get'
import { putData } from '@/services/handler/put'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { Spinner } from '@nextui-org/spinner'
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'

const EditEmployee = ({ id }: { id: string }) => {
    const { data, error, loading: loadData, isValidating } = useGetEmployeeById(String(id))

    const [loading, setLoading] = useState(false)

    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)
        const request = {
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value,
            email: emailRef.current?.value,
            age: ageRef.current?.value,
        }

        await putData('/api/employee', request, id).then((res) => {
            if (res.status === 200) {
                toast.success(res.message)
            } else {
                toast.error(res.message)
            }
        }).finally(() => setLoading(false))
    }

    if (loadData || isValidating) return <Spinner />

    if (error) return <p>{error}</p>

    return (
        data &&
        <form onSubmit={onSubmit}>
            <Input ref={firstNameRef} defaultValue={data.firstName} type='text' label='First Name' radius='sm' className='mb-5' />
            <Input ref={lastNameRef} defaultValue={data.lastName} type='text' label='Last Name' radius='sm' className='mb-5' />
            <Input ref={emailRef} defaultValue={data.email} type='text' label='Email' radius='sm' className='mb-5' />
            <Input ref={ageRef} defaultValue={data.age} type='number' label='Age' radius='sm' className='mb-10' />
            <Button type='submit' className='w-full py-6 rounded-md font-medium' color='primary' radius='none'>
                {loading ? <Spinner size='sm' color='current' /> : 'Submit'}
            </Button>
        </form>
    )
}

export default EditEmployee