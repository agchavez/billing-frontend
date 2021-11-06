import axios from "axios";

export default axios.create({
  baseURL: "http://13.58.225.220:8000/",
  headers: {
    "Content-type": "application/json"
  }
});