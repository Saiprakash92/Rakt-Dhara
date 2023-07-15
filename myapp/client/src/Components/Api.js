import axios from "axios";

const baseURL = "https://rakt-dhara-w6cw.vercel.app";

export default axios.create({ baseURL: baseURL });
