import { Component } from '@angular/core';
import { Affitto } from '../model-body';
import { Affitti, Parcheggi, Affittuatari } from '../model';
import { AffittoService } from '../services/affitto.service';
import { NgbModal, NgbDateStruct, NgbCalendar, NgbDatepickerModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { ParcheggioService } from '../services/parcheggio.service';
import { AffittuatarioService } from '../services/affittuatario.service';

@Component({
  selector: 'app-affitto',
  templateUrl: './affitto.component.html',
  styleUrls: ['./affitto.component.css']
})
export class AffittoComponent {
  affitti: Affitti[] = [];
  parcheggi: Parcheggi[] = [];
  affittuatari: Affittuatari[] = [];
  affitto: Affitto = new Affitto();

  //modal
  data_inizio: any;
  data_fine: any;
  affitto_id:number = 0;
  affittuatario_id: number = 0;
  parcheggio_id: number = 0;
  p: any;
  modify: any;
  displayMonths = 2;
	navigation = 'select';
	showWeekNumbers = false;
	outsideDays = 'visible';

  constructor (private ngbDateParserFormatter: NgbDateParserFormatter, private affittoService:AffittoService, private affittuatarioService:AffittuatarioService, private parcheggioService:ParcheggioService, private modalService:NgbModal, private calendar: NgbCalendar){}

  ngOnInit(){
    this.affitto = new Affitto();
    this.affittoService.getAffitto().subscribe((data: Affitti[]) => {
      this.affitti = data;
    });
    this.affittoService.loadAffitto();
    this.parcheggioService.getParcheggi().subscribe((data: Parcheggi[]) => {
      this.parcheggi = data;
    });
    this.parcheggioService.loadParcheggi();
    this.affittuatarioService.getAffittuatari().subscribe((data: Affittuatari[]) => {
      this.affittuatari = data;
    });
    this.affittuatarioService.loadAffittuatari();
  }

  addAffitto(){
    this.affitto.data_inizio = this.ngbDateParserFormatter.format(this.data_inizio);
    this.affitto.data_fine = this.ngbDateParserFormatter.format(this.data_fine);
    this.affitto.affittuatario_id = this.affittuatario_id;
    this.affitto.parcheggio_id = this.parcheggio_id;
    this.affittoService.addAffitto(this.affitto).subscribe(() => {
      this.affittoService.loadAffitto();
      this.modalService.dismissAll('Reason');
    });
  }

  modifyAffitto(){
    this.affitto.data_inizio = this.ngbDateParserFormatter.format(this.data_inizio);
    this.affitto.data_fine = this.ngbDateParserFormatter.format(this.data_fine);
    this.affitto.affittuatario_id = this.affittuatario_id;
    this.affitto.parcheggio_id = this.parcheggio_id;
    this.affittoService.modifyAffitto(this.affitto, this.affitto_id).subscribe(() => {
      this.affittoService.loadAffitto();
      this.modalService.dismissAll('Reason');
    });
  }

  deleteAffitto(affitto_id: any){
    this.affittoService.deleteAffitto(affitto_id).subscribe(() => {
      this.affittoService.loadAffitto();
      this.modalService.dismissAll('Reason');
    });
  }

  //Modal
  open(content: any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-titile'});
  }

  openAffittoModify(modify: any, affitto_id: any){
    this.affitto_id = affitto_id;
    for(let s of this.affitti){
      if(affitto_id == s.id){
        this.data_fine = s.data_fine;
        this.data_inizio = s.data_inizio;
      }
    }
    this.modalService.open(modify, {ariaLabelledBy: 'modal-basic-titile'});
  }

  onChangeIdForAdd(event: Event, tipologia: String){
    console.log(tipologia);
    if(tipologia === 'parcheggio'){
      this.parcheggio_id = parseInt((event.target as HTMLInputElement).value);
    }else{
      this.affitto_id = parseInt((event.target as HTMLInputElement).value);
    }
  }
}
