import axios from "axios";

const baseURL = "https://rakt-dhara.vercel.app/";

export default axios.create({ baseURL: baseURL });
