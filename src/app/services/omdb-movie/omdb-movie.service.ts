import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiKey, apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OmdbMovieService {

  constructor(
    private http: HttpClient
  ) { }

  public search(state: any): Observable<HttpResponse<any>> {
    const search = state.search;
    const page = state.page;  
    const type = state.type;
    return this.http.get<any>(apiUrl + `?s=${search}&page=${page}&type=${type}&` + apiKey);
  }

  public findById(id: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(apiUrl + `?i=${id}&` + apiKey);
  }
}
