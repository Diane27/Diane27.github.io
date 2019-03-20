import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDetails(){
    const dialogRef = this.dialog.open(ProjectDetailsComponent, {
      width: '500px',
      data: {project: this.project}
    });
  }

}
