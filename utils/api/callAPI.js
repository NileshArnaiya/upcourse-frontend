import axios from "axios"

export const myAPI = axios.create({
    baseURL: 'https://kimduyen.free.beeceptor.com/api'
})

export const getMentorsPage = async (pageParam = 1) => {
    const response = await myAPI.get(`/mentors?page=${pageParam}`)
    return response.data
}


export const getMentorDetail = async (name) => {
    const response = await myAPI.get(`/mentors/${name}`)
    return response.data
}