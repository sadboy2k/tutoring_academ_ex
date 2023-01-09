import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GridList } from "./grid.component";
import { GridModule } from "@syncfusion/ej2-angular-grids";
import {
  PageService,
  SortService,
  FilterService,
  GroupService,
} from "@syncfusion/ej2-angular-grids";

@NgModule({
  declarations: [GridList],
  imports: [CommonModule, GridModule],
  providers: [PageService, SortService, FilterService, GroupService],
  exports: [GridList],
})
export class SyncGridModule {}
