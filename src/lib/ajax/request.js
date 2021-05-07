const API_URL = "https://api.thecatapi.com/v1/";

const ObjToQueryParams = (obj) => {
  let query = "";
  for (let key in obj) {
    query += `${key}=${encodeURIComponent(obj[key])}&`;
  }

  return query;
};

// Make GET Request
const get = async (url, data, headers = {}) => {
  const queryParams = ObjToQueryParams(data);
  const apiUrl = API_URL + url + queryParams;
  const response = await fetch(apiUrl, { headers });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  const resData = await response.json();

  return resData;
};

// Make POST Request
const post = async (url, data, headers = {}) => {
  const response = await fetch(API_URL + url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  const resData = await response.json();

  return resData;
};

export default {
  post,
  get,
};
