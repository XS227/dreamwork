import { DOCUMENT } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { NgwWowService } from "ngx-wow";
import { filter, Subscription } from "rxjs";
import { DisableRightClickService } from "src/app/disable-right-click.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  public show: boolean = false;
  public scrollDown = false;
  public scrollUp = false;
  private wowSubscription: Subscription | any;
  private currentPosition = window.pageYOffset;

  public dropdowns:any = {
    one:false,
    two:false,
    three:false,
    four : false
  }
  public store = 0
  public link = false

  constructor(@Inject(DOCUMENT) private _document: Document, private router: Router, private wowService: NgwWowService, private activatedRoute: ActivatedRoute, private rightClickDisable: DisableRightClickService) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.wowService.init();
    });
  }


  openMenu() {
    if (window.innerWidth <= 1199) {
      this.show = !this.show;
      this.store = 0
    }
  }
 
  toggleOnce(link?:any, key?:any){
    if(this.dropdowns[key]){
      window.open(link,"_blank");
    }
    this.toggleMenu(key);

  }
  toggleMenu(value?:any){
    Object.keys(this.dropdowns).forEach(key=>{
      if(key!=value){
        this.dropdowns[key]=false
      }
    })
    this.dropdowns[value] = !this.dropdowns[value]
  }

  ngOnInit() {
    this.wowSubscription = this.wowService.itemRevealed$.subscribe((item: HTMLElement) => {});
    this.rightClickDisable.disableRightClick();
    window.addEventListener("scroll", this.scrolling, true);
  }

  scrolling = (s: any) => {
    let sc = s.target.scrollingElement.scrollTop;
    let scrol = window.pageYOffset;
    if (sc > this.currentPosition) {
      this.scrollDown = true;
    } else {
      if (sc >= 100) {
        this.scrollDown = false;
        this.scrollUp = true;
      } else {
        this.scrollUp = false;
      }
    }
    this.currentPosition = scrol;
  };
}
