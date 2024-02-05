import axios from "axios";

export const get = (url: string, id?:  string | null) => axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}${id !== null ? `/${id}` : ''}`).then(res => res.data)
export const del = ([url, id]: [string, string]) => axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}/${id}`).then(res => res)
export const post = ([url, request]: [string, { [key: string]: any}]) => axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, request, { headers: { "Content-Type": 'application/x-www-form-urlencoded' } })
export const put = ([url, request, id]: [string, { [key: string]: any}, id: string]) => axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}/${id}`, request, { headers: { "Content-Type": 'application/x-www-form-urlencoded' } })