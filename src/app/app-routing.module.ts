import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CuriosityComponent } from './curiosity/curiosity.component';
import { CuriosityDetailComponent } from './curiosity-detail/curiosity-detail.component';
import { CustomersComponent } from './customers/customers.component';
import { HeroBirthdayComponent } from './hero-birthday/hero-birthday.component';
import { TemporaryComponent } from './temporary/temporary.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'curiosity', component: CuriosityComponent},
  { path: 'curiosity/:id', component: CuriosityDetailComponent},
  { path: 'customers', component: CustomersComponent },
  { path: 'birthday', component: HeroBirthdayComponent },
  { path: 'temporary', component: TemporaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
