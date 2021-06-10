import { Component } from '@angular/core';
import { Item } from './types/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  Livro: string = 'Livro'
  Musica: string = 'Musica'

  itensLivro: Item[] = []
  itensMusica: Item[] = []

  constructor() {

  }

  addItem(item: Item) {
    console.log(item)
  }

  deleteItem(item: Item) {
    console.log(item)
  }
}
