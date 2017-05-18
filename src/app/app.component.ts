import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Action } from 'redux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$: Observable<number>;
  private batch: Action[] = [];

  constructor(private store: NgRedux<number>) {
    this.count$ = store
      .select()
      .do(console.log.bind(console, 'SELECT CALLED WITH VALUE'));
  }

  singleDispatch() {
    this.store.dispatch({ type: 'INCREMENT' });
  }

  addToBatch() {
    this.batch.push({ type: 'INCREMENT' });
  }

  batchDispatch() {
    this.store.dispatch<any>(this.batch);
    this.batch = [];
  }
}
