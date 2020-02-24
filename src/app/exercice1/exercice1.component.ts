import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  inputType = 'Text';
  texte = 'Projet 2';

  constructor() { }

  ngOnInit() {
  }

  iclick() {
    if (this.inputType === 'Text') {
      this.inputType = 'Date';
    } else {
      this.inputType = 'Text';
    }
  }
}
