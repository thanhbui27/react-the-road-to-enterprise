import { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosPromise, Canceler } from 'axios'
export type { Canceler }
// creates an object type that consists of Axios API methods: get , put , patch
// , post , and delete . These are returned from the base api function and each of them is
// passed to the withAbort function.
type AxiosMethods = Pick<AxiosInstance, 'get' | 'put' | 'patch' | 'post' | 'delete'>

// narrows the functions that can be passed to the withAbort function to Axios
// methods defned in the AxiosMethods type.
export type WithAbortFn = AxiosMethods[keyof AxiosMethods]
// is a type for the function that is returned from the withAbort function. It
// contains allowed call signatures.
export type ApiExecutor<T> = {
  (url: string, body: unknown, config: ApiRequestConfig): AxiosPromise<T>
  (url: string, config: ApiRequestConfig): AxiosPromise<T>
}
// is an enhanced AxiosRequestConfig . API methods need to accept the
// abort method that is used to obtain a canceller function.
export type ApiExecutorArgs = [string, unknown, ApiRequestConfig] | [string, ApiRequestConfig]

//is basically an AxiosError .
export type ApiRequestConfig = AxiosRequestConfig & {
  abort?: (cancel: Canceler) => void
}
export type ApiError = AxiosError
