import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeComponent} from "./employee.component";
import {ListComponent} from "./list/list.component";
import {RouterModule} from "@angular/router";
import {routes} from "./employee.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SmartadminModule} from "../shared/smartadmin.module";
import {routing} from "../+outlook/outlook.routing";
import {SmartadminEditorsModule} from "../shared/forms/editors/smartadmin-editors.module";
import {EmployeeService} from "./shared/employee.service";
import {BrowserModule} from "@angular/platform-browser";
// import {SmartadminModule} from "../shared/smartadmin.module";

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        // ReactiveFormsModule,
        // HttpClientModule,

        // SmartadminModule,
        // routing,
        //
        // SmartadminEditorsModule,
    ],
    exports:[RouterModule],
  declarations: [
      EmployeeComponent,
      ListComponent,

  ],
    providers: [EmployeeService],
   entryComponents: [EmployeeComponent],
})
export class EmployeeModule { }
