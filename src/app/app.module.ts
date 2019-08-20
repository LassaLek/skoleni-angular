import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeatureModule } from './feature/feature.module';
import { BoxInlineComponent } from './components/box-inline/box-inline.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxInlineComponent
  ],
  imports: [
    BrowserModule,
    FeatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
