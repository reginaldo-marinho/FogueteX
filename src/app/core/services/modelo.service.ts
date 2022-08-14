import { Injectable } from '@angular/core';
import { ICampo, IJanela, IQuadro } from 'src/app/janela/janela';

@Injectable({providedIn: 'root'})
export class ModeloService {
    constructor() { }

    Modelo!:string;
    PreparaModelo(Janela:IJanela):JSON{
        this.Modelo = '';
        try
        {
            this.CriarObjetoPrincipal(Janela.quadro)
            this.Modelo = '{'+this.Modelo+'}'
        }catch(e){
            alert(e)
        }
        return JSON.parse(this.Modelo)
    }
    
    CriarObjetoPrincipal(quadro:IQuadro[]){
        quadro.forEach((quadro_,index) => {   
            if(index == 0)
            this.CriarChaveValor(quadro_.campo)
            if(index > 0)
                this.CriarIdentificador(quadro_)
        }); 
    }

    CriarChaveValor(campo:ICampo[]){
        campo.forEach((c,index) => {
            if (typeof c.value === "string")
                this.PreparaChaveValorParaString(c)
            if (typeof c.value === "number")
                this.PreparaChaveValorParaNumero(c)
            if (index < campo.length-1)
                this.Modelo = this.Modelo.concat(',')
        })
    }

    CriarIdentificador(quadro:IQuadro){
        if (quadro.Identificador)
            this.Modelo = this.Modelo.concat(',',"\"",quadro.Identificador,"\"",':', '{')
            this.CriarChaveValor(quadro.campo)
            this.Modelo = this.Modelo.concat('}')
            console.log(this.Modelo)
    }
    PreparaChaveValorParaString(c:ICampo){
        this.Modelo = this.Modelo.concat("\"",c.chave,"\"",':',"\"",c.value,"\"")
    }
    PreparaChaveValorParaNumero(c:ICampo){
        this.Modelo = this.Modelo.concat("\"",c.chave,"\"",":",c.value)
    }
}

