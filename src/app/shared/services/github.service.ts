import {Injectable} from '@angular/core';
import {Octokit} from "@octokit/core";

@Injectable({
              providedIn: 'root'
            })
export class GithubService {


  octokit = new Octokit();

  constructor() {
  }

  async getRepos() {
    return await this.octokit.request('GET /users/{username}/repos', {username:'ryaino', sort:'pushed'})
  }

  async getTopics(repo: string) {
    return await this.octokit.request('GET /repos/{owner}/{repo}/topics', {
      owner: 'ryaino',
      repo: repo
    })
  }
}
