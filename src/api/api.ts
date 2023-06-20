import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig, Cancel } from 'axios'
import { ApiRequestConfig, WithAbortFn, ApiExecutor, ApiExecutorArgs, ApiError } from './api.types'
// Default config for the axios instance
const axiosParams = {
  // Set different base URL based on the environment
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '/',
}
// Create axios instance with default params
const axiosInstance = axios.create(axiosParams)

// - returns a boolean if an error object passed is an instance of the Cancel error
// thrown by Axios . What’s more, the error will be enhanced with the aborted property.
export const didAbort = (error: unknown): error is Cancel & { aborted: boolean } =>
  axios.isCancel(error)
// - creates a new cancel source that contains a cancel method and token
// which has to be passed to a request.
const getCancelSource = () => axios.CancelToken.source()
// /asserts that an error is an Axios error and its type to ApiError .
export const isApiError = (error: unknown): error is ApiError => {
  return axios.isAxiosError(error)
}
// - a higher order function that returns another function that checks if the config
// object contains an abort property with a function as a value. If it does, we create a new cancel
// token, set it on the config object, and pass it to the abort method. Below you can see the
// code.
const withAbort = <T>(fn: WithAbortFn) => {
  const executor: ApiExecutor<T> = async (...args: ApiExecutorArgs) => {
    const originalConfig = args[args.length - 1] as ApiRequestConfig
    // Extract abort property from the config
    const { abort, ...config } = originalConfig
    // Create cancel token and abort method only if abort
    // function was passed
    if (typeof abort === 'function') {
      const { cancel, token } = getCancelSource()
      config.cancelToken = token
      abort(cancel)
    }
    try {
      if (args.length > 2) {
        const [url, body] = args
        return await fn<T>(url, body, config)
      } else {
        const [url] = args
        return await fn<T>(url, config)
      }
    } catch (error) {
      console.log('api error', error)
      // Add "aborted" property to the error if the request was cancelled
      if (didAbort(error)) {
        error.aborted = true
      }
      throw error
    }
  }

  return executor
}

const withLogger = async <T>(promise: AxiosPromise<T>) =>
  promise.catch((error: ApiError) => {
    /*
Always log errors in dev environment
if (process.env.NODE_ENV !== 'development') throw error
*/
    // Log error only if REACT_APP_DEBUG_API env is set to true
    if (!process.env.REACT_APP_DEBUG_API) throw error
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest
      // in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
    }
    console.log(error.config)
    throw error
  })

// Main api function
const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: ApiRequestConfig = {}) => withAbort<T>(axios.get)(url, config),
    delete: <T>(url: string, config: ApiRequestConfig = {}) =>
      withAbort<T>(axios.delete)(url, config),
    post: <T>(url: string, body: unknown, config: ApiRequestConfig = {}) =>
      withAbort<T>(axios.post)(url, body, config),
    patch: <T>(url: string, body: unknown, config: ApiRequestConfig = {}) =>
      withAbort<T>(axios.patch)(url, body, config),
    put: <T>(url: string, body: unknown, config: ApiRequestConfig = {}) =>
      withAbort<T>(axios.put)(url, body, config),
  }
}
export default api(axiosInstance)
