import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TabComponent } from "@syncfusion/ej2-angular-navigations";

const routes: Routes = [
  {
    path: "",
    component: TabComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabRoutingModule {}
