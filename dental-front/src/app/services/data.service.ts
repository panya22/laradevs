import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url: string = 'http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) {}

  public postRequest(endPoint: string, request: any): any {
    return this.http.post(this.url + endPoint, request);
  }

  public getRequest(endPoint: string): any {
    return this.http.get(this.url + endPoint);
  }
}
