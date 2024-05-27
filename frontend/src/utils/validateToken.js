import axios from "axios";

export const isValidToken = async (token) => {
    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:8000/api/auth/validate-jwt",
        headers: {
            Authorization:
                `Bearer ${token}`,
        },
    };

    let response = await axios.request(config)

    return response.status == 200;

};