import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {BackendService} from "../../services/backend.service";
import {DeviceDetectorService} from "ngx-device-detector";

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

  public constructor(public backend: BackendService, public device: DeviceDetectorService) {}

  public async sendMessage() {
    if (!this.form.valid) return;

    await this.backend.sendMessage({
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      message: this.form.get('message').value
    });
    this.form.reset();

    Swal.fire({
      icon: 'success',
      title: 'Nachricht gesendet',
      showConfirmButton: false,
      timer: 1500
    });
  }

}
