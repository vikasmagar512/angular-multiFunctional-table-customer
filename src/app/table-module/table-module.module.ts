import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableDemoComponent} from './table-demo/table-demo.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { ReusableTableComponent } from './reusable-table/reusable-table.component';
import { PaginationComponent, PaginationModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2TableModule,
    PaginationModule.forRoot()
  ],
  declarations: [TableDemoComponent, ReusableTableComponent],
  exports:[TableDemoComponent,ReusableTableComponent]
})
export class TableModuleModule { }
