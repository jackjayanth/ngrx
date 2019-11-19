import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from './models/tutorial.model';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import * as TutorialActions from './actions/tutorial.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tutorials: Observable<Tutorial[]>;

  // Section 2
  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
    console.log('tut', this.tutorials);
  }

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({name, url}) );
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) );
  }

  ngOnInit() {}
}
