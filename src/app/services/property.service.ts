import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IProperty } from '../interfaces/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) { }

  getAllProperties(): Observable<IProperty[]> {
    return this.http.get<IProperty[]>('data/properties.json');
  }


}
