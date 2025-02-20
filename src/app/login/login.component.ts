import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { RecibosService } from '../recibos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent {
  codEmpleadoInput: number = 0;
  response: string = '';
  usuario: string | null = null;
  private allowedUsers = ['M3lv1n\\test', 'DOMAIN\\user2'];


  constructor(private router: Router, private authService: AuthService, private recibosService: RecibosService) {}

  ngOnInit(): void{
    this.recibosService.getWindowsUsername().subscribe(
      response => {
        this.usuario = response.username;
        console.log(this.usuario);
        console.log(typeof response);
        this.iniciarSesion();
      },
      error => {
        console.error('Error fetching username:', error);
      }
    );
  }
  iniciarSesion() {
    if (!this.usuario) {
      alert('Por favor, ingrese un código de empleado válido.');
      return;
    }

   
     this.authService.setUsuario(this.usuario);
     //this.authService.setUsuario(this.codEmpleadoInput); // Guardar en el servicio
      // Guardar en el servicio
    this.router.navigate(['/landing']); // Redirigir a la página de recibo
  }
}
