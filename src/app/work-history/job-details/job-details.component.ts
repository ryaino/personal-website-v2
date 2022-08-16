import {Component, Input, OnInit} from '@angular/core';
import {Logo, logo_mappings} from "../../shared/logoMappings";

@Component({
             selector: 'app-job-details',
             templateUrl: './job-details.component.html',
             styleUrls: ['./job-details.component.scss']
           })
export class JobDetailsComponent implements OnInit {

  @Input()
  companyName!: string;
  @Input()
  jobTitle!: string;
  @Input()
  duration!: string;
  @Input()
  location!: string;
  @Input()
  imagePath!: string;
  @Input()
  technologiesKeys!: string[];

  technologiesValues: Logo[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.technologiesKeys.forEach(key => {
      let value = logo_mappings.find( e => e.key === key);
      if (value) {
        this.technologiesValues.push(value)
      }
    })
  }

}
