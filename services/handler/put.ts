import { mutate } from "swr"
import { get, put } from "./fetcher"

export const putData = async (url: string, data: { [key: string]: any }, id: string) => {
    const params = new URLSearchParams()

    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            params.append(key, data[key])
        }
    }

    try {
        const response = await put([url, params, id])
        await mutate(['/api/employee', null])
        
        return { message: response.data.message, status: response.status }
    } catch (err: any) {
        return { message: err.response.data.message, status: 500 }
    }
}