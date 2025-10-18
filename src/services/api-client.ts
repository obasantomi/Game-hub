import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e75dc343092d4831bb9332eb0f8a0265",
  },
});
