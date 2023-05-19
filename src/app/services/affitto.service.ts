import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Affitti } from '../model';
import { Observable, Subject } from 'rxjs';
import { Affitto } from '../model-body';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AffittoService {
  private apiUrl = environment.apiUrl;
  private affitti:Subject<Affitti[]>;

  constructor(private http: HttpClient) {
    this.affitti = new Subject<Affitti[]>;
  }

  getAffitto(): Observable<Affitti[]> {
    return this.affitti.asObservable();
  }

  loadAffitto(): void {
    this.http.get<Affitti[]>(this.apiUrl + 'affitto').subscribe(res => this.affitti.next(res));
  }

  addAffitto(affitto: Affitto){
    let headers = new HttpHeaders({});
    let body = {
      'data_inizio': affitto.data_inizio,
      'data_fine': affitto.data_fine,
    }
    return this.http.post(this.apiUrl + 'affitto/parcheggio/' + affitto.parcheggio_id + '/affittuatario/' + affitto.affittuatario_id, body, { headers: headers });
  }

  modifyAffitto(affitto: Affitto, affitto_id: number){
    let headers = new HttpHeaders({});
    let body = {
      'data_inizio': affitto.data_inizio,
      'data_fine': affitto.data_fine
    }
    return this.http.put(this.apiUrl + 'affitto/' + affitto_id, body, { headers: headers });
  }

  deleteAffitto(affitto_id: number){
    let headers = new HttpHeaders({});
    return this.http.delete(this.apiUrl + 'affitto/' + affitto_id, { headers: headers });
  }
}
