import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  title = this.activatedRoute.snapshot.paramMap.get('title');

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
