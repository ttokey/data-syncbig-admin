import axios from "axios";

const apiUrl = 'http://localhost:1234';


export const getInfo = async (env) => {
    const response = await axios.get(
        `${apiUrl}/${env}`
    );
    return response.data;
};