import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RecibosService } from './recibos.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {path: 'landing', component: LandingComponent, canActivate: [AuthGuard]},
    {path: '', component:LoginComponent}
];
