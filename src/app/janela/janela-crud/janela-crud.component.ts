import { Component,OnInit} from '@angular/core';
import {JanelaService } from 'src/app/core/services/janela.service';
import { ModeloService } from 'src/app/core/services/modelo.service';
import { IJanela, IQuadro } from '../janela';
@Component({
  templateUrl: './janela-crud.component.html',
  styleUrls: ['./janela-crud.component.css'],
  providers:[JanelaService]
})
export class JanelaCrudComponent implements OnInit{

  constructor(private JS:JanelaService, private model:ModeloService) { }

  ngOnInit(){ 
    this.EstruturaJanela_ = this.JS.Janela
    this.PreparaModelo();
  }
  
  EstruturaJanela_!:IJanela;
  Modelo!:JSON;
  PreparaModelo(){

    this.model.Setmodelo = this.JS.Janela as IJanela;
    this.Modelo = this.model.GetModelo;
  }

}


 

