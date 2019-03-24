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
        devpost: 'https://devpost.com/software/recovery-bot',
        description: "In order to help those who struggle with alcohol or drug addictions, this mobile app provides therapy like conversations with a trained chatbot, monitors the heart rate and notifies relatives in case of a potential relapse.",
        color: 'rgb(0, 208, 132)'
      },
      {
        title: "Care Buddy",
        image: "assets/test-image.png",
        tags: ["GCP", "Image Recognition", "Chat", "Health"],
        github: 'https://github.com/Diane27/HackDavis2019',
        devpost: 'https://devpost.com/software/carebuddy',
        description: "CareBuddy is an elderly friendly application that helps patients suffering from any form of dementia or Alzheimer's to remember past events and record new ones.",
        color: 'rgb(235, 20, 76)'
      },
      //(247, 141, 167)
      {
        title: "EmergAlert",
        image: "assets/test-image.png",
        tags: ["Microsoft Azure", "Twilio API", "Image Recognition"],
        github: 'https://github.com/EmergAlert',
        devpost: 'https://devpost.com/software/emergalert-gq3yva',
        description: "A digital platform that recognizes emergencies and gives immediate responses. EmergAlert analyzes the footage from security cameras frame-by-frame for the possibility of someone possessing a gun in the school ground. It then sends an alert through text if a threatening shooter is detected.",
        color: 'rgb(22, 136, 254)'
      },
    ]
  }

}
