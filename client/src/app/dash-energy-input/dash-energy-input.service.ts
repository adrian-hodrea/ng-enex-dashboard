import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashEnergyInputService {

  constructor(private apiService: ApiService) { }

  fetchData(fdt: number, tdt: number): Observable<[[],[],[],number]> {

    let piete = this.apiService.get({ endpoint: 'piete' });

    let tipuriTranzactii = this.apiService.get({ endpoint: 'tip_tranzactii' });

    let treniData = this.apiService.post({
      endpoint: 'treni',
      body: {
        fromDate: fdt,
        toDate: tdt
      }
    });

    let chIndir = this.apiService.post({
      endpoint: 'ch_indir',
      body: {
        fromDate: fdt,
        toDate: tdt
      }
    });


    return forkJoin([treniData, piete, tipuriTranzactii, chIndir]);
  } // end of fetch method

}
