import { Component, OnInit } from '@angular/core';
import Granim from 'granim';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let granimInstance = new Granim({
      element: '#granim-canvas',
      name: 'granim',
      direction: 'top-bottom',
      image : {
        source: 'assets/background.jpg',
        blendingMode: 'multiply'
      },
      states : {
          "default-state": {
              gradients: [
                  ['#834D9B', '#D04ED6'],
                  ['#1CD8D2', '#93EDC7']
              ],
              transitionSpeed: 7000
          }
      }
    });
  }

}
