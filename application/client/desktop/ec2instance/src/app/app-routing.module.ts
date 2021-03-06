import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';
import { UdComponent } from './ud/ud.component';
import { GetallComponent } from './getall/getall.component';
import { CreateComponent } from './create/create.component';
import { SearchComponent } from './search/search.component';
import { BootstrappComponent } from './bootstrapp/bootstrapp.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'demo', component: BootstrappComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
{ path: 'ud', loadChildren: () => import('./ud/ud.module').then(mod => mod.UdModule)},
  { path: '', component: TemplateComponent , pathMatch: 'full' },
{ path: 'getall', loadChildren: () => import('./getall/getall.module').then(mod => mod.GetallModule)},
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
{ path: 'create', loadChildren: () => import('./create/create.module').then(mod => mod.CreateModule)},

{ path: 'search', loadChildren: () => import('./search/search.module').then(mod => mod.SearchModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
