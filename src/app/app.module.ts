import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { ComplexTableComponent } from './components/complex-table/complex-table.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { ValueComponent } from './components/value/value.component';
import { MultiTableComponent } from './components/multi-table/multi-table.component';
import { ScrollService } from './services/scroll.service';
import { OneComplexTableComponent } from './components/one-complex-table/one-complex-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleTableComponent,
    ComplexTableComponent,
    OneComplexTableComponent,
    MultiTableComponent,
    TableCellComponent,
    ValueComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule {}
