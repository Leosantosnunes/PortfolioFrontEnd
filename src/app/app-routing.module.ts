import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoModule } from './personal-info/personal-info.module';
import { EducationComponent } from './personal-info/education/education.component';
import { WorkExperienceComponent } from './personal-info/work-experience/work-experience.component';
import { HobbiesComponent } from './personal-info/hobbies/hobbies.component';

const routes: Routes = [
  {path: 'education', component: EducationComponent},
  {path: 'workexperience', component: WorkExperienceComponent},
  {path: 'hobbies', component: HobbiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
