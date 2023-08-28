import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoRoutingModule } from './personal-info-routing.module';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { RouterModule } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    HobbiesComponent,
    EducationComponent,
    WorkExperienceComponent,
    SkillsComponent
    
  ],
  imports: [
    CommonModule,
    PersonalInfoRoutingModule,
    RouterModule
  ]
})
export class PersonalInfoModule { }
