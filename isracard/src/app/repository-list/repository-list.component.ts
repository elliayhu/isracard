import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})

export class RepositoryListComponent implements OnInit {

  searchBtn: string = 'search';
  repositoryToSerch: string;
  repositoris: any[];
  selectedRepositoryObject: any;

  constructor(private http: HttpClient ) {
   }

  ngOnInit() {
  }

  searchRepository()
  {
    //get all repositories from git API
    this.http.get<any>(`https://api.github.com/search/repositories?q=${this.repositoryToSerch}`)
     .subscribe(data =>this.repositoris = data.items);
  }
  
  selectedRepository(i)
  {
    this.selectedRepositoryObject = this.repositoris[i];
  }
}
