import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './Pages/Security/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './Pages/Security/register/register.module#RegisterPageModule' },
  { path: 'listing', loadChildren: './Pages/Hairdresser/listing/listing.module#ListingPageModule' },
  { path: 'detail', loadChildren: './Pages/Hairdresser/detail/detail.module#DetailPageModule' },
  { path: 'account', loadChildren: './Pages/Profile/User/account/account.module#AccountPageModule' },
  { path: 'account', loadChildren: './Pages/Profile/Pro/account/account.module#AccountPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
