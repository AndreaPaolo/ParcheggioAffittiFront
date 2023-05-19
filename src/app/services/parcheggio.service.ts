import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Parcheggi } from '../model';
import { Observable, Subject } from 'rxjs';
import { Parcheggio } from '../model-body';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParcheggioService {
  private apiUrl = environment.apiUrl;
  private parcheggi:Subject<Parcheggi[]>;

  constructor(private http: HttpClient) {
    this.parcheggi = new Subject<Parcheggi[]>;
  }

  getParcheggi(): Observable<Parcheggi[]> {
    return this.parcheggi.asObservable();
  }

  loadParcheggi(): void {
    this.http.get<Parcheggi[]>(this.apiUrl + 'parcheggio').subscribe(res => this.parcheggi.next(res));
  }

  addParcheggio(parcheggio: Parcheggio){
    let headers = new HttpHeaders({});
    let body = {
      'nome': parcheggio.nome
    }
    return this.http.post(this.apiUrl + 'parcheggio', body, { headers: headers });
  }

  modifyParcheggio(parcheggio: Parcheggio, parcheggio_id: number){
    let headers = new HttpHeaders({});
    let body = {
      'nome': parcheggio.nome
    }
    return this.http.put(this.apiUrl + 'parcheggio/' + parcheggio_id, body, { headers: headers });
  }

  deleteParcheggio(parcheggio_id: number){
    let headers = new HttpHeaders({});
    return this.http.delete(this.apiUrl + 'parcheggio/' + parcheggio_id, { headers: headers });
  }

  assignParcheggioSede(parcheggio_id: number, sede_id: number){
    let headers = new HttpHeaders({});
    return this.http.put(this.apiUrl + 'parcheggio/' + parcheggio_id + '/sede/' + sede_id, { headers: headers });
  }
}
