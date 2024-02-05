import { useState } from "react"
import { del, get } from "./fetcher"
import { mutate } from "swr"

const useDeleteEmployee = (id: string) => {
    const [loading, setLoading] = useState(false)

    const remove = async () => {
        setLoading(true)
        const response = await del(['/api/employee', id])
        await mutate(['/api/employee', null])
        setLoading(false)

        return { message: response.data.message, status: response.status }
    }

    return { loading, remove }
}

export default useDeleteEmployee