import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokemonsComponent } from "./components/organisms/pokemons/pokemons.component";
import { PokemonComponent } from "./components/molecules/pokemon/pokemon.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { DetailsComponent } from "./components/pages/details/details.component";
import { SearchComponent } from "./components/pages/search/search.component";
import { HeaderComponent } from "./components/molecules/header/header.component";
import { SearchFormComponent } from "./components/molecules/search-form/search-form.component";
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonComponent,
    HomeComponent,
    DetailsComponent,
    SearchComponent,
    HeaderComponent,
    SearchFormComponent,
    OrderByPipe
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
