import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPanelComponent } from './test-panel/test-panel.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './csm/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPanelComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    SharedModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
