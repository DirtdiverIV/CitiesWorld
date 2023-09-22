import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent {
  restaurantes =  [
    {
      "name": "El de Alberto",
      "imgurl": "../assets/restaurantes/alberto.jpg",
      "description": "El restaurante El de Alberto es conocido por su cocina mediterránea de alta calidad. Sus platos frescos y deliciosos te transportarán directamente a la costa mediterránea."
    },
    {
      "name": "O Curro da Parra",
      "imgurl": "../assets/restaurantes/curro.jpg",
      "description": "O Curro da Parra es un restaurante gallego que ofrece auténtica cocina tradicional de Galicia. Sus platos incluyen delicias como pulpo a la gallega y empanadas caseras."
    },
    {
      "name": "Nova",
      "imgurl": "../assets/restaurantes/nova.jpg",
      "description": "Nova es un restaurante de alta cocina que combina la tradición culinaria con la innovación. Sus platos creativos y presentación impecable lo convierten en un lugar de visita obligada."
    },
    {
      "name": "Silabario",
      "imgurl": "../assets/restaurantes/silabario.jpg",
      "description": "Silabario es un restaurante con estrella Michelin que te ofrece una experiencia gastronómica única. Cada plato es una obra de arte culinaria que deleitará tus sentidos."
    }
  ]
}

