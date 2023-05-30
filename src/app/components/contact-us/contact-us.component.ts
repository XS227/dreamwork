import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { FormService } from "src/app/shared/form.service";
declare var hbspt: any; // put this at the top

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent {
  public submitted: boolean = false;
  public showMessage = "";
  public form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {
    this.form = this.formBuilder.group({
      company_name: new FormControl("", Validators.required),
      first_name: new FormControl("", Validators.required),
      surname: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone_number: new FormControl("", Validators.required),
      message: new FormControl("", Validators.required),
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  get f() {
    return this.form.controls;
  }

  sendMail() {
    this.submitted = true;
    if (this.form.value.acceptTerms == true) {
      this.formService.sendMail(this.form.value).subscribe((response: any) => {
        if (response.success) {
          this.showMessage = response.success;
          this.form.reset();
        }
      });
    }
    this.form.value;
  }

  closeMessage() {
    this.showMessage = "";
  }

  ngAfterViewInit(){
    hbspt.forms.create({
      region: "na1",
      portalId: "6553310",
      formId: "fd0e6f3b-c748-432d-8a17-4367289b7936",
      target: "#hubspotForm"
    });
  }

}


