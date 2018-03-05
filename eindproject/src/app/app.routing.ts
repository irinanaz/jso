import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { TakenlijstComponent } from './takenlijst/takenlijst.component';
import { MijnenvegerComponent } from './mijnenveger/mijnenveger.component';
import { MymenuComponent } from './mymenu/mymenu.component';
import { OpmaakComponent } from './opmaak/opmaak.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'mymenu', component: MymenuComponent, canActivate: [AuthGuard]},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'takenlijst', component: TakenlijstComponent, canActivate: [AuthGuard]},
    { path: 'mijnenveger', component: MijnenvegerComponent, canActivate: [AuthGuard] },
    { path: 'opmaak', component:  OpmaakComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);