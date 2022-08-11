import { Directive, HostListener, Input, Renderer2 } from '@angular/core';


@Directive({ selector: '[inputDirective]' })
export class InputDirective<T>{
      
      constructor(private rederer:Renderer2){}

      @Input('inputDirective') set state(campo:any) {

            const input = document.getElementById(campo.id);
            this.rederer.setStyle(input,"width",String(this.WidthInput(campo.maxlength))+"px")
            
            if (campo.required > 0)
                  this.rederer.setAttribute(input,"required","")
            
            switch (campo.type){
                  case "number": 
                         "number"
                  break;
                  case "text":
                        this.CampoText(input as HTMLInputElement,campo);
                        break;
                       
            }
      }
      private CampoText(input:HTMLInputElement,campo:any){
            this.rederer.setAttribute(input,"maxlength",campo.maxlength)
            this.rederer.setAttribute(input,"type","text")
      }
      private WidthInput(tamanho:number):number{
            return (tamanho*10)
      }

      @HostListener('blur') blur(){
            
      }
  } 
