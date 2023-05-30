import { ChangeDetectorRef, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  public height = "0px";
  @ViewChild("myIdentifier") myIdentifier: ElementRef | any;
  constructor(private cdr: ChangeDetectorRef) {}
  ngAfterViewInit() {
    this.height = this.myIdentifier.nativeElement.offsetHeight + "px";
    console.log("Height: " + this.height);
    this.getHeight();
    this.cdr.detectChanges();
  }

  getHeight() {
    return this.height;
  }
}
