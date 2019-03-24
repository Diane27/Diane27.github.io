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
        image: "assets/test-image.png",
        tags: ["Microsoft Azure", "Fitbit API", "ChatBot", "NLP"],
        github: 'https://github.com/RecoveryBot',
        description: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
        color: 'rgb(0, 208, 132)'
      },
      {
        title: "Care Buddy",
        image: "assets/test-image.png",
        tags: ["GCP", "Image Recognition", "Chat", "Health"],
        github: 'https://github.com/Diane27/HackDavis2019',
        description: "Helps drug addict overcome withdrawal",
        color: 'rgb(235, 20, 76)'
      },
      //(247, 141, 167)
      {
        title: "EmergAlert",
        image: "assets/test-image.png",
        tags: ["Microsoft Azure", "Twilio API", "Image Recognition"],
        github: 'https://github.com/EmergAlert',
        description: "Helps drug addict overcome withdrawal",
        color: 'rgb(22, 136, 254)'
      },
    ]
  }

}
