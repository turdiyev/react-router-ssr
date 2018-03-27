import axios from "axios"

const sendRequest = (url, data, headers = {}, method = "post") => {
  const options = {
    url,
    method,
    baseURL: "http://178.218.200.220:8080/",
    timeout: 40000,
    data,
    headers: {
      Accept: "application/json",
      ...headers
    }
  }
  if (method == "get") {
    options.params = data
  }
  return axios(options)
}

export function get(url, payload, headers) {
  return sendRequest(url, payload, headers, "get")
}

export function post(url, payload, headers) {
  return sendRequest(url, payload, headers)
}
