import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private codEmpleado: number | null = null;
  private usuario: string | null = null;
  private fechaPago: string | null = null;
  private apiURL = `http://localhost:7211/api/Recibos`;

  setCodEmpleado(codigo: number) {
    this.codEmpleado = codigo;
  }

  getCodEmpleado(): number | null {
    return this.codEmpleado;
  }

  setFechaPago(fecha: string | null){
    this.fechaPago = fecha;
  }

  getFechaPago(): string | null{
    return this.fechaPago;
  }

  setUsuario(user: string){
    this.usuario = user;
  }
  
  getUsuario(): string | null{
    return this.usuario;
  }
  
  constructor(private http: HttpClient) {}

}
