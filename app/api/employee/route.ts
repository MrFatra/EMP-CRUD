import { connect } from "@/services/config";
import { Employee, IEmployee } from "@/services/models/Employee";
import { NextRequest, NextResponse } from "next/server";
import { isEmail } from "validator";

connect()

export async function GET() {
    try {
        const data = await Employee.find()
        return NextResponse.json(data.length > 0 ? { data } : { message: 'Empty Data' })
    } catch (err: any) {
        console.error(err.message)
        return NextResponse.json({ message: err.message })
    }
}

export async function POST(request: NextRequest) {
    try {

        const data: { [key: string]: any } = {}
        const formData = await request.formData()

        formData.forEach((value, key) => {
            data[key] = value
        })

        // email validation
        const emailUsed = await Employee.findOne({ email: data.email })
        if (emailUsed) {
            throw new Error('Email already exist.')
        }

        if (!isEmail(data.email)) {
            throw new Error('Invalid email.')
        }

        const employee = new Employee(data)

        await employee.save()
        return NextResponse.json({ message: "Employee Added!", data })
    } catch (err: any) {
        console.error(err.message)
        return NextResponse.json({ message: err.message }, { status: 500 })
    }
}