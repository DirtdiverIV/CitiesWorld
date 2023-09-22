import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  ciudades = [
    {
      "name": "A Coruña",
      "description": "A Coruña es una hermosa ciudad costera en Galicia, conocida por su paseo marítimo, la Torre de Hércules y su rica tradición gastronómica de mariscos frescos.",
      "imgurl": "../assets/ciudades/acoruna.jpg",
      "puntuacion": 4.5
    },
    {
      "name": "Vigo",
      "description": "Vigo es una ciudad portuaria en la costa atlántica de Galicia, famosa por su puerto comercial y sus playas hermosas, así como por su deliciosa comida de mar.",
      "imgurl": "../assets/ciudades/vigo.jpg",
      "puntuacion": 4.2
    },
    {
      "name": "Santiago de Compostela",
      "description": "Santiago de Compostela es la capital de Galicia y un importante centro de peregrinación cristiana debido a su catedral, que alberga las reliquias de Santiago el Mayor.",
      "imgurl": "../assets/ciudades/santiago.jpg",
      "puntuacion": 4.8
    },
    {
      "name": "Pontevedra",
      "description": "Pontevedra es una encantadora ciudad gallega conocida por su casco antiguo bien conservado y su ambiente tranquilo, ideal para explorar a pie.",
      "imgurl": "../assets/ciudades/pontevedra.jpg",
      "puntuacion": 4.0
    },
    {
      "name": "Lugo",
      "description": "Lugo es famosa por su muralla romana perfectamente conservada, que rodea el centro histórico de la ciudad, y su rica historia cultural y gastronómica.",
      "imgurl": "../assets/ciudades/lugo.jpg",
      "puntuacion": 4.1
    },
    {
      "name": "Ourense",
      "description": "Ourense es conocida por sus aguas termales y sus hermosos paisajes naturales, incluyendo el Cañón del Sil, ideal para los amantes de la naturaleza y la relajación.",
      "imgurl": "../assets/ciudades/ourense.jpg",
      "puntuacion": 4.3
    }
  ];
}
