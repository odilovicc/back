import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;

axios.interceptors.response.use(
  function (response) {
    const res = response.data;
    if (response.status !== 200) {
      console.log("Axios interceptors response:", response);
      console.log(response.status)
      return response.status;
      
    } else {
      return response;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

