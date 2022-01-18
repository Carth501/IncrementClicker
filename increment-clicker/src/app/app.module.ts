import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { valueReducer } from './store/value.reducer';
import { ValueComponent } from './value/value.component';

@NgModule({
  declarations: [AppComponent, ValueComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ value: valueReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
