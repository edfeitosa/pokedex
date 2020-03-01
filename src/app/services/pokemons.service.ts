import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { PokemonsModel } from '../models/pokemons/pokemons.model';
import { PokemonModel } from '../models/pokemons/pokemon.model';
import { SpicesModel } from '../models/pokemons/spices.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  
  constructor(private http: HttpClient) { }
  
  getPokemons(url): Observable<PokemonsModel[]> {
    return this.http.get<PokemonsModel[]>(url).pipe(
      tap(pokemons => console.log('urls read')),
      catchError(this.handleError('getPokemons', []))
    );
  }

  getPokemon(url): Observable<PokemonModel[]> {
    return this.http.get<PokemonModel[]>(url).pipe(
      tap(pokemon => console.log('pokemon read')),
      catchError(this.handleError('getPokemon', []))
    );
  }

  spicePokemon(id): Observable<SpicesModel[]> {
    const urlSpices = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
    return this.http.get<SpicesModel[]>(urlSpices).pipe(
      tap(spice => console.log('spice read')),
      catchError(this.handleError('spicePokemon', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
