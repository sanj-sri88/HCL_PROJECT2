import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PartRecord } from './partrecord';
import * as data from '../assets/data.json';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartrecordService {
  constructor() { }
  getPerson(id: number): PartRecord {
    const partrecords = (<any>data).data;
    return partrecords.filter(partrecord => partrecord.id === id)[0];
  }
  
}
