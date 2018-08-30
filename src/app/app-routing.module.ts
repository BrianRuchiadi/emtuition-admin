import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { AuthAdminGuard } from './guards/auth.admin.guard';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthAdminGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
