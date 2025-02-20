import { Component, inject, OnInit } from '@angular/core';
import { RecibosService } from '../recibos.service';
import { CommonModule } from '@angular/common'; // Asegúrate de esto
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-landing',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit {
  recibos: any[] = [];
  reciboActual: any = {};
  recibosRecientes: any[] = [];
  recibosRecientesPorFecha: any[] = [];
  tablaIngresos: any[] = [];
  tablaDeducciones: any[] = [];
  reciboEspecifico: any | null = null;
  totalIngresos: number = 0;
  totalDeducciones: number = 0;
  totalNeto: number = 0;

  fechaPago : string | null = null;
  
  codEmpleadoInput: string | null = null; // Campo de entrada del usuario

  isLoading: boolean = true;
  loading: boolean = true;
  username: string = '';
  isAuthorized: boolean = false;
  deviceInfo: any = {};
  user: string | null = null;
  usuario: string | null = null;

  constructor(private reciboService: RecibosService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.codEmpleadoInput = this.authService.getUsuario(); // Recuperar el código desde el servicio
    this.fechaPago = this.authService.getFechaPago();
    
    
    if (this.codEmpleadoInput) {
      this.buscarRecibos();
     
    } else {
      alert('Error: No se encontró el código de empleado. Vuelva a iniciar sesión.');
    }
  
  }


  buscarRecibos(): void {
    if (!this.codEmpleadoInput) {
      alert('Por favor, ingrese un código de empleado válido.');
      return;
    }


    // Get Windows username from backend
    this.reciboService.getWindowsUsername().subscribe(
      response => {
        this.codEmpleadoInput = response.username;
        console.log(`${response}`);
      },
      error => {
        console.error('Error fetching username:', error);
      }
    );
  

    this.reciboService.getRecibos(this.codEmpleadoInput).subscribe(
      (data) => {
        this.recibos = data;
        console.log('Recibos:', this.recibos);
        this.isLoading = false;
        this.procesarDatos();
        this.calcularTotales();
      },
      (error) => {
        console.error('Error al obtener los recibos:', error);
        this.isLoading = false;
      }
    );
    this.reciboService.getRecibosRecientes(this.codEmpleadoInput).subscribe(
      (data) => {
        this.recibosRecientes = data;
        console.log('Recibos Recientes:', this.recibosRecientes);
      },
      (error) => {
        console.log('retirese hermano', error);
      }
    )
  }



  seleccionarFecha(fecha: string) {
    this.fechaPago = fecha; // Asigna el valor seleccionado a fechaPago
    console.log("Fecha seleccionada:", this.fechaPago);
    this.buscarRecibosRecientesPorFecha();
  }

  buscarRecibosRecientesPorFecha(): void{
    if (!this.codEmpleadoInput) {
      alert('Por favor, ingrese un código de empleado válido.');
      return;
    }
    if (!this.fechaPago){
      alert('falta fecha')
      return;
    }
    this.reciboService.getReciboRecientePorFecha(this.codEmpleadoInput, this.fechaPago).subscribe(
      (data) => {
        this.recibos = data;
        console.log('Recibos Recientes Por Fecha:', this.recibos);
        this.procesarDatos();
        this.calcularTotales();
      },
      (error) => {
        console.log('retirese hermano', error);
      }
    )
  }

  procesarDatos() {
    const mapaIngresos: { [key: string]: any } = {};
    const mapaDeducciones: { [key: string]: any } = {};

    this.recibos.forEach((recibo) => {
      const concepto = recibo.CONCEPTONOMINA;

      if (recibo.INGRESO > 0) {
        if (!mapaIngresos[concepto]) {
          mapaIngresos[concepto] = { concepto, ingreso: 0, deduccion: 0 };
        }
        mapaIngresos[concepto].ingreso += recibo.INGRESO;
      }

      if (recibo.DEDUCCION > 0) {
        if (!mapaDeducciones[concepto]) {
          mapaDeducciones[concepto] = { concepto, ingreso: 0, deduccion: 0 };
        }
        mapaDeducciones[concepto].deduccion += recibo.DEDUCCION;
      }
    });

    this.tablaIngresos = Object.values(mapaIngresos);
    this.tablaDeducciones = Object.values(mapaDeducciones);
  }

  calcularTotales() {
    this.totalIngresos = this.tablaIngresos.reduce((total, item) => total + item.ingreso, 0);
    this.totalDeducciones = this.tablaDeducciones.reduce((total, item) => total + item.deduccion, 0);
    this.totalNeto = this.totalIngresos - this.totalDeducciones;
  }
  menuAbierto: boolean = false;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }
  getUserInfo() {
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language
    };
  }
}
