const API_URL = import.meta.env.DEV
  ? "http://localhost:3000/api/"
  : "https://v2-api.trilla.pro/api/";
export default API_URL;
