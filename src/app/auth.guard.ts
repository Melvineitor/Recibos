import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const codigoEmpleado = localStorage.getItem('codigoEmpleado');

    if (codigoEmpleado) {
      return true; // Permitir acceso si existe el código en localStorage
    } else {
      alert('Debes iniciar sesión primero.');
      this.router.navigate(['/login']); // Redirigir a login
      return false; // Bloquear acceso
    }
  }
}
