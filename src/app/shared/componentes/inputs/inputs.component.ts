import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.sass']
})
export class InputsComponent implements OnInit {

  @Input() placeholder: string = ''
  @Input() campo: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
