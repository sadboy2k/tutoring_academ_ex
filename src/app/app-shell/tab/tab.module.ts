import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabComponent } from "./tab.component";
import { TabRoutingModule } from "./tab-routing.module";

@NgModule({
  declarations: [TabComponent],
  imports: [CommonModule, TabRoutingModule],
})
export class TabModule {}
