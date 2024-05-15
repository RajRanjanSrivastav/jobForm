import { Routes } from '@angular/router';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';
import { NdmaFormComponent } from './components/ndma-form/ndma-form.component';

export const routes: Routes = [
    {
        path: '', component: ListJobsComponent,
    },
    {
        path: 'jobList', component: ListJobsComponent,
    },
    {
        path: 'hrForm/:id',
        component: NdmaFormComponent
    }
];
