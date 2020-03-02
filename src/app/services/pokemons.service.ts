import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import { PokemonsModel } from "../models/pokemons/pokemons.model";
import { PokemonModel } from "../models/pokemons/pokemon.model";
import { SpicesModel } from "../models/pokemons/spices.model";

@Injectable({
  providedIn: "root"
})
export class PokemonsService {
  private baseUrl: string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) {}

  getPokemons(offset: number, limit: number): Observable<PokemonsModel[]> {
    return this.http
      .get<PokemonsModel[]>(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
      .pipe(
        tap(pokemon => console.log("pokemon read")),
        catchError(this.handleError("getPokemon", []))
      );
  }

  getPokemon(name: string): Observable<PokemonModel[]> {
    return this.http.get<PokemonModel[]>(`${this.baseUrl}${name}`).pipe(
      tap(pokemon => console.log("pokemon read")),
      catchError(this.handleError("getPokemon", []))
    );
  }

  spicePokemon(id: number): Observable<SpicesModel[]> {
    const urlSpices = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
    return this.http.get<SpicesModel[]>(urlSpices).pipe(
      tap(spice => console.log("spice read")),
      catchError(this.handleError("spicePokemon", []))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
