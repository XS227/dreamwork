import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CarouselModule } from "ngx-owl-carousel-o";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxCursorModule } from "ngx-cursor";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { defineElement } from "lord-icon-element";
import { DragScrollModule } from "ngx-drag-scroll";
import lottie from "lottie-web";
import {
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ComponentModule } from "./components/component.module";
import { HelpYouComponent } from "./help-you/help-you.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from "./shared/header/header.component";
import { SectionTitleComponent } from "./shared/section-title/section-title.component";
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './shared/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HelpYouComponent,
    FooterComponent,
    HeaderComponent,
    SectionTitleComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    DragScrollModule,
    NgxCursorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
