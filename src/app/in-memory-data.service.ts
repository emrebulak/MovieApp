import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      { id: 1, name: "Film 1", description: "Güzel bir film olmuş", imageUrl: "1.jpg" },
      { id: 2, name: "Film 2", description: "Güzel bir film olmuş", imageUrl: "2.jpg" },
      { id: 3, name: "Film 3", description: "Güzel bir film olmuş", imageUrl: "3.jpg" },
      { id: 4, name: "Film 4", description: "Güzel bir film olmuş", imageUrl: "1.jpg" },
      { id: 5, name: "Film 5", description: "Güzel bir film olmuş", imageUrl: "3.jpg" },
      { id: 6, name: "Film 6", description: "Güzel bir film olmuş", imageUrl: "4.jpg" },
      { id: 7, name: "Film 7", description: "Güzel bir film olmuş", imageUrl: "5.jpg" }
    ];
    return { movies };
  }

  constructor() { }
}
