import { get, post } from "./HttpClient"

const PRODUCT = "product"
const CameraApi = {
  getList(data) {
    return get(`${PRODUCT}/list`, data)
  },
  createItem(data) {
    return post(`${PRODUCT}/create`, data)
  }
}

export default CameraApi
