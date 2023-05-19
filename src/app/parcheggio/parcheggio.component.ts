import { Component } from '@angular/core';
import { Parcheggio } from '../model-body';
import { Parcheggi, Sedi } from '../model';
import { ParcheggioService } from '../services/parcheggio.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SedeService } from '../services/sede.service';

@Component({
  selector: 'app-parcheggio',
  templateUrl: './parcheggio.component.html',
  styleUrls: ['./parcheggio.component.css']
})
export class ParcheggioComponent {
  parcheggio: Parcheggio = new Parcheggio();
  parcheggi: Parcheggi[] = [];
  sedi: Sedi[] = [];

  //modal
  nome:string = '';
  parcheggio_id:number = 0;
  sede_id: number = 0;
  p: any;
  modify: any;

  constructor (private parcheggioService:ParcheggioService, private sedeService:SedeService, private modalService:NgbModal){}

  ngOnInit(){
    this.parcheggio = new Parcheggio();
    this.parcheggioService.getParcheggi().subscribe((data: Parcheggi[]) => {
      this.parcheggi = data;
    });
    this.parcheggioService.loadParcheggi();
    this.sedeService.getSedi().subscribe((sedi: Sedi[]) => {
      this.sedi = sedi;
    });
    this.sedeService.loadSedi();
  }

  addParcheggio(){
    this.parcheggio.nome = this.nome;
    this.parcheggioService.addParcheggio(this.parcheggio).subscribe(async () => {
      this.parcheggioService.loadParcheggi();
      this.modalService.dismissAll('Reason');
    });
  }

  modifyParcheggio(){
    this.parcheggio.nome = this.nome;
    this.parcheggioService.modifyParcheggio(this.parcheggio, this.parcheggio_id).subscribe(() => {
      this.parcheggioService.loadParcheggi();
      this.modalService.dismissAll('Reason');
    });
  }

  deleteParcheggio(parcheggio_id: any){
    this.parcheggioService.deleteParcheggio(parcheggio_id).subscribe(() => {
      this.parcheggioService.loadParcheggi();
      this.modalService.dismissAll('Reason');
    });
  }

  assingSede(){
    this.parcheggioService.assignParcheggioSede(this.parcheggio_id, this.sede_id).subscribe(() => {
      this.parcheggioService.loadParcheggi();
      this.modalService.dismissAll('Reason');
    });
  }

  //Modal
  open(content: any){
    this.nome = '';
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-titile'});
  }

  openParcheggioModify(modify: any, parcheggio_id: any){
    this.parcheggio_id = parcheggio_id;
    for(let s of this.parcheggi){
      if(this.parcheggio_id == s.id){
        this.nome = s.nome;
      }
    }
    this.modalService.open(modify, {ariaLabelledBy: 'modal-basic-titile'});
  }

  openAssignSede(assign: any, parcheggio_id: any){
    this.parcheggio_id = parcheggio_id;
    for(let s of this.parcheggi){
      if(this.parcheggio_id == s.id){
        this.nome = s.nome;
      }
    }
    this.modalService.open(assign, {ariaLabelledBy: 'modal-basic-titile'});
  }

  onChangeIdSedeForAdd(event: Event){
    this.sede_id = parseInt((event.target as HTMLInputElement).value);
  }
}
