import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
// import {MainComponent} from "../main/main.component";
import {AdminSettingComponent} from "./admin-setting/admin-setting.component";
import {DashComponent} from "./dash/dash.component";
import {MainComponent} from "../main/main.component";
import {NavComponent} from "./nav/nav.component";
// import {NavComponent} from "./nav/nav.component";

const routes : Routes= [
  {
    path: 'dashboard-nav', component: NavComponent,
    children: [
      {
        path: '', redirectTo: '/dashboard-nav', pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class DashboardRoutingModule { }
