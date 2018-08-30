import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { AuthAdminGuard } from './guards/auth.admin.guard';
import { ClassesComponent } from './components/pages/classes/classes.component';
import { StudentsComponent } from './components/pages/students/students.component';
import { TimetableComponent } from './components/pages/timetable/timetable.component';
import { TuitionfeeComponent } from './components/pages/tuitionfee/tuitionfee.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthAdminGuard]},
    { path: 'classes', component: ClassesComponent, canActivate: [AuthAdminGuard]},
    { path: 'students', component: StudentsComponent, canActivate: [AuthAdminGuard]},
    { path: 'timetable', component: TimetableComponent, canActivate: [AuthAdminGuard]},
    { path: 'logs/fee', component: TuitionfeeComponent, canActivate: [AuthAdminGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
