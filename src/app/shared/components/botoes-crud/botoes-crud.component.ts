import { Component,Input} from '@angular/core';

@Component({
  selector:'botoes-crud',
  templateUrl: './botoes-crud.component.html',
  styleUrls: ['./botoes-crud.component.css']
})
export class BotoesCrudComponent{

  constructor() { }
  
  @Input() Botoes:any;

}
