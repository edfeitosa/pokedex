import { Component, OnInit } from "@angular/core";

import { PokemonsService } from "../../../services/pokemons.service";

@Component({
  selector: "app-pokemons",
  templateUrl: "./pokemons.component.html",
  styleUrls: ["./pokemons.component.scss"]
})
export class PokemonsComponent implements OnInit {
  dataSource: Array<any>;
  isLoadingResults: boolean;
  previous: string;
  next: string;

  constructor(private _api: PokemonsService) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this._api.getPokemons(0, 20).subscribe(
      res => {
        res["results"].map((item: any) => {
          this.getPokemon(item["name"]);
        });
        this.previous = res["previous"];
        this.next = res["next"];
        this.isLoadingResults = false;
      },
      err => {
        this.dataSource = err;
        this.isLoadingResults = false;
      }
    );
  }

  getPokemon(name: string) {
    this.dataSource = [];
    this._api.getPokemon(name).subscribe(
      res => {
        this.dataSource.push({
          id: res["id"],
          name: res["name"],
          image: `https://pokeres.bastionbot.org/images/pokemon/${res["id"]}.png`
        });
      },
      err => {
        this.dataSource = err;
        this.isLoadingResults = false;
      }
    );
  }
}
