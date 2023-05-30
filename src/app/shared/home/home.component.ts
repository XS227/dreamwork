import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public showLoading: boolean = true;

  public data = {
    title: "Dreamwork er delt inn i fire underavdelinger:",
    number: "01",
    duration: "1s",
  };

  public data2= {
    title: "SLIK FUNGERER PROSESSEN",
    number: "02",
    duration: "",
  };

  public data3 = {
    title: "Vi jobber med ambisiøse selskaper.",
    number: "03",
    duration: "",
  };

  public data4 = {
    title: "Har du spørsmål?",
    number: "04",
    duration: "",
  };

  public data5 = {
    title: "Har du spørsmål?",
    number: "05",
    duration: "",
  };
  constructor() {
    setTimeout(() => {
      this.showLoading = false;
    }, 3000);
  }

  ngOnInit() {}
}
