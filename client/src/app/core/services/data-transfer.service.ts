import { Injectable } from '@angular/core';
import { periodPri } from '../models/dash-energy-input.models';


@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  public intervalPriFormat:periodPri; 

  constructor() { }
}
