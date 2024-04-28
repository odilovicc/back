import axios from "axios"

// axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;

axios.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    function (response) {
      const res = response.data
      if(response.status !== 200) {
          console.log('Axios interceptors response:', response)
      } else {
          return response;
      }
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  export default axios