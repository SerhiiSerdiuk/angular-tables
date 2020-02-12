import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SimpleTableComponent } from "./components/simple-table/simple-table.component";
import { ComplexTableComponent } from "./components/complex-table/complex-table.component";
import { TableCellComponent } from "./components/table-cell/table-cell.component";
import { ValueComponent } from "./components/value/value.component";
import { MultiTableComponent } from './components/multi-table/multi-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleTableComponent,
    ComplexTableComponent,
    MultiTableComponent,
    TableCellComponent,
    ValueComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
