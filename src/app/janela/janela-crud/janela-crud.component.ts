import { Component,OnInit, Type} from '@angular/core';
import {JanelaService } from 'src/app/core/services/janela.service';
import { IJanela, IQuadro } from '../janela';

 
@Component({
  templateUrl: './janela-crud.component.html',
  styleUrls: ['./janela-crud.component.css'],
  providers:[JanelaService]
})
export class JanelaCrudComponent implements OnInit{

  constructor(private JS:JanelaService) { }
  
  ngOnInit(){ 
    this.EstruturaJanela_ = this.JS.Janela
    this.PreparaModelo();
  }

  EstruturaJanela_!:IJanela;
  Modelo!:IQuadro[];

  PreparaModelo(){
    this.Modelo = this.EstruturaJanela_.quadro

    try
     {
      this.Modelo.forEach((quadro_:any,index) => {

        Object.keys(quadro_).forEach((k) => {
           if (index == 0 && k!="campo" || index > 0 && k!="campo" && k!="Identificador")
                delete  quadro_[k]
        })
        
          // if (index == 0 && key != "campo")
          //     delete this.Modelo[index][key]
          // if (index != 0 && key != "campo" && key != "Identificador")
          //     delete this.Modelo[index][key]
          // if (key == "campo")
          //   (this.Modelo[index][key] as Array<object>).forEach((c,i) => {
          //     Object.keys(this.Modelo[index][key][i]).forEach(k => {
          //       if ( k != "chave" && k != "value")
          //           delete this.Modelo[index][key][i][k]
          //     })
          //   })
      }); 
    }catch(e){
        alert(e)
    }
  }
}

type Chave = "key" ;

let Valor = 33;
type  TypeValor  = typeof Valor

const cats: Record<string, number> = {
  snjsnjsns: 22
};
 

