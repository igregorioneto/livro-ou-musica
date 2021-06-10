import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Item } from '../types/Item';

@Component({
  selector: 'data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.sass']
})
export class DataListComponent implements OnInit {

  @Input() dataList: Item[] = []
  @Input() dataType: string = ''
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter<Item>()

  constructor() { }

  ngOnInit(): void {
  }

  deletarItem(item: Item) {
    this.deleteItem.emit(item)
  }

}
