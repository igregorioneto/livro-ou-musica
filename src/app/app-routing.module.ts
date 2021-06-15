import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './shared/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthenticationGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children:
    [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login' , component: LoginComponent },
      { path: 'cadastro' , component: CadastroUsuarioComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
