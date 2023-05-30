import { Component } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-section3",
  templateUrl: "./section3.component.html",
  styleUrls: ["./section3.component.scss"],
})
export class Section3Component {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    dots: false,
    nav: true,
    navSpeed: 700,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      940: {
        items: 2,
      },
    },
  };
}
