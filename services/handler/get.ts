import { useEffect } from "react"
import { get } from "./fetcher"
import useSWR from "swr"

export const useGetEmployee = () => {
    const { data, error, isLoading, isValidating } = useSWR(['/api/employee', null], ([url]) => get(url, null),
        {
            revalidateIfStale: true,
            refreshWhenHidden: false,
            revalidateOnFocus: false,
        })

    useEffect(() => {
        console.log('data?.message: ', data)
    }, [data])

    return { data: data?.data, loading: isLoading, error, isValidating }
}

export const useGetEmployeeById = (id: string) => {
    const { data, error, isLoading, isValidating } = useSWR(['/api/employee', id], ([url, id]) => get(url, id),
        {
            revalidateIfStale: true,
        })

    return { data: data?.data, loading: isLoading, error, isValidating }
}