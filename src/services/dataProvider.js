import axios from "axios";

const apiUrl = 'http://localhost:1234';


export const getAllList = async (env) => {
    const response = await axios.get(
        `${apiUrl}/${env}`
    );
    return response.data;
};

export const putData = async (env, id, data) => {
    const response = await axios.put(
        `${apiUrl}/${env}/${id}`,
        data,
    )
    return response.data;
}

export const postData = async (env, data) => {
    const response = await axios.post(
        `${apiUrl}/${env}`,
        data,
    )
    return response.data;
}