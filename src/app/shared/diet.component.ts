import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit, OnChanges {
//DECORATOR INIZIALI
  ngOnChanges(): void {
    console.log (">> ECCHELA :" + this.dietName);
  }
//DECORATOR NESTED
  // Modo di comunicare con il containter (NESTED COMPONENT)
  @Output() 
  notifyDiet : EventEmitter<string> = new EventEmitter<string>()

  @Input() dietName:string

  constructor() { }

  onClick() {
    this.notifyDiet.emit(`I am ${this.dietName}`)
  }
  ngOnInit() {
  }

}
