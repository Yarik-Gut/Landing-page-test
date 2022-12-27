import { Component, OnInit } from '@angular/core';
import {Services} from "../../../../shared/models/services.model";
import {SERVICES} from "../../../../shared/statics/services.static";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Services[] = SERVICES

  constructor() { }

  ngOnInit() {
  }

}
