import axios from 'axios';

export const config = {
  serverHost: process.env.REACT_APP_API_URL,
  appKey: process.env.REACT_APP_APP_KEY,
  tokenString:
    JSON.parse(localStorage.getItem(`${process.env.REACT_APP_APP_KEY}`) as any)?.auth?.token ||
    JSON.parse(sessionStorage.getItem(`${process.env.REACT_APP_APP_KEY}`) as any)?.auth?.token
};

export const getRequest = async (url: string) => {
  try {
    return await axios
      .get(config.serverHost + url, {
        headers: {
          Authorization: `Bearer ${config.tokenString}` || null,
          accept: '*/*'
        }
      })
      .then((response: any) => response.data);
  } catch (err) {
    console.log(err);
  }
};

export const postRequest = async (url: string, data: any) => {
  console.log(config.tokenString);
  try {
    return await axios
      .post(config.serverHost + url, JSON.stringify(data), {
        headers: {
          Authorization: `Bearer ${config.tokenString}` || null,
          accept: '*/*',
          'Content-Type': 'application/json'
        }
      })
      .then((response: any) => response.data);
  } catch (err) {
    console.log(err);
  }
};

export const putRequest = async (url: string, id: string, data: any) => {
  try {
    return await axios
      .put(config.serverHost + url + '?id=' + id, JSON.stringify(data), {
        headers: {
          Authorization: `Bearer ${config.tokenString}` || null,
          accept: '*/*',
          'Content-Type': 'application/json'
        }
      })
      .then((response: any) => response.data);
  } catch (err) {
    console.log(err);
  }
};

export const uploadRequest = async (url: string, file: any) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    return await axios
      .post(config.serverHost + url, formData, {
        headers: {
          Authorization: `Bearer ${config.tokenString}` || null,
          accept: '*/*',
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response: any) => response.data);
  } catch (err) {
    console.log(err);
  }
};

export const deleteRequest = async (url: string, id: string, data: any) => {
  try {
    return await axios
      .delete(config.serverHost + url + '?id=' + id, {
        headers: {
          Authorization: `Bearer ${config.tokenString}` || null,
          accept: '*/*',
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
      })
      .then((response: any) => response.data);
  } catch (err) {
    console.log(err);
  }
};
