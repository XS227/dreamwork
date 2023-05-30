import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComponentRoutingModule } from "./component-routing.module";
import { Section2Component } from "./section2/section2.component";
import { Section3Component } from "./section3/section3.component";
import { NgxCursorModule } from "ngx-cursor";
import { CarouselModule } from "ngx-owl-carousel-o";
import { LogoSectionComponent } from "./logo-section/logo-section.component";
import { OurValuesComponent } from "./our-values/our-values.component";
import { WorkComponent } from "./work/work.component";
import { OurTeamComponent } from "./our-team/our-team.component";
import { VisionAndMissionComponent } from "./vision-and-mission/vision-and-mission.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { QuestionsComponent } from "./questions/questions.component";
import { defineElement } from "lord-icon-element";
import lottie from "lottie-web";
import { NewsLetterComponent } from "./news-letter/news-letter.component";
import { bannerComponent } from "./banner/banner.component";
@NgModule({
  declarations: [
    Section2Component,
    Section3Component,
    LogoSectionComponent,
    OurValuesComponent,
    WorkComponent,
    OurTeamComponent,
    VisionAndMissionComponent,
    ContactUsComponent,
    QuestionsComponent,
    NewsLetterComponent,
    bannerComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    NgxCursorModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    Section2Component,
    Section3Component,
    LogoSectionComponent,
    OurValuesComponent,
    WorkComponent,
    OurTeamComponent,
    VisionAndMissionComponent,
    ContactUsComponent,
    QuestionsComponent,
    NewsLetterComponent,
    bannerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
