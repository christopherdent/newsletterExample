import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';


const routes: Routes = [


  { path: '', redirectTo: 'create', pathMatch: 'full' },
  { path: 'customers', component: CustomerListComponent },
  { path: 'create', component: CustomerCreateComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
