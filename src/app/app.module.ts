import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DropdownModule } from "primeng/dropdown";
import { AppComponent } from "./app.component";
import { QuestionListComponent } from "./question-list/question-list.component";
import { HeaderComponent } from "./header/header.component";
import { ChartsComponent } from "./charts/charts.component";
import { FormsModule } from "@angular/forms";
import { ChartModule } from "primeng/chart";
import { NvD3Module } from "ng2-nvd3";
import "d3";
import "nvd3";
@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    HeaderComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    FormsModule,
    ChartModule,
    NvD3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
