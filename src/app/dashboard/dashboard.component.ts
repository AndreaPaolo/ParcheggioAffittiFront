import { Component } from '@angular/core';
import { Affitti, Affittuatari, Parcheggi, Sedi } from '../model';
import { AffittoService } from '../services/affitto.service';
import { AffittuatarioService } from '../services/affittuatario.service';
import { ParcheggioService } from '../services/parcheggio.service';
import { SedeService } from '../services/sede.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  affitti: Affitti [] = [];
  sedi: Sedi [] = [];
  affittuatari: Affittuatari[] = [];
  parcheggi: Parcheggi[] = [];

  constructor(private affittoService:AffittoService, private affittuatarioService:AffittuatarioService, private parcheggioService:ParcheggioService, private sedeService:SedeService){}

  ngOnInit(){
    this.affittoService.getAffitto().subscribe((data: Affitti[]) => {
      this.affitti = data;
    });
    this.affittoService.loadAffitto();
    this.sedeService.getSedi().subscribe((data: Sedi[]) => {
      this.sedi = data;
    });
    this.sedeService.loadSedi();
    this.affittuatarioService.getAffittuatari().subscribe((data: Affittuatari[]) => {
      this.affittuatari = data;
    });
    this.affittuatarioService.loadAffittuatari();
    this.parcheggioService.getParcheggi().subscribe((data: Parcheggi[]) => {
      this.parcheggi = data;
    });
    this.parcheggioService.loadParcheggi();
  }
}
