import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ConfigComponent } from './components/config/config.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'config', component: ConfigComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

