import {Component, Input} from '@angular/core';

@Component({
  selector: 'fancy-button',
  templateUrl: './fancy-button.component.html',
  styleUrls: ['./fancy-button.component.scss']
})
export class FancyButtonComponent {

  @Input('href') link: string | undefined;
  @Input('label') label: string | undefined;

}
