import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AviationstackService {
  url: string = 'http://api.aviationstack.com/v1/';
  key: string = '9f68bedbcc76887a9bcbf0b596f8a43e';

  constructor(private http: HttpClient) {}

  flights(data: any): Observable<any> {
    const params = {
      access_key: this.key,
      flight_iata: data.flight_iata,
    };
    return this.http.get(`${this.url}flights`, { params });
  }

  airports(): Observable<any> {
    const params = {
      access_key: this.key,
      country_iso2: 'PE',
    };
    return this.http.get(`${this.url}airports`, { params });
  }
}
