import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tasks',
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/list/list.module').then(m => m.ListModule),
  },
  {
    path: '**',
    loadChildren: () => import('./layout/unfound/unfound.module').then(m => m.UnfoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
