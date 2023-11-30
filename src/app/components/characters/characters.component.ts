import { Component, Input, OnInit } from "@angular/core";
import { Character } from '../../interfaces/IResponseApi';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharacterComponent implements OnInit {

  characters: Character[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this. rickAndMortyService.getCharacters().subscribe(response => {
      this.characters = response.results;
    })
  }


}
