import { Component, OnInit } from '@angular/core';
import { MovieslistService } from '../../services/movieslist/movieslist.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  mText = "Enter Text"
  srcpath: string = "assets/logo.png"
  title: string = 'List component'
  listItems: any[];
  onClick() {
    alert("Button Clicked")
  }
  constructor(private _movieService: MovieslistService) { 
    this.listItems = _movieService.getMovies();
  }

  ngOnInit() {
  }

}
