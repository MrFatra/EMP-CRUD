
import { useGetEmployee } from '@/services/handler/get'
import { IEmployee } from '@/services/models/Employee'
import { Link } from '@nextui-org/link'
import { Spinner } from '@nextui-org/spinner'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from '@nextui-org/table'
import React from 'react'
import { FaPlus, FaPencil } from 'react-icons/fa6'
import DeleteEmployee from './DeleteEmployee'
import DetailEmployee from './DetailEmployee'
import { Button } from '@nextui-org/button'

const ListEmployees = () => {

    const { data, loading, error, isValidating } = useGetEmployee()

    const columns = [
        {
            key: 'no',
            label: 'NO',
        },
        {
            key: 'firstName',
            label: 'First Name'
        },
        {
            key: 'lastName',
            label: 'Last Name'
        },
        {
            key: 'email',
            label: 'Email'
        },
        {
            key: 'age',
            label: 'Age'
        },
        {
            key: 'actions',
            label: 'Actions'
        },
    ]

    if (loading || isValidating) return <Spinner />

    if (error) return <p>{error}</p>

    return (
        data &&
        <>
            <Link href='/employee/create' color='foreground' className="flex gap-2 self-start font-semibold items-center bg-success-300 rounded-md py-2 px-3 mb-3">
                <FaPlus />
                <p>Add Employee</p>
            </Link>

            <Table aria-label="employee" isStriped radius='md'>
                <TableHeader columns={columns}>
                    {
                        (column) => <TableColumn key={column.key} className='text-center  border-current'>{column.label}</TableColumn>
                    }
                </TableHeader>
                <TableBody items={data} emptyContent={'No employees found'}>
                    {
                        (item: IEmployee) => (
                            <TableRow key={item._id}>
                                {
                                    (columnKey) => {
                                        if (columnKey === 'no') {
                                            return <TableCell className='text-center'>{data.indexOf(item) + 1}</TableCell>;
                                        } else if (columnKey === 'actions') {
                                            return (
                                                <TableCell className='flex gap-5 rounded-2xl justify-center items-center'>
                                                    <DetailEmployee data={item} />
                                                    <Link
                                                        href={`/employee/edit/${item._id}`}
                                                        className="flex bg-primary p-2 px-3 rounded-md gap-2 hover:cursor-pointer">
                                                        <FaPencil size={20} className='text-primary-foreground' />
                                                        <p className='font-medium text-[1rem] text-primary-foreground'>Edit</p>
                                                    </Link>
                                                    <DeleteEmployee id={item._id} employeeName={item.firstName + ' ' + item.lastName} />
                                                </TableCell>
                                            )
                                        }
                                        else {
                                            return <TableCell className='text-center'>{getKeyValue(item, columnKey)}</TableCell>;
                                        }
                                    }
                                }

                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default ListEmployees