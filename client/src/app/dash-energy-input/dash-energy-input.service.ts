import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';

@Injectable({
  providedIn: 'root'
})
export class DashEnergyInputService {

  constructor(private apiService: ApiService ) {}

  display() {
    console.log(" ---- Dash Input Enegy Service touched!")
  }
  
  fetchData() {
    
    this.apiService.get({ endpoint: 'piete'})
      .subscribe(data => console.log(data));
  }

}
