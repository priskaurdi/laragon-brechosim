import { Component } from '@angular/core';



@Component({
  // 'selector' define o seletor CSS que identifica este componente no template HTML
  selector: 'app-root',

  // 'templateUrl' especifica o URL do arquivo HTML que contém o template do componente
  templateUrl: './app.component.html',

  // 'styleUrls' especifica o URL do arquivo SCSS que contém os estilos do componente
  styleUrls: ['./app.component.scss'],

  standalone: true
})
export class AppComponent {
  // 'title' é uma propriedade do componente usada no template para exibir o título
  title = 'BrechoSim';
}
