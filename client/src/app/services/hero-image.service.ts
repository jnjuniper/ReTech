import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HeroImage {
  image: string;
  altText: string;
  imageDescription: string;
}

@Injectable({
  providedIn: 'root',
})
export class HeroImageService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getHeroImages(): Observable<HeroImage[]> {
    return this.http.get<HeroImage[]>(`${this.apiUrl}/heroImages`);
  }
}
