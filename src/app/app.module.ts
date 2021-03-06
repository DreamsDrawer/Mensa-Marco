import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'welcome', component: WelcomeComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path:'**', redirectTo:'welcome', pathMatch:'full'},
      
    ]),
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
