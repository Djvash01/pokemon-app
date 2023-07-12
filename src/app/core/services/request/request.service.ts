import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private readonly http: HttpClient) { }

  public post<T, K>(url: string, body: K): Observable<T> {
    return this.http.post<T>(url, body);
  }

  public get<T>(url: string, params?: HttpParams ): Observable<T> {
    return this.http.get<T>(url, { params });
  }

  public put<T, K>(url: string, body: K, params?: HttpParams): Observable<T> {
    return this.http.put<T>(url, body, { params });
  }

  public delete<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.delete<T>(url, { params });
  }
}
