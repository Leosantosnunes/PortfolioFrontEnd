import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './personal-info/education/education.component';
import { WorkExperienceComponent } from './personal-info/work-experience/work-experience.component';
import { HobbiesComponent } from './personal-info/hobbies/hobbies.component';
import { SkillsComponent } from './personal-info/skills/skills.component';
import { StoreFirstGuard } from './guards/storeFirst.guard';

const routes: Routes = [
  {path: 'education', component: EducationComponent , canActivate:[StoreFirstGuard]},
  {path: 'workexperience', component: WorkExperienceComponent , canActivate:[StoreFirstGuard] },
  {path: 'hobbies', component: HobbiesComponent , canActivate:[StoreFirstGuard]},
  {path: 'skills', component: SkillsComponent , canActivate:[StoreFirstGuard]},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StoreFirstGuard]
})
export class AppRoutingModule { }
