import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/characters/characters.component';

const routes: Routes = [
  { path: "", component: CharacterComponent},
  { path: "**", component: CharacterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
