import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private urlEndpoint = 'http://localhost:8080/api/clientes';
  private httpHeader = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    // return of(CLIENTES);
    // return this.http.get<Cliente[]>(this.urlEndpoint);
    return this.http.get(this.urlEndpoint).pipe(
      map(response => {
        return response as Cliente[];
      })
    );
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndpoint, cliente, {headers: this.httpHeader});
  }

  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndpoint}/${id}`);
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.urlEndpoint}/${cliente.id}`, cliente, {headers: this.httpHeader});
  }

  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndpoint}/${id}`, { headers: this.httpHeader });
  }
}
