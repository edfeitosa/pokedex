import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

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
  page: string;
  reload: boolean;

  constructor(
    private route: ActivatedRoute,
    private _api: PokemonsService
  ) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.definePage();

    let actualPage = this.page === "1"
      ? parseInt(this.page, 10) - 1
      : parseInt(this.page, 10) * 10;

    this._api.getPokemons(actualPage, 10).subscribe(
      res => {
        res["results"].map((item: any) => {
          this.getPokemon(item["name"]);
        });
        this.previous = this.previousPage(res["previous"]);
        this.next = this.nextPage(res["next"]);
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
        this.sortedArray(this.dataSource);
      },
      err => {
        this.dataSource = err;
        this.isLoadingResults = false;
      }
    );
  }

  sortedArray(array: Array<any>) {
    array.sort((a: any, b: any) => {
      if (a["id"] > b["id"]) {
        return 1;
      }
      if (a["id"] < b["id"]) {
        return -1;
      }
      return 0;
    });
  }

  definePage() {
    let page: string;
    this.route.params.subscribe(res => (page = res.page));
    page
      ? this.page = page
      : this.page = "1";
  }

  nextPage(next: string) {
    if (next) {
      return (parseInt(this.page, 10) + 1).toString();
    }
    return null;
  }

  previousPage(previous: string) {
    if (previous) {
      return (parseInt(this.page, 10) - 1).toString();
    }
    return null;
  }

  handleClickOnLink(event: Event) {
    let pageRedirect = event.target["id"];
    window.location.replace(`/page/${pageRedirect}`);
  }
}
