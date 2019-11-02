import axios from "axios";

const localUrl = `//${window.location.host.split(":")[0]}:1111`;
const client = axios.create({
  baseURL: localUrl,
});

export default client;