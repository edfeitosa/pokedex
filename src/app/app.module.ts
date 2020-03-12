import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokemonsComponent } from "./components/organisms/pokemons/pokemons.component";
import { PokemonComponent } from "./components/molecules/pokemon/pokemon.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { DetailsComponent } from "./components/pages/details/details.component";
import { HeaderComponent } from "./components/molecules/header/header.component";
import { UcfirstPipe } from './pipes/ucfirst.pipe';
import { FormatedOrderPipe } from './pipes/formated-order.pipe';
import { HeightPipe } from './pipes/height.pipe';
import { WeightPipe } from './pipes/weight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonComponent,
    HomeComponent,
    DetailsComponent,
    HeaderComponent,
    UcfirstPipe,
    FormatedOrderPipe,
    HeightPipe,
    WeightPipe
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
