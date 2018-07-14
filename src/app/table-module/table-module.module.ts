import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableDemoComponent} from './table-demo/table-demo.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { ReusableTableComponent } from './reusable-table/reusable-table.component';
@NgModule({
  imports: [
    CommonModule,
    Ng2TableModule
  ],
  declarations: [TableDemoComponent, ReusableTableComponent],
  exports:[TableDemoComponent,ReusableTableComponent]
})
export class TableModuleModule { }
