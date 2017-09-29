// IMPORT DI DIVERSI TIPI (core, http, router)

import { Component } from '@angular/core';

// METADATI E TEMPLATE (html)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []          //LISTA DEI SERVIZI
})


// CLASSI E METODI

export class AppComponent {
  title = 'Mensa INPS';
}
