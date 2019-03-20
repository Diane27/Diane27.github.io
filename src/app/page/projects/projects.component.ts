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
        image: "assets/recovery-bot.png",
        tags: ["Microsoft Azure", "Fitbit API", "ChatBot", "NLP"],
        description: "Helps drug addict overcome withdrawal",
        color: 'rgb(0, 208, 132)'
      },
      {
        title: "Care Buddy",
        image: "assets/care-buddy.png",
        tags: ["GCP", "Image Recognition", "Chat", "Health"],
        description: "Helps drug addict overcome withdrawal",
        color: 'rgb(235, 20, 76)'
      },
      //(247, 141, 167)
      {
        title: "EmergAlert",
        image: "assets/emerg-alert.jpg",
        tags: ["Microsoft Azure", "Twilio API", "Image Recognition"],
        description: "Helps drug addict overcome withdrawal",
        color: 'rgb(22, 136, 254)'
      },
    ]
  }

}
