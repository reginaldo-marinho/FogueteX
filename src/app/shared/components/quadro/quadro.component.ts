import { Component,Input} from '@angular/core';
import { IQuadro } from 'src/app/janela/janela';


@Component({
  selector:'janela-quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.css']
})
export class QuadroComponent{

  constructor() { }
  
  @Input() Quadro!:IQuadro[];

}
