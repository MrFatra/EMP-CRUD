import { post } from "./fetcher"

export const postData = async (url: string, data: { [key: string]: any }) => {
    const params = new URLSearchParams()

    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            params.append(key, data[key])
        }
    }

    try {
        const response = await post(['/api/employee', params])
        return { message: response.data.message, status: response.status }
    } catch (err: any) {
        return { message: err.response.data.message, status: 500 }
    }
}


    // const response = await fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: params
    // })
