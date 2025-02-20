import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { MatCardModule } from '@angular/material/card';
import { RecibosService } from './recibos.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyect';
  recibos: any[] = [];

  recibosService = inject(RecibosService);
  
  constructor(){
  }

  
}
