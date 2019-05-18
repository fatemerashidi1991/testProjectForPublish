import { Routes, RouterModule } from '@angular/router';

 import { HomeComponent } from '../app/home/home.component';
 import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent } from '../app/register/register.component';
import { AuthGuard } from '../app/guards/auth.guard';

const appRoutes: Routes = [
     { path: '', component: HomeComponent, canActivate: [AuthGuard] },
     { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);