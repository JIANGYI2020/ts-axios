export type Mehod =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'pacth'
  | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: string
  data?: any
  params?: any
}
