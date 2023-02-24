import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BackendService} from "../../services/backend.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SeoService} from "../../services/seo.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  public constructor(public backend: BackendService, private snackbar: MatSnackBar, private seo: SeoService) {
    seo.setTitle("Kontakt");
    seo.setDescription("Schreiben Sie mir eine Nachricht");
  }

  public async sendMessage() {
    if (!this.form.valid) return;

    await this.backend.sendMessage({
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      message: this.form.get('message').value
    });
    this.form.reset();

    this.snackbar.open("Nachricht gesendet!", undefined, {duration: 2000});
  }

}
