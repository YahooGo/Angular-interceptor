import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetTokenService {

  constructor(private http: HttpClient) { }

  getToken( url ): Observable<any>{
    return this.http.get(url)
  }




}
