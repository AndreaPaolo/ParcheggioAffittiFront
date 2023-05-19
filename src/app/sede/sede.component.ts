import { Component } from '@angular/core';
import { Sedi } from '../model';
import { SedeService } from '../services/sede.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Sede } from '../model-body';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent {
  sedi: Sedi[] = [];
  sede: Sede = new Sede();

  //modal
  nome:string = '';
  sede_id:number = 0;
  p: any;
  modify: any;

  constructor (private sedeService:SedeService, private modalService: NgbModal){}

  ngOnInit(){
    this.sede = new Sede();
    this.sedeService.getSedi().subscribe((data: Sedi[]) => {
      this.sedi = data;
    });
    this.sedeService.loadSedi();
  }

  addSede(){
    this.sede.nome = this.nome;
    this.sedeService.addSede(this.sede).subscribe(() => {
      this.sedeService.loadSedi();
      this.modalService.dismissAll('Reason');
    });
  }

  modifySede(){
    this.sede.nome = this.nome;
    this.sedeService.modifySede(this.sede, this.sede_id).subscribe(() => {
      this.sedeService.loadSedi();
      this.modalService.dismissAll('Reason');
    });
  }

  deleteSede(id_sede: any){
    this.sedeService.deleteSede(id_sede).subscribe(() => {
      this.sedeService.loadSedi();
      this.modalService.dismissAll('Reason');
    });
  }

  //Modal
  open(content: any){
    this.nome = '';
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-titile'});
  }

  openSedeModify(modify: any, id_sede: any){
    this.sede_id = id_sede;
    for(let s of this.sedi){
      if(this.sede_id == s.id){
        this.nome = s.nome;
      }
    }
    this.modalService.open(modify, {ariaLabelledBy: 'modal-basic-titile'});
  }
}
