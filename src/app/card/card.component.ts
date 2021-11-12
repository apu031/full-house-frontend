import {Component, Input, OnInit} from '@angular/core';

interface Card {
  suit: string;
  number: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  card: Card = {
    suit: '♠',
    number: '9'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
