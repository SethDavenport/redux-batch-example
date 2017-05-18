import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { reduxBatch } from '@manaflair/redux-batch';
import { createLogger } from 'redux-logger';
import { AppComponent } from './app.component';

const counterReducer = (state = 0, { type }) => {
  console.log('REDUCER CALLED WITH VALUE', state);
  return type === 'INCREMENT' ? state + 1 : state;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private store: NgRedux<number>) {
    store.configureStore(counterReducer, 0, [], [reduxBatch]);
  }
}
