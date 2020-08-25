export enum RequestMethods {
  GET = 'get',
  PATCH = 'patch',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete'
}

export interface ApiMethodPayload {
  endpoint: string;
  headers?: GenericHeaders;
  body?: any;
}

export interface CreateRequestPayload {
  method: string;
  endpoint: string;
  headers?: GenericHeaders;
  body?: any;
}

export interface GenericHeaders {
  [key: string]: string;
}
