import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://scic-job-task-server-rho.vercel.app'
})

const useAxios = () => {
    return axiosPublic;
};

export default useAxios;