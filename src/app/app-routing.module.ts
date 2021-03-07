import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { MultiTableComponent } from './components/multi-table/multi-table.component';
import { OneComplexTableComponent } from './components/one-complex-table/one-complex-table.component';
import { ProgressiveRenderedTableComponent } from './components/progressive-rendered-table/progressive-rendered-table.component';

const routes: Routes = [
  { path: 'simple-table', component: SimpleTableComponent },
  { path: 'complex-table', component: OneComplexTableComponent },
  { path: 'multi-table', component: MultiTableComponent },
  { path: 'progressive-rendered-table', component: ProgressiveRenderedTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
