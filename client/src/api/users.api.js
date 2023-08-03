import axios from "axios";

// "https://server-dr.vercel.app/"
// "http://localhost:4000"
const BASE_URL_HOME = "https://server-dr.vercel.app";

export const getUsersReq = async () => {
	return await axios.get(`${BASE_URL_HOME}/user`);
};

export const createUserReq = async (newUser) => {
	return await axios.post(`${BASE_URL_HOME}/user`, newUser);
};
