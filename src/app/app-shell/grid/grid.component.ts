import { Component, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { PageSettingsModel } from "@syncfusion/ej2-angular-grids";
import { StudentModel } from "src/app/shared/model/student";
import { RegisterService } from "../app-action.service";
import { GridComponent } from "@syncfusion/ej2-angular-grids";

@Component({
  selector: "app-list",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"],
})
export class GridList implements OnInit {
  @ViewChild("grid") public grid: GridComponent | undefined;
  public data: StudentModel[] = [];
  public pageSettings!: PageSettingsModel;
  public sortOptions!: object;

  constructor(private regService: RegisterService) {}

  ngOnInit() {
    this.regService.student.subscribe((student) => {
      if (student) {
        this.data.push(student);
        this.sortOptions = {
          columns: [{ field: "matters", direction: "Ascending" }],
        };
        this.grid?.refresh();
      }
    });
    this.pageSettings = { pageSize: 6 };
  }
}
