import { Employee } from "@/services/models/Employee";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
    const { id } = params

    try {
        const data = await Employee.findById(id)
        return NextResponse.json({ message: 'Data found!', data })
    } catch (err: any) {
        console.error(err.message)
        return NextResponse.json({ message: "Failed getting employee data!", error: err.message }, { status: 500 })
    }
}

export async function PUT(request: NextRequest, { params }: any) {
    const { id } = params

    try {
        const data: { [key: string]: any } = {}
        const formData = await request.formData()

        formData.forEach((value, key) => {
            data[key] = value
        })

        await Employee.findByIdAndUpdate(id, data)

        return NextResponse.json({ message: 'Data updated!' }, { status: 200 })

    } catch (err: any) {
        console.error(err.message)
        return NextResponse.json({ message: 'Update failed!', error: err.message }, { status: 500 })
    }

}

export async function DELETE(request: NextRequest, { params }: any) {
    const { id } = params

    try {
        await Employee.findByIdAndDelete(id)
        return NextResponse.json({ message: 'Employee deleted!' }, { status: 200 })
    } catch (err: any) {
        console.error(err.message)
        return NextResponse.json({ message: 'Delete failed!' }, { status: 500 })
    }


}