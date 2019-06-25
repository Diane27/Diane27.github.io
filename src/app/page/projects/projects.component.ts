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
        image: "assets/recovery-bot-cover.png",
        tags: ["Microsoft Azure", "Fitbit API", "ChatBot", "NLP"],
        github: 'https://github.com/RecoveryBot',
        devpost: 'https://devpost.com/software/recovery-bot',
        description: "In order to help those who struggle with alcohol or drug addictions, this mobile app provides therapy like conversations with a trained chatbot, monitors the heart rate and notifies relatives in case of a potential relapse.",
        color: 'rgb(0, 208, 132)'
      },
      {
        title: "Care Buddy",
        image: "assets/carebuddy-cover.png",
        tags: ["GCP", "Image Recognition", "Chat", "Health"],
        github: 'https://github.com/Diane27/HackDavis2019',
        devpost: 'https://devpost.com/software/carebuddy',
        description: "CareBuddy is an elderly friendly application that helps patients suffering from any form of dementia or Alzheimer's to remember past events and record new ones.",
        color: 'rgb(235, 20, 76)'
      },
      //(247, 141, 167)
      {
        title: "Autism Care",
        image: "assets/autism-care-cover.png",
        tags: ["Microsoft Azure", "sentimen analysis", "Image Recognition"],
        github: 'https://github.com/athenahacks19',
        devpost: 'https://devpost.com/software/autism-app',
        description: "A digital platform that helps parents of children with autism, while also improving the lives of the children themselves. Inspired by the Autism awareness month, this app ",
        color: 'rgb(22, 136, 254)'
      },
    ]
  }

}
