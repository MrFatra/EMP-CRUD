// !!! THERE ARE BUGS WHILE USING THIS CODE...
// !!! PLEASE BE AWARE
import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";

interface ApiData {
    data: any | undefined;
    message: string;
}

const useApiHandler = (url: string, config?: AxiosRequestConfig) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any>()
    const [data, setData] = useState<ApiData>({
        data: undefined,
        message: '',
    })

    const call = async (request?: { [key: string]: any }) => {
        setLoading(true)

        if (config?.method !== 'get' && config?.method !== 'delete') {
            
            const formData = new FormData()
            for (const key in request) {
                formData.append(key, request[key])
            }
        }

        const host = process.env.NEXT_PUBLIC_API_BASE_URL

        try {
            if (!host) {
                throw new Error("NO BASE_API_URL!")
            }

            const response = await axios(`${host}${url}`, {
                ...config,
                method: config?.method || 'get',
                data: config?.method !== 'get' && config?.method !== 'delete' ? request : undefined,
            })
            setData({ data: response?.data?.data, message: response?.data?.message })
        } catch (error: any) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return { loading, data, error, call }
}

export default useApiHandler
