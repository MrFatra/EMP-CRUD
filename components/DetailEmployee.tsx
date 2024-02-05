import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from '@nextui-org/button'
import { FaCircleInfo } from "react-icons/fa6";
import { Link } from "@nextui-org/link";
import { IEmployee } from "@/services/models/Employee";

export default function DetailEmployee({ data }: { data: IEmployee }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    return (
        <>
            <div className="flex bg-warning p-2 rounded-md gap-2 hover:cursor-pointer" onClick={onOpen}>
                <FaCircleInfo size={20} className='text-warning-foreground' />
                <p className='font-medium text-[1rem] text-warning-foreground'>Detail</p>
            </div>
            {
                data && <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1 text-center">{data.firstName + ' ' + data.lastName}</ModalHeader>
                                <ModalBody>
                                    <div className="flex gap-10">
                                        <p>Email:</p>
                                        <p>{data.email}</p>
                                    </div>
                                    <div className="flex gap-10">
                                        <p>Age:</p>
                                        <p>{data.age}</p>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            }
        </>
    );
}
