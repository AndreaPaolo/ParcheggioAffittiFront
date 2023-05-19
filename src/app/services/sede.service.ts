import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Sedi } from '../model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Sede } from '../model-body';

@Injectable({
  providedIn: 'root'
})
export class SedeService {
  private apiUrl = environment.apiUrl;
  private sede:Subject<Sedi[]>;

  constructor(private http: HttpClient) {
    this.sede = new Subject<Sedi[]>;
  }

  getSedi(): Observable<Sedi[]> {
    return this.sede.asObservable();
  }

  loadSedi(): void {
    this.http.get<Sedi[]>(this.apiUrl + 'sede').subscribe(res => this.sede.next(res));
  }

  addSede(sede: Sede){
    let headers = new HttpHeaders({});
    let body = {
      'nome': sede.nome
    }

    return this.http.post(this.apiUrl + 'sede', body, { headers: headers });
  }

  modifySede(sede: Sede, id_sede: number){
    let headers = new HttpHeaders({});
    let body = {
      'nome': sede.nome
    }
    return this.http.put(this.apiUrl + 'sede/' + id_sede, body, { headers: headers });
  }

  deleteSede(id_sede: number){
    let headers = new HttpHeaders({});
    return this.http.delete(this.apiUrl + 'sede/' + id_sede, { headers: headers });
  }
}
