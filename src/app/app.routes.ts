import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'play', component: GameComponent },
  { path: '**', redirectTo: '/home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
