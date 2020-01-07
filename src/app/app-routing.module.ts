import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { PricingComponent } from './pricing/pricing.component';
import { TeamComponent } from './team/team.component';
import { TestiComponent } from './testi/testi.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{path : 'home', component : HomeComponent},
{path : 'service', component : ServiceComponent},
{path : 'pricing', component : PricingComponent},
{path : 'team', component : TeamComponent},
{path : 'testi', component : TestiComponent},
{path : 'contact', component : ContactComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
