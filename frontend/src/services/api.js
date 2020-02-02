const API_URL = "http://localhost:3333"

async function doFetch(url, method, data) {
  const request = {
    method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
  }

  if (method !== 'GET') {
    request.body = JSON.stringify(data); // body data type must match "Content-Type" header
  }

  const response = await fetch(url, request);

  return await response.json();
}

function buildUrl(baseUrl, path) {
  return baseUrl + path;
}

const api = {}

api.get = (route) => doFetch(buildUrl(API_URL, route), 'GET');
api.post = (route, data) => doFetch(buildUrl(API_URL, route), 'POST', data);

export default api;
