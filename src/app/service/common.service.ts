import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Model from '../shared/model';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { sampleData } from '../shared/sampleData';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient, private router: Router) {}

  login(httpParams: Model.LoginRequest): Observable<Model.LoginResponse> {
    const option = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    const loginUrl = environment.API_SERVER_URL + '/api/login';
    return this.http.post<Model.LoginResponse>(loginUrl, httpParams, option);
  }

  getSampleData(): Observable<any> {
    return of(sampleData);
  }
}
