import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PokemonsService } from "../../../services/pokemons.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private _api: PokemonsService) {}
  name: string;
  id: number;
  title: string;
  description: string;
  error: string;
  image: string;
  isLoadingResults: boolean;

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    this.route.params.subscribe(res => (this.name = res.name));
    this._api.getPokemon(this.name).subscribe(
      res => {
        console.log(res);
        this.id = res["id"];
        this.title = res["name"];
        this.image = `https://pokeres.bastionbot.org/images/pokemon/${res["id"]}.png`;
        this.pokemonDescription(res["id"]);
      },
      err => {
        this.error = err;
        this.isLoadingResults = false;
      }
    );
  }

  pokemonDescription(id: number) {
    this._api.spicePokemon(id).subscribe(
      res => {
        this.description = res["flavor_text_entries"][1]["flavor_text"];
      },
      err => {
        this.error = err;
        this.isLoadingResults = false;
      }
    );
  }
}
