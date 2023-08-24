import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';
import { PersonalInfoModule } from './personal-info/personal-info.module';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,
    ProjectComponent,
    PersonalInfoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonalInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
