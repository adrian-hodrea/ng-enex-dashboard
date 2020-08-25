import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {
  ApiMethodPayload,
  CreateRequestPayload,
  RequestMethods,
} from './models/api-service.models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  // private apiUrl = '/api';
  private apiUrl = 'http://192.168.11.4:3000';

  constructor(private http: HttpClient) {}

  public get({ endpoint, headers }: ApiMethodPayload): Observable<any> {
    return this.createRequest({
      method: RequestMethods.GET,
      endpoint,
      headers,
    });
  }

  public patch({ endpoint, body, headers }: ApiMethodPayload): Observable<any> {
    return this.createRequest({
      method: RequestMethods.PATCH,
      endpoint,
      body,
      headers,
    });
  }

  public post({ endpoint, body, headers }: ApiMethodPayload): Observable<any> {
    return this.createRequest({
      method: RequestMethods.POST,
      endpoint,
      body,
      headers,
    });
  }

  public put({ endpoint, body, headers }: ApiMethodPayload): Observable<any> {
    return this.createRequest({
      method: RequestMethods.PUT,
      endpoint,
      body,
      headers,
    });
  }

  public delete({
    endpoint,
    body,
    headers,
  }: ApiMethodPayload): Observable<any> {
    return this.createRequest({
      method: RequestMethods.DELETE,
      endpoint,
      body,
      headers,
    });
  }

  private createRequest({
    method,
    endpoint,
    body,
    headers = {},
  }: CreateRequestPayload): Observable<any> {
    const uuid = localStorage.getItem('uuid');
    const authHeaders = { 'WWW-Authenticate': 'uuid', Authorization: uuid || '' };

    if (method === RequestMethods.GET) {
      return this.http[method](`${this.apiUrl}/${endpoint}`, {
        headers: {...headers, ...authHeaders}
      });
    }

    return this.http[method](`${this.apiUrl}/${endpoint}`, body, {
      headers: {...headers, ...authHeaders}
    });
  }
}
