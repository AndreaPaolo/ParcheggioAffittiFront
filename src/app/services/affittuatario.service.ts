import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Affittuatari } from '../model';
import { Observable, Subject } from 'rxjs';
import { Affittuatario } from '../model-body';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AffittuatarioService {
  private apiUrl = environment.apiUrl;
  private affittuatario:Subject<Affittuatari[]>;

  constructor(private http: HttpClient) {
    this.affittuatario = new Subject<Affittuatari[]>;
  }

  getAffittuatari(): Observable<Affittuatari[]> {
    return this.affittuatario.asObservable();
  }

  loadAffittuatari(): void {
    this.http.get<Affittuatari[]>(this.apiUrl + 'affittuatario').subscribe(res => this.affittuatario.next(res));
  }

  addAffittuatario(affittuatario: Affittuatario){
    let headers = new HttpHeaders({});
    let body = {
      'nome': affittuatario.nome,
      'cognome': affittuatario.cognome,
      'numero_telefono': affittuatario.numero_telefono
    }

    return this.http.post(this.apiUrl + 'affittuatario', body, { headers: headers });
  }

  modifyAffittuatario(affittuatario: Affittuatario, affittuatario_id: number){
    let headers = new HttpHeaders({});
    let body = {
      'nome': affittuatario.nome,
      'cognome': affittuatario.cognome,
      'numero_telefono': affittuatario.numero_telefono
    }
    return this.http.put(this.apiUrl + 'affittuatario/' + affittuatario_id, body, { headers: headers });
  }

  deleteAffittuatario(id_affittuatario: number){
    let headers = new HttpHeaders({});
    return this.http.delete(this.apiUrl + 'affittuatario/' + id_affittuatario, { headers: headers });
  }
}
