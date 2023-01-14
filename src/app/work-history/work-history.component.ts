import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit {

  public forbury_technologies_keys: string[] = ['angular', 'dotnet', 'jira'];
  public binderpos_technologies_keys: string[] = ['spring','kafka', 'jira', 'docker', 'gcp','postgres', 'hasura', 'graphql', 'kubernetes', 'react', 'wsl', 'microservices', 'gitlab'];
  public fis_technologies_keys: string[] = ['spring','jsp', 'ibm', 'jira', 'veracode', 'jenkins', 'docker', 'wsl', 'gitlab'];

  constructor() {
  }

  ngOnInit(): void {

    document.body.scrollTop = 0;
  }

}
