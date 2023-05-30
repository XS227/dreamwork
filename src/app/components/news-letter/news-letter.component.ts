import { Component } from "@angular/core";
declare var hbspt: any; // put this at the top
@Component({
  selector: "app-news-letter",
  templateUrl: "./news-letter.component.html",
  styleUrls: ["./news-letter.component.scss"],
})
export class NewsLetterComponent {

  ngAfterViewInit(){
    hbspt.forms.create({
      region: "na1",
      portalId: "6553310",
      formId: "90ccc35a-489c-4105-9e43-dbf4c42477bb",
      target: "#newsLetter"
    });
  }


}
