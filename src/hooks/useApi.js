import axios from "axios";
import {useAuth} from "./useAuth";

export default function useApi() {
    const apiUrl = `https://api.qsales.co`
    const auth = useAuth()

    const axiosRequest = async (method, uri, data, headers) => {
        const token = auth.accessToken
        try {
            const params = method === "GET" ? data : null
            const body = method !== "GET" ? data : null
            return await axios(`${apiUrl}/${uri}`, {
                method,
                params,
                data: body,
                headers: {...headers, Authorization: `Bearer ${token}`}
            })
        } catch (e) {
            if (e?.response?.status === 401 && token) {
                auth.singOut()
            }
            throw e
        }
    }

    return {
        login: (data) =>
            axiosRequest("POST", "auth/login", data).then(({data}) => data),
        getAllStaffs: (data) =>
            axiosRequest("GET", "Staffs/GetAllStaffs", data).then(({data}) => data),
        getAllClients: (data) =>
            axiosRequest("POST", "Customers/GetPage", data).then(({data}) => data),
        getAllDocuments: (data) =>
            axiosRequest("POST", "Documents/GetDocumentsPage", data).then(({data}) => data),
    }
}