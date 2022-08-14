import { Injectable } from '@angular/core';
import { IJanela } from 'src/app/janela/janela';
import {default as JanelaJSON} from  'src/app/janela/Janela.json';

@Injectable({
  providedIn: 'root',
})
export class JanelaService {
      constructor() { }
      public Janela:IJanela = JSON.parse(JSON.stringify(JanelaJSON.janela)) as IJanela;
}
