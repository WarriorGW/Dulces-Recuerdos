import axios from "axios";

// "https://server-dr.vercel.app/"
// "http://localhost:4000"
const BASE_URL_HOME = "https://server-dr.vercel.app";
const BASE_URL_LOCAL = "http://localhost:4000";
const BASE_URL_KZA = "http://192.168.1.67:4000";

export const getUsersReq = async () => {
	return await axios.get(`${BASE_URL_HOME}/user`);
};

export const logInReq = async (user) => {
	return await axios.post(`${BASE_URL_HOME}/login`, user);
};

export const getOneUserReq = async (id) => {
	return await axios.get(`${BASE_URL_HOME}/user/${id}`);
};

export const createUserReq = async (user) => {
	return await axios.post(`${BASE_URL_HOME}/user`, user);
};
