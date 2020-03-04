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
  weight: string;
  height: string;
  types: Array<any>;
  sprites: Array<any>;
  isLoadingResults: boolean;

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    this.route.params.subscribe(res => (this.name = res.name));
    this._api.getPokemon(this.name).subscribe(
      res => {
        this.id = res["id"];
        this.title = res["name"];
        this.weight = res["weight"];
        this.height = res["height"];
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
        let item = res["flavor_text_entries"];
        let desc = item.find(text => text.language.name === "en");
        this.description = desc.flavor_text;
      },
      err => {
        this.error = err;
        this.isLoadingResults = false;
      }
    );
  }
}
