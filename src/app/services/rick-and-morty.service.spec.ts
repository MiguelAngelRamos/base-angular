//* Configurar y inicializar un entorno (TestBed)
import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

//* ES DONDE NOSOTROS VAMOS A LLAMAR AL SERVICIO QUE NO EXISTE (ZONA ROJA)
import { RickAndMortyService } from './rick-and-morty.service';


describe('RickAndMortyService', () => {
  //* Declarar las variables para el servicio y el controlador de pruebas HTTP
  let service:RickAndMortyService;
  let httpMock: HttpTestingController;

  //*  beforeEach Se ejecuta antes de cada prueba individual
  beforeEach(() => {
    //* Configurar el etorno de pruebas de angular para esta suite
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [RickAndMortyService]
    });
    service =  TestBed.inject(RickAndMortyService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  //* it() define una prueba individual
  it('debe obtener personajes', () => {
      service.getCharacters().subscribe(characters => {
        expect(characters.results.length).toBeGreaterThan(0);
      });

      const req = httpMock.expectOne('https://rickandmortyapi.com/api/character/');
      // Comprobar que el metodo de la solicitud es "GET"
      expect(req.request.method).toBe('GET');
      //* Simular una respuesta del servidor
      req.flush({
        results: [
          { id: 1, name: 'Rick Sanchez'},
          { id: 2, name: 'Morty Smith'}
        ]
      })
  });

  //* Se ejecuta despues de cada prueba
  afterEach(() => {
    httpMock.verify();
  })

});
