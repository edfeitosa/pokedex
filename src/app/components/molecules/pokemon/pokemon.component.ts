import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() image: string;

  constructor() { }
  
  ngOnInit() {

  }

}
