import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recibo } from './recibos.models';
interface UsernameResponse {
  windowsIdentityName: string;
}

interface AccessResponse {
  username: string;
  isAuthorized: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class RecibosService {
  private apiURL = `http://localhost:7211/api/Recibos`;

  constructor(private http: HttpClient) {}

  getRecibos(codEmpleado: string): Observable<Recibo[]> {
    const params = new HttpParams().set('codEmpleado', codEmpleado.toString());
    console.log('URL generada con parámetros:', `${this.apiURL}?${params.toString()}`);

    return this.http.get<Recibo[]>(this.apiURL, { params, withCredentials: true });
  }

  getReciboRecientePorFecha(codEmpleado: string, fechaPago: string): Observable<Recibo[]> {
    const url = `${this.apiURL}/mostrar-ultimos`;
    const params = new HttpParams()
      .set('codEmpleado', codEmpleado.toString())
      .set('fechaPago', fechaPago);
    console.log(`URL generada: ${url}?${params.toString()}`);

    return this.http.get<Recibo[]>(url, { params, withCredentials: true });
  }

  getRecibosRecientes(codEmpleado: string): Observable<Recibo[]> {
    const url = `${this.apiURL}/ultimos`;
    const params = new HttpParams().set('codEmpleado', codEmpleado.toString());
    console.log(`URL generada: ${url}?${params.toString()}`);

    return this.http.get<Recibo[]>(url, { params, withCredentials: true });
  }
  getWindowsUsername(): Observable<{username: string}> {
    return this.http.get<{username: string}>(`${this.apiURL}/access`);
  }
}
