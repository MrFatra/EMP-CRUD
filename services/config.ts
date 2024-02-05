import mongoose from "mongoose"

export const connect = () => {
    try {
        const url = process.env.DB_URL
        if (!url) throw new Error('DB_URL is undefined in env!')
        mongoose.connect(url).then(() => console.log('Database Successfully Connected!'))
    } catch (err: any) {
        console.error(err.message);
    }
}