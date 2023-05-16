import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from 'src/app/models/clientes';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  URL_API: string = environment.API_CARD;
  constructor(private httpClient: HttpClient) {

  }

  getClientes(): Observable<Clientes[]> {
    return this.httpClient.get<Clientes[]>(this.URL_API + '/getClients').pipe(map(res => res));
  }

  saveCliente(request: any): Observable<any> {
    return this.httpClient.post<any>(this.URL_API + '/postClient', request).pipe(map(resp => resp));
  }

  updateCliente(id_cliente: number, request: any): Observable<any> {
    const url = `${this.URL_API}/putClient/${id_cliente}`;
    return this.httpClient.put<any>(url, request).pipe(map(resp => resp));
  }

  deleteCliente(id_cliente: number): Observable<any> {
    const url = `${this.URL_API}/deleteClient/${id_cliente}`;
    return this.httpClient.delete<any>(url).pipe(map(resp => resp));
  }
  
}
