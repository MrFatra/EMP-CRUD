import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import useDeleteEmployee from "@/services/handler/delete";
import { Spinner } from "@nextui-org/spinner";
import { FaTrashCan } from "react-icons/fa6";
import toast from "react-hot-toast";

export default function DeleteEmployee({ id, employeeName }: { employeeName: string, id: string }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
    const { loading, remove } = useDeleteEmployee(id)

    const handleOnPress = () => {
        remove().then(val => {
            console.log('val: ', val)
            if (val.status === 200) {
                toast.success(val.message, { duration: 3000 })
            } else {
                toast.error(val.message, { duration: 3000 })
            }
        }).finally(() => {
            onClose()
        })
    }

    return (
        <>
            <div className="flex bg-danger p-2 rounded-md gap-2 hover:cursor-pointer" onClick={onOpen}>
                <FaTrashCan size={20} className='text-danger-foreground' />
                <p className='font-medium text-[1rem] text-danger-foreground'>Delete</p>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">Warning</ModalHeader>
                        <ModalBody>
                            <p>Are you sure want to remove this employee?</p>
                            <p className="font-semibold text-lg">" {employeeName} "</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button className="text-foreground font-medium bg-red-500" onPress={onClose}>
                                No
                            </Button>
                            <Button className="bg-transparent text-primary-500 font-medium hover:bg-primary-500 hover:text-foreground" color="primary" radius="sm" onPress={handleOnPress}>
                                {loading ? <Spinner size="sm" color="current" /> : 'Yeah'}
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
}
