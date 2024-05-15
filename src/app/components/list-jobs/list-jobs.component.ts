import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NdmajobService } from '../../services/hrJob/ndmajob.service';

@Component({
  selector: 'app-list-jobs',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './list-jobs.component.html',
  styleUrl: './list-jobs.component.css'
})
export class ListJobsComponent {

  constructor(private jobServ:NdmajobService){}

  jobs = this.jobServ.jobs;
  
}
