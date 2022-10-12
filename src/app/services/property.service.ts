import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IProperty } from '../interfaces/IProperty.interface';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) { }

  getAllProperties(): Observable<Property[]> {
    return this.http.get<Property[]>('data/properties.json');
  }


}
