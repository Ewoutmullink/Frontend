import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
@Injectable()
export class HttpService {

  private apiUrl = 'http://localhost:8080/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient){
  }

  get(path: string, id: any): Observable<any> {
    const url = `${this.apiUrl}/${path}/${id}`;
    return this.http.get<any>(url);
  }

  getAll(path: string): Observable<any> {
    const url = `${this.apiUrl}/${path}`;
    return this.http.get<any>(url);
  }

  put(path: string, object: any): Observable<any> {
    const url = `${this.apiUrl}/${path}`;
    return this.http.put(url, object, this.httpOptions);
  }

  post(path: string, object: any): Observable<any> {
    const url = `${this.apiUrl}/${path}`;
    return this.http.post<any>(url, object, this.httpOptions);
  }

  delete(path: string, id: any): Observable<any> {
    const url = `${this.apiUrl}/${path}/${id}`;
    return this.http.delete<any>(url, this.httpOptions);
  }
}
