import { Component, OnInit, Input } from '@angular/core';
import { projection } from '@angular/core/src/render3';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project;
  constructor() { }

  ngOnInit() {
  }

}
