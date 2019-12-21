import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  { path: '', 
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },

  { path: 'login', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
   // otherwise redirect to home
   { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
