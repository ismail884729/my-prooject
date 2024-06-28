import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { DashbodyComponent } from './dashbody/dashbody.component';
import { RequestMatchComponent } from './request-match/request-match.component';
import { ViewEventsComponent } from './view-events/view-events.component';
import { ApproveMatchComponent } from './approve-match/approve-match.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: TestComponent},
  {path: 'dashbody', component: DashbodyComponent},
  {path: 'requestmatch', component: RequestMatchComponent},
  {path: 'viewevents', component: ViewEventsComponent},
  {path: 'approvematch', component: ApproveMatchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
