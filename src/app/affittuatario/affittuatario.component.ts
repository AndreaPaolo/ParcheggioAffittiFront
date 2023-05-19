import { Component } from '@angular/core';
import { Affittuatari } from '../model';
import { Affittuatario } from '../model-body';
import { AffittuatarioService } from '../services/affittuatario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-affittuatario',
  templateUrl: './affittuatario.component.html',
  styleUrls: ['./affittuatario.component.css']
})
export class AffittuatarioComponent {
  affittuatari: Affittuatari[] = [];
  affittuatario: Affittuatario = new Affittuatario();

  //modal
  nome:string = '';
  cognome:string = '';
  numero_telefono:string='';
  affittuatario_id:number = 0;
  p: any;
  modify: any;

  constructor (private affittuatarioService:AffittuatarioService, private modalService:NgbModal){}

  ngOnInit(){
    this.affittuatario = new Affittuatario();
    this.affittuatarioService.getAffittuatari().subscribe((data: Affittuatari[]) => {
      this.affittuatari = data;
    });
    this.affittuatarioService.loadAffittuatari();
  }

  addAffittuatario(){
    this.affittuatario.nome = this.nome;
    this.affittuatario.cognome = this.cognome;
    this.affittuatario.numero_telefono = this.numero_telefono;
    this.affittuatarioService.addAffittuatario(this.affittuatario).subscribe(() => {
      this.affittuatarioService.loadAffittuatari();
      this.modalService.dismissAll('Reason');
    });
  }

  modifyAffittuatario(){
    this.affittuatario.nome = this.nome;
    this.affittuatario.cognome = this.cognome;
    this.affittuatario.numero_telefono = this.numero_telefono;
    this.affittuatarioService.modifyAffittuatario(this.affittuatario, this.affittuatario_id).subscribe(() => {
      this.affittuatarioService.loadAffittuatari();
      this.modalService.dismissAll('Reason');
    });
  }

  deleteAffittuatario(id_affittuatario: any){
    this.affittuatarioService.deleteAffittuatario(id_affittuatario).subscribe(() => {
      this.affittuatarioService.loadAffittuatari();
      this.modalService.dismissAll('Reason');
    });
  }

  //Modal
  open(content: any){
    this.nome = '';
    this.cognome = '';
    this.numero_telefono = '';
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-titile'});
  }

  openAffittuatarioModify(modify: any, affittuatario_id: any){
    this.affittuatario_id = affittuatario_id;
    for(let s of this.affittuatari){
      if(this.affittuatario_id == s.id){
        this.nome = s.nome;
        this.cognome = s.cognome;
        this.numero_telefono = s.numero_telefono
      }
    }
    this.modalService.open(modify, {ariaLabelledBy: 'modal-basic-titile'});
  }
}
