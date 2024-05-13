import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Service } from '../models/service';
import { api } from '../settings/api';

@Injectable({
  providedIn: 'root'
})
export class VeterinaryServicesService {

  private http = inject(HttpClient); 
  public apiUrl: any; 

  constructor() {
    this.apiUrl = api.url + "Servicios/"; 
   }


  /** Método que obtiene del backend todos los servicios
   * @author Meyer Usuga Restrepo <theagentsfrontend>
   */

  getServices(): Observable <Service[]>{

    /** hacemos la petición */
    return this.http.get<Service[]>(this.apiUrl + 'Get/Servicios');

  }

  /** Método que obtiene del localstorage el id
   * del servicio seleccionado por el usuario
   * @author Meyer Usuga Restrepo <theagensfrontend>
   */
  getIdService() {
    let idService = localStorage.getItem('serviceSelected');
    return idService;
  }
}
