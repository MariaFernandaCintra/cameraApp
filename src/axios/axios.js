import axios from "axios";

const api = axios.create({  //rota base com a autenticação em headers
    baseURL: "https://io.adafruit.com/api/v2/MariaFernandaCintra/feeds/",
    headers:{
        accept: "application/json",
        "Content-Type" : "application/json",
        "X-AIO-Key":
    },
});

const sheets = {
    toggleLED: (stateLED) => api.post("botaoled/data", stateLED),
};
export default sheets;