import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../types/Item';

@Component({
  selector: 'data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.sass']
})
export class DataFormComponent implements OnInit {
  @Output() addItem: EventEmitter<Item> = new EventEmitter<Item>()

  nome: string = ''
  genero: string = ''
  criador: string = ''
  tipo: string = ''
  tempoTotal?: number = 0

  ngOnInit(): void {
  }

  adicionarItem() {
    let item: Item
    if(this.tipo == 'Livro') {
      item = {
        nome: this.nome,
        genero: this.genero,
        criador: this.criador,
        tipo: this.tipo
      }
      this.addItem.emit(item)
    } else if(this.tipo == 'Musica') {
      item = {
        nome: this.nome,
        genero: this.genero,
        criador: this.criador,
        tipo: this.tipo,
        tempoTotal: this.tempoTotal
      }
      this.addItem.emit(item)
    }
  }

}
