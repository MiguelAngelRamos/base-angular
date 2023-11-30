import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CharacterComponent } from './characters.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
//* Importar las enumeraciones para usar en la simulacion de datos de pruebas.
import { Gender, Species, Status } from '../../interfaces/IResponseApi';

describe('CharactersComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;

  //* Antes de cada prueba individual
  beforeEach( () => {
    //* Creamos una instancia del componente en su entorno de prueba
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;//* La instancia del componente
    fixture.detectChanges(); // Detectamos los cambios y actualizamos la vista
  });

  //* Una prueba para verificar que el componente sea crea correctamente.

  it('debe crear el componente', () => {
    expect(component).toBeTruthy(); //* Verifica que la instancia del componente exista
  });

  it('debe mostrar tarjetas para cada personaje', () => {

  });

});
