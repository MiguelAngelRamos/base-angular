import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { HttpClientModule } from "@angular/common/http";
import { CharacterComponent } from "./components/characters/characters.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  bootstrap: [AppComponent],

})
export class AppModule {};
