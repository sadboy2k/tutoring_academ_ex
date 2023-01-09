import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./app-shell/nav-bar/nav-bar.component";
import { FooterComponent } from "./app-shell/footer/footer.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NotificationService } from "./shared/notify/notification.service";
import { ToastModule } from "@syncfusion/ej2-angular-notifications";

@NgModule({
  declarations: [AppComponent, NavBarComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule, ToastModule],
  providers: [NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
