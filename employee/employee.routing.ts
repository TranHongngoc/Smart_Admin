
import {Routes, RouterModule} from "@angular/router";
import {EmployeeComponent} from "./employee.component";
import {ListComponent} from "./list/list.component";


export const routes: Routes = [
    {
        path: '', component: EmployeeComponent,
        children: [
            {
                path: 'list',
                component: ListComponent
            }

        ]
    }
];


export const routing = RouterModule.forChild(routes);
