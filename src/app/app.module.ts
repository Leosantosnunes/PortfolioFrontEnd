import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';
import { PersonalInfoModule } from './personal-info/personal-info.module';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectComponent,
    PersonalInfoComponent,
    ContactComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonalInfoModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
