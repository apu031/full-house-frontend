import { Component, OnInit } from '@angular/core';

const BASE_URL = 'http://localhost:3000';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  hands = [{
    cards: [],
    hasPairs: false,
    hasThreeOfAKind: false,
    hasFullHouse: false,
  }];

  numberOfHands = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getDeck = async () => {
    const url = BASE_URL + '/deck/get-deck';
    await window.fetch(url)
  }

  getDeal = async () => {
    const url = BASE_URL + '/deck/get-deal';
    const response = await window.fetch(url);
    const data = await response.json();
    this.numberOfHands = data.length;
    this.hands = data;
  }

}
