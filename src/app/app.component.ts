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
    if(item.tipo == this.Livro) {
      this.itensLivro.push(item)
    } else if(item.tipo == this.Musica) {
      this.itensMusica.push(item)
    }
  }

  deleteItem(item: Item) {
    if(item.tipo == this.Livro) {
      this.itensLivro.splice(this.itensLivro.indexOf(item),1)
    } else if(item.tipo == this.Musica) {
      this.itensMusica.splice(this.itensMusica.indexOf(item),1)
    }
  }
}
