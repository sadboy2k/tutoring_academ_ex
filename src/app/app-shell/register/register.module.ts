import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register.component";
import { RegisterRoutingModule } from "./register-routing.module";
import {
  AccordionModule,
  TabModule,
} from "@syncfusion/ej2-angular-navigations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DatePickerModule } from "@syncfusion/ej2-angular-calendars";
import { DropDownButtonModule } from "@syncfusion/ej2-angular-splitbuttons";
import { DropDownListModule } from "@syncfusion/ej2-angular-dropdowns";
import { CheckBoxModule } from "@syncfusion/ej2-angular-buttons";
import { SyncGridModule } from "../grid/grid.module";
import { HttpClientModule } from "@angular/common/http";
import { ToastModule } from "@syncfusion/ej2-angular-notifications";

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterRoutingModule,
    AccordionModule,
    DatePickerModule,
    DropDownButtonModule,
    FormsModule,
    DropDownListModule,
    CheckBoxModule,
    TabModule,
    SyncGridModule,
    HttpClientModule,
    ToastModule,
  ],
})
export class RegisterModule {}
