import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Spot {
  id: number;
  image: string;
  altText?: string;
  link?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SpotService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getSpots(): Observable<Spot[]> {
    return this.http.get<Spot[]>(`${this.apiUrl}/spots`);
  }
}
