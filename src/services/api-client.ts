import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2f0cfa36b4d44cb0a0767115659cee99",
  },
});
