import { Directive, HostListener, Input, Renderer2 } from '@angular/core';
import { ApiCrudService } from '../services/api-crud.services';

@Directive({ selector: '[buttonQuadroDiretive]' })
export class ButtonQuadroDiretive{
      
      constructor(private rederer:Renderer2,private crud: ApiCrudService){}

      @Input('buttonQuadroDiretive') set state(campo:any) {
            //document.getElementById(campo.id)?.addEventListener('click',)
      }

      @HostListener('blur') blur(){
            
      }
      @HostListener('click',['$event.currenttarget']) Click(e:Event){
            console.log(e);
      }
  } 
