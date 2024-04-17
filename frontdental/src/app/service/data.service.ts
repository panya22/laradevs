import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url: string = 'http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) {}

  public postRequest(endPoint: string, param: string, payload: any): any {
    return this.http.post(this.url + endPoint + param, JSON.stringify(payload));
  }

  public getRequest(endPoint: string, param?: string): any {
    return this.http.get(this.url + endPoint + param);
  }
}
