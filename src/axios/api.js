import axios from "axios";

const api = axios.create({
  //rota base com a autenticação em headers
  baseURL: "http://10.89.240.82:5000/api/v1/",
  headers: {
    accept: "application/json",
  },
});

export const createEvento = async (form, imagemUri) => {
  const data = new FormData();

  for (let key in form) {
    data.append(key, form[key]);
  }
  if (imagemUri) {
    const filename = imagemUri.split("/").pop();
    const match = /\.(\w+)$/.exec(filename);
    //[.extensão, extensão] ou seja [".png", "png"] -- precisamos do tipo de imagem sem o "."
    const type = match ? `image/${match[1]}` : `image`;

    data.append("imagem", {
      uri: imagemUri,
      name: filename,
      type: type,
    });
  }
  return api.post("/evento", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getEventos = async () => {
  return api.get("/evento"); // já retorna todos os eventos
};
