import {Component, OnInit} from '@angular/core';
import {GithubService} from "../shared/services/github.service";
import {logo_mappings} from "../shared/logoMappings";

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss']
})
export class PersonalProjectsComponent implements OnInit {
  repos: any[] = [];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getRepos().then(repos => {
      this.repos = repos.data;
    })
  }

  getLogo(name: string): string{
    let value = logo_mappings.find( e => e.key === name);
    if (value) {
     return value.image;
    }
    return '';
  }

   async getTopics(repo: string) {
    let topics: string[] = [];
     await this.githubService.getTopics(repo).then(e => {
      topics = e.data.names;
    })
    return topics;
  }

}
