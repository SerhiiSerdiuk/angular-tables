import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { ComplexTableComponent } from './components/complex-table/complex-table.component';


const routes: Routes = [
  { path: 'simple-table', component: SimpleTableComponent },
  { path: 'complex-table', component: ComplexTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
