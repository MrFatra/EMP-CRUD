import mongoose, { Schema } from "mongoose";
import { isEmail } from 'validator'

export interface IEmployee {
    _id: string,
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}

const employeeSchema: Schema<IEmployee> = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            validate: [isEmail, 'Invalid email'],
        },
        age: { type: Number, min: 18, required: true },
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
        }
    },
)

export const Employee = mongoose.models.employees ||  mongoose.model<IEmployee>('employees', employeeSchema)