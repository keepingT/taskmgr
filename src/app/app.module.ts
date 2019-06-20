import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { MatSidenavModule } from '@angular/material/sidenav';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    //MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }