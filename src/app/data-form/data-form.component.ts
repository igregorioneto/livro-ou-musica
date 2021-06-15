import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../types/Item';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  cadastro: FormGroup | null | undefined
  
  constructor(private fb: FormBuilder){
    
  }

  ngOnInit(): void {
  }

  criandoFormulario(item: Item): void {
    this.cadastro = this.fb.group({
        nome: [item.nome,[Validators.required, Validators.minLength(5), Validators.maxLength(256)]],
        genero: [item.genero,[Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
        criador: [item.genero, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
        tipo: [item.tipo, [Validators.required]]
    })
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

      this.criandoFormulario(item)
      this.addItem.emit(item)

      this.limparCampos()
    } else if(this.tipo == 'Musica') {
      item = {
        nome: this.nome,
        genero: this.genero,
        criador: this.criador,
        tipo: this.tipo,
        tempoTotal: this.tempoTotal
      }

      this.criandoFormulario(item)
      this.addItem.emit(item)
      
      this.limparCampos()
    }
  }

  limparCampos() {
    this.nome = ''
    this.genero = ''
    this.criador = ''
    this.tipo = ''
    this.tempoTotal = 0
  }

}
