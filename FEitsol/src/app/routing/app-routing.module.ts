import { NgModule } from "@angular/core";
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { JobDetailComponent } from "../components/job-detail/job-detail.component";
import { ListJobComponent } from "../components/list-job/list-job.component";
import { LoginComponent } from "../components/login/login.component";
import { PersonalInfoComponent } from "../components/personal-info/personal-info.component";
import { RecruitmentComponent } from "../components/recruitment/recruitment.component";
import { RegisterComponent } from "../components/register/register.component";

const routes:Routes=[
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'job/:id',
        component: JobDetailComponent,
        pathMatch: 'full'
    },
    {
        path: 'job',
        component: ListJobComponent,
        pathMatch: 'full'
    },
    {
        path: 'recruitment',
        component: RecruitmentComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: RegisterComponent,
        pathMatch: 'full'
    },
    {
        path: 'info',
        component: PersonalInfoComponent,
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }