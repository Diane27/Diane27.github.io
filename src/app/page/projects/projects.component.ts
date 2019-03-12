import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [];
  constructor() { }

  ngOnInit() {
    this.projects = [
      {
        title: "Recovery Bot",
        tags: ["Microsoft Azure", "Fitbit API", "ChatBot", "NLP"],
        description: "Helps drug addict overcome withdrawal",
      },
      {
        title: "Recovery Bot",
        tags: ["Microsoft Azure", "Fitbit API", "ChatBot", "NLP"],
        description: "Helps drug addict overcome withdrawal",
      },
      {
        title: "Recovery Bot",
        tags: ["Microsoft Azure", "Fitbit API", "ChatBot", "NLP"],
        description: "Helps drug addict overcome withdrawal",
      },
    ]
  }

}
