import axios from "axios";

const localUrl = `//localhost:8000`;
const client = axios.create({
  baseURL: localUrl,
});

export default client;
