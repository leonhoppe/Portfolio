import {Component, Input} from '@angular/core';
import {Timestamp} from "../../models/timestamp";

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.scss']
})
export class TimestampComponent {

  @Input('timestamp') timestamp: Timestamp;

}
